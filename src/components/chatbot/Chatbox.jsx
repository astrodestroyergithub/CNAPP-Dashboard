import React, { useState } from 'react';
import './Chatbot.scss';
import AddWidgetBar from '../AddWidgetBar';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good Morning';
  if (hour >= 12 && hour < 17) return 'Good Afternoon';
  if (hour >= 17 && hour < 21) return 'Good Evening';
  return 'Good Night';
};

const Chatbox = ({ onClose }) => {
  const [chatboxQuery, setChatboxQuery] = useState(null);
  return (
    <div className="chatbox">
      <div className="chatbox-header">
        Snaprex
        <button onClick={onClose} className="chatbox-close" aria-label="Close chat">
          ✕
        </button>
      </div>
      <div className="chatbox-body">
        {getGreeting()}, How can I help you?
      </div>
      <div className="chatbox-input">
        <AddWidgetBar value={chatboxQuery} onChange={setChatboxQuery} placeholder="Ask me anything..." />
      </div>
    </div>
  );
};

export default Chatbox;
