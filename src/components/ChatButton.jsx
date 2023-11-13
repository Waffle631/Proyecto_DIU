import React from 'react';
//import './ChatButton.css'; // Assuming you have a CSS file for styles

const ChatButton = ({ onChatClick }) => {
  return (
    <button className="chat-button" onClick={onChatClick}>
      Envía un mensaje
    </button>
  );
};

export default ChatButton;
