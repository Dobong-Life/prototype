import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GuideButtonProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export const GuideButton: React.FC<GuideButtonProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
    >
      <div className="flex-shrink-0">
        <Icon className="w-8 h-8 text-gray-600" />
      </div>
      <div className="flex-1 text-left">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </button>
  );
};