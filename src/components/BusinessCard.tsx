import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Business } from "../types";
import { LoadingSpinner } from "./LoadingSpinner";

interface BusinessCardProps {
  business: Business;
  onClick: () => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  onClick,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 클릭 이벤트 방지
    setIsLiked((prev) => !prev);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true); // 이미지 로드 완료 시 상태 업데이트
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="relative h-32">
        {/* 로딩 스피너 */}
        {!isImageLoaded && <LoadingSpinner />}

        {/* 이미지 */}
        <img
          src={business.imageUrl}
          alt={business.name}
          className={`w-full h-full object-cover transition-opacity ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
        />

        <button
          onClick={handleLikeToggle}
          className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full"
        >
          <Heart
            className="w-4 h-4"
            fill={isLiked ? "red" : "none"} // 좋아요일 때 빨간색으로 채움
            stroke={isLiked ? "none" : "gray"} // 좋아요 아닐 때 회색 테두리
          />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm mb-1">
          {business.name}
        </h3>
        <p className="text-xs text-gray-500">{business.addressDong}</p>
      </div>
    </div>
  );
};
