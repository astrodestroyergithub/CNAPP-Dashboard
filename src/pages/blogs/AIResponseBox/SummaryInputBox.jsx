import { useState, useEffect, useRef } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoadingSpinner from "../../../components/Spinner/LoadingSpinner";
import ExcerptModal from "../AIExcerptModal/ExcerptModal";
import { useSelector, useDispatch } from "react-redux";
import { GoogleGenAI } from "@google/genai";
import { setSelectedGKsInfo } from "../../../store/gkSlice";
import './SummaryInputBox.scss';

export default function SummaryInputBox({ blogs }) {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [displayedText, setDisplayedText] = useState(""); 
  const [isGenerating, setIsGenerating] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [citeSourcesModalOpen, setCiteSourcesModalOpen] = useState(false);

  const lastId = parseInt(blogs[blogs.length - 1]?.qno);
  const maxAllowed = lastId - 20;

  const intervalRef = useRef(null);
  const dispatch = useDispatch();

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
    
    dispatch(setSelectedGKsInfo(selectedGKs));

    const selectedGKContent = [];

    selectedGKs.forEach((gk) => {
      selectedGKContent.push(`Question: ${gk.ques}\nAnswer: ${gk.ans}`);
    });

    const prompt = `Generate a concise summary for the following General Knowledge Q&A pairs. Make sure to exclude any special characters or formattings and provide the summary in a single paragraph with human readable sentences. Be precise, concise and straight to the point. Remember that the summary is intended for last minute revision only. The 20 Q&A pairs are given below:\n\n${selectedGKContent.reduce((acc, val) => acc + "\n\n" + val)}`;

    /* let response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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
    }); */

    const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });

    async function getGeminiResponse() {
    const geminiResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
    return geminiResponse.text;
    }

    /* const result = await response.json();
    setLoading(false);

    if (result.error.message.includes("Rate limit exceeded")) {
        setResponseText("There is some error! Please try again later.");
    } else {
        response = result.choices[0].message.content.trim();
        console.log(response);
        setResponseText(response);
    } */
    
    let response = getGeminiResponse()
    .then(message => {
        setResponseText(message);
        console.log("Message: ", message);
        setLoading(false);
    })
    .catch(error => {
        setResponseText(`There is some error. ${error}`);
        setLoading(false);
    });
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
        /* if (!responseText.includes("error")) {
            setCiteSourcesModalOpen(true);
        } */
       if (!responseText.includes("There is some error")) {
            setCiteSourcesModalOpen(true);
       }
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
        <ExcerptModal
            gks={blogs}
            startingNo={isValid ? Number(inputValue) : null}
            endingNo={isValid ? Number(inputValue) + 19 : null}
            visible={citeSourcesModalOpen}
            onClose={() => setCiteSourcesModalOpen(false)}
        />
    </div>
  );
}
