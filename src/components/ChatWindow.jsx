import React from 'react';
//import './ChatWindow.css'; // Assuming you have a CSS file for styles

const ChatWindow = ({ isVisible, onClose, messages }) => {
    if (!isVisible) return null;
  
    // Mock function to simulate sending a message
    const sendMessage = (e) => {
      e.preventDefault();
      // Here you would normally handle the message sending logic
      alert('Message sent!');
    };
  
    return (
      <div className="chat-window">
        <button onClick={onClose} className="close-chat">X</button>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <div className="message-content">{message.content}</div>
            </div>
          ))}
        </div>
        {/* Mock input box for sending messages */}
        <form onSubmit={sendMessage} className="message-form">
          <input type="text" placeholder="Escribe un mensaje..." className="message-input" />
          <button type="submit" className="send-button">Enviar</button>
        </form>
      </div>
    );
  };
  
  export default ChatWindow;