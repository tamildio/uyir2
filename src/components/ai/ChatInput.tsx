import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSend }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Message your thoughts and questions here"
        className="flex-1 p-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button 
        onClick={onSend}
        className="p-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ChatInput;