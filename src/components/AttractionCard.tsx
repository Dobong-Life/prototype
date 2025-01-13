import React from 'react';
import { Heart } from 'lucide-react';
import { Attraction } from '../types';

interface AttractionCardProps {
  attraction: Attraction;
  onClick: () => void;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="relative h-32">
        <img
          src={attraction.imageUrl}
          alt={attraction.name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full">
          <Heart className="w-4 h-4 text-red-500" />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm mb-1">
          {attraction.name}
        </h3>
        <p className="text-xs text-gray-500">{attraction.addressDong}</p>
        <p className="text-xs text-gray-400 mt-1">
          {attraction.category} - {attraction.subcategory}
        </p>
      </div>
    </div>
  );
};
