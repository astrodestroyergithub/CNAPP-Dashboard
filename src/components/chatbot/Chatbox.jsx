import React from 'react';
import './Chatbot.scss';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good Morning';
  if (hour >= 12 && hour < 17) return 'Good Afternoon';
  if (hour >= 17 && hour < 21) return 'Good Evening';
  return 'Good Night';
};

const Chatbox = ({ onClose }) => {
  return (
    <div className="chatbox">
      <div className="chatbox-header">
        Chat Assistant
        <button onClick={onClose} className="chatbox-close" aria-label="Close chat">
          ✕
        </button>
      </div>
      <div className="chatbox-body">
        {getGreeting()}, How can I help you?
      </div>
    </div>
  );
};

export default Chatbox;
