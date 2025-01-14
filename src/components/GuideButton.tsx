import React from 'react';

interface GuideButtonProps {
  imageSrc: string; // 버튼의 배경 이미지 경로
  altText: string; // 접근성을 위한 이미지 설명
  onClick: () => void; // 클릭 이벤트 핸들러
}

export const GuideButton: React.FC<GuideButtonProps> = ({
  imageSrc,
  altText,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative h-40 w-full flex justify-center items-center rounded-xl shadow-md overflow-hidden focus:outline-none transition-transform"
    >
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </button>
  );
};