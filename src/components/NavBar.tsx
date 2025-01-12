import React from 'react';
import { Home, Utensils, Briefcase, Landmark, User } from 'lucide-react';

interface NavBarProps {
  activeTab: 'home' | 'restaurants' | 'business' | 'attractions' | 'mypage';
  onTabChange: (tab: 'home' | 'restaurants' | 'business' | 'attractions' | 'mypage') => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', label: '홈', icon: Home },
    { id: 'restaurants', label: '맛집가이드', icon: Utensils },
    { id: 'business', label: '비즈니스가이드', icon: Briefcase },
    { id: 'attractions', label: '명소가이드', icon: Landmark },
    { id: 'mypage', label: '마이페이지', icon: User },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-[390px] mx-auto z-50">
      <div className="flex justify-between px-2">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center py-2 px-3 ${
              activeTab === id
                ? 'text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
