import React, { useState } from 'react';
import ChatInput from './ai/ChatInput';
import ChatSuggestions from './ai/ChatSuggestions';

const defaultSuggestions = [
  { label: 'Protocol performance' },
  { label: 'Review report' },
  { label: 'Setup a session' }
];

const AIChat: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Handle message sending
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 lg:left-16 right-0 backdrop-blur-md bg-white/70 shadow-lg rounded-t-xl p-4">
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-900">AI Assistant</h2>
        <p className="text-sm text-gray-500">
          UyIr can assist you in understanding and reviewing your patient information.
        </p>
        <ChatSuggestions suggestions={defaultSuggestions} />
      </div>
      <ChatInput 
        value={message}
        onChange={setMessage}
        onSend={handleSend}
      />
    </div>
  );
};

export default AIChat;