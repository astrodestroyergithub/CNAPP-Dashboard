import { useState } from 'react'
import './Chatbot.scss'
import SendIcon from '@mui/icons-material/Send'
import ChatboxTextInputBar from './ChatboxTextInputBar'

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good morning';
  if (hour >= 12 && hour < 17) return 'Good afternoon';
  if (hour >= 17 && hour < 21) return 'Good evening';
  return 'Good night';
};

const Chatbox = ({ onClose }) => {
  const [chatboxQuery, setChatboxQuery] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Chat query submitted:', e.target.value);
    // @Todo: write chatbox form submission logic here
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">
        Snaprex
        <div className="chatbox-header-right">
          <button onClick={onClose} className="chatbox-minimize" aria-label="Minimize chat"> - </button>
          <button onClick={onClose} className="chatbox-close" aria-label="Close chat"> ✕ </button>
        </div>
      </div>
      <div className="chatbox-body">
        {getGreeting()}, how may I help you?
      </div>
      <form onSubmit={handleSubmit} className="chatbox-input">
        <ChatboxTextInputBar
          value={chatboxQuery}
          onChange={setChatboxQuery}
          placeholder="Ask me anything..."
        />
        <button type="submit" className="send-button" aria-label="Send message">
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
