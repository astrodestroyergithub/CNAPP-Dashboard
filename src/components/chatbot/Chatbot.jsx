import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChatBoxState } from '../../store/dashboardSlice'
import ChatbotButton from './ChatbotButton'
import Chatbox from './Chatbox'

const Chatbot = () => {
  const dispatch = useDispatch()

  const chatBoxState = useSelector((state) => state.dashboard.isChatBoxOpen)

  const toggleChatbox = () => {
    dispatch(setChatBoxState(!chatBoxState))
  };

  return (
    <>
      {chatBoxState && <Chatbox onClose={toggleChatbox} />}
      {!chatBoxState && <ChatbotButton onClick={toggleChatbox} />}
    </>
  )
}

export default Chatbot
