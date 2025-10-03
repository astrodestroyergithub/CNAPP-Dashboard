import React, { useState } from 'react';
import ChatbotButton from './ChatbotButton';
import Chatbox from './Chatbox';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbox = () => setIsOpen((prev) => !prev);

  return (
    <>
      {isOpen && <Chatbox onClose={toggleChatbox} />}
      <ChatbotButton onClick={toggleChatbox} />
    </>
  );
};

export default Chatbot;
