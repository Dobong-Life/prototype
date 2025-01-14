import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Attraction } from "../types";
import { LoadingSpinner } from "./LoadingSpinner";

interface AttractionCardProps {
  attraction: Attraction;
  onClick: () => void;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  onClick,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모의 클릭 이벤트 방지
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
          src={attraction.imageUrl}
          alt={attraction.name}
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
            fill={isLiked ? "red" : "none"} // 좋아요 상태에 따라 채움
            stroke={isLiked ? "none" : "gray"} // 좋아요 상태에 따라 테두리
          />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm mb-1">
          {attraction.name}
        </h3>
        <p className="text-xs text-gray-500">{attraction.addressDong}</p>
      </div>
    </div>
  );
};
