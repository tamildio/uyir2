import React from 'react';

interface ChatSuggestion {
  label: string;
  onClick?: () => void;
}

interface ChatSuggestionsProps {
  suggestions: ChatSuggestion[];
}

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({ suggestions }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={suggestion.onClick}
          className="px-4 py-2 text-sm text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors"
        >
          {suggestion.label}
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;