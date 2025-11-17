import { useState, useEffect, useRef } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoadingSpinner from "../../../components/Spinner/LoadingSpinner";
import './SummaryInputBox.scss';

export default function SummaryInputBox({ blogs }) {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [displayedText, setDisplayedText] = useState(""); 
  const [isGenerating, setIsGenerating] = useState(false); 
  const [loading, setLoading] = useState(false);

  const lastId = parseInt(blogs[blogs.length - 1]?.qno);
  const maxAllowed = lastId - 20;

  const intervalRef = useRef(null);

  const validate = (value) => {
    const num = Number(value);
    return Number.isInteger(num) && num >= 1 && num <= maxAllowed;
  };

  const handleBlur = () => {
    setTouched(true);
    setIsValid(validate(inputValue));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (touched) setIsValid(validate(e.target.value));
  };

  async function handleSubmit() {
    if (!isValid) return;

    setIsGenerating(true);
    setDisplayedText("");
    setResponseText("");
    setLoading(true);

    const startQno = Number(inputValue);
    const endQno = startQno + 19;

    const selectedGKs = blogs.filter(
      (blog) => Number(blog.qno) >= startQno && Number(blog.qno) <= endQno
    );

    const selectedGKContent = [];

    selectedGKs.forEach((gk) => {
      selectedGKContent.push(`Question: ${gk.ques}\nAnswer: ${gk.ans}`);
    });

    const prompt = `Generate a concise summary for the following General Knowledge Q&A pairs. Make sure to exclude any special characters or formattings and provide the summary in a single paragraph with human readable sentences. Be precise, concise and straight to the point. Remember that the summary is intended for last minute revision only. The 20 Q&A pairs are given below:\n\n${selectedGKContent.reduce((acc, val) => acc + "\n\n\n" + val)}\n\nSummary:`;

    let response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "openai/gpt-oss-20b:free",
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "reasoning": {"enabled": true}
        })
    });
    const result = await response.json();
    setLoading(false);
    response = result.choices[0].message.content.trim();

    setResponseText(response);
  };

  useEffect(() => {
    if (!responseText) return;

    let i = -1;
    intervalRef.current = setInterval(() => {
      setDisplayedText((prev) => prev + responseText[i]);
      i++;
      if (i >= responseText.length - 1) {
        clearInterval(intervalRef.current);
        setIsGenerating(false); 
      }
    }, 20); 

    return () => clearInterval(intervalRef.current);
  }, [responseText]);

  return (
    <div className="summary-box shadow-sm">
        <h4 className="mb-3 fw-bold text-primary">Generate GK Summary</h4>
        <label className="form-label fw-semibold">
            Starting Question Number
        </label>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${isValid ? "is-valid" : touched ? "is-invalid" : ""}`}
            placeholder={`Between 1 and ${maxAllowed}`}
        />
        {touched && !isValid && (
            <div className="invalid-feedback d-block mt-2">
            Please provide a whole number input between 1 and {maxAllowed}.
            </div>
        )}
        {touched && isValid && (
            <>
            <div className="valid-feedback d-block mt-2 fw-semibold">
                Click on the button to get a summary of all GK Q&As from question no.{" "}
                <strong>{Number(inputValue)}</strong> &{" "}
                <strong>{Number(inputValue) + 19}</strong> (Both inclusive).
            </div>
            <button
                className="btn btn-primary w-100 mt-3 d-flex align-items-center justify-content-center gap-2"
                onClick={handleSubmit}
            >
                <AutoAwesomeIcon fontSize="extra-small" sx={{marginRight: "10px"}} />
                Generate Summary
            </button>
            </>
        )}
        {displayedText && (
            <div className="response-box mt-4 position-relative">
            <p className="response-text">{displayedText}</p>
            <AutoAwesomeIcon
                className={`ai-icon ${isGenerating ? "pulsing" : ""}`}
                fontSize="large"
            />
            </div>
        )}
        <LoadingSpinner visible={loading} />
    </div>
  );
}
