import React from 'react';
import { Heart } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onClick,
}) => {
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
        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full">
          <Heart className="w-4 h-4 text-red-500" />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm mb-1">{restaurant.name}</h3>
        <p className="text-xs text-gray-500">{restaurant.addressDong}</p>
      </div>
    </div>
  );
};