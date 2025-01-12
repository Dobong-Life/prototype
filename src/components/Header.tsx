import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 max-w-[390px] mx-auto">
      <div className="flex items-center justify-between px-4 h-14">
        <Menu className="w-6 h-6 text-gray-600" />
        <h1 
          onClick={onLogoClick}
          className="text-xl font-bold text-gray-800 cursor-pointer hover:text-blue-500 transition-colors"
        >
          Dobong Life
        </h1>
        <button className="text-sm text-gray-600">로그인</button>
      </div>
    </header>
  );
};