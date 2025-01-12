import React from 'react';
import { Filter } from 'lucide-react';

interface FilterButtonProps {
  onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-4 z-40 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      aria-label="Filter"
    >
      <Filter className="w-6 h-6" />
    </button>
  );
};