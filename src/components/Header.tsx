import React from 'react';

interface HeaderProps {
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 max-w-[390px] mx-auto">
      <div className="flex items-center justify-between px-4 h-14">
        {/* 로고 텍스트 제거 */}
        <img
          src="/logo.png" // public 디렉토리에 있는 파일
          alt="Dobong Life"
          onClick={onLogoClick}
          className="h-8 cursor-pointer hover:opacity-80 transition-opacity"
        />
        <button className="text-sm text-gray-600">로그인</button>
      </div>
    </header>
  );
};
