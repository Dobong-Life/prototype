import React from "react";
import { Heart } from "lucide-react";
import { Business } from "../types";

interface BusinessCardProps {
  business: Business;
  onClick: () => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="relative h-32">
        <img
          src={business.imageUrl}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full">
          <Heart className="w-4 h-4 text-red-500" />
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
