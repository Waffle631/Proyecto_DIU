import React from 'react';
import '../styles/ChatButton.css';

const ChatButton = ({ onChatClick }) => {
  return (
    <button className="chat-button" onClick={onChatClick}>
      Envía un mensaje
    </button>
  );
};

export default ChatButton;
