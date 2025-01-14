import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Restaurant } from "../types";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onClick,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 클릭 이벤트 방지
    setIsLiked((prev) => !prev);
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="relative h-32">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-full object-cover"
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
          {restaurant.name}
        </h3>
        <p className="text-xs text-gray-500">{restaurant.addressDong}</p>
      </div>
    </div>
  );
};
