import React, { useState } from 'react';
import ChatButton from '../components/ChatButton.jsx';
import ChatWindow from '../components/ChatWindow.jsx';

const Chat = () => {
    const [isChatVisible, setChatVisible] = useState(false);

    const handleChatClick = () => {
      setChatVisible(!isChatVisible); // This will toggle the visibility of the chat
    };
  
    // Mock messages
    const messages = [
      { sender: 'user', content: 'Hola, sigues disponible para la ayudantía?' },
      { sender: 'applicant', content: 'Sí, aún sigo disponioble' },
      { sender: 'user', content: 'Perfecto, quedas seleccionada' },
      { sender: 'applicant', content: 'Gracias!' },
    ];
  
    return (
      <div>
        {/* Other components */}
        <ChatButton onChatClick={handleChatClick} />
        <ChatWindow isVisible={isChatVisible} onClose={handleChatClick} messages={messages} />
      </div>
    );
  };

export default Chat;