import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { Restaurant } from '../types';

interface RestaurantProps {
  restaurant: Restaurant;
}

export const RestaurantComponent: React.FC<RestaurantProps> = ({ restaurant }) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="relative">
      {imageLoading && (
        <div className="absolute inset-0 bg-gray-100">
          <LoadingSpinner />
        </div>
      )}
      <img
        src={restaurant.imageUrl}
        alt={restaurant.name}
        className="w-full h-48 object-cover rounded-lg"
        onLoad={() => setImageLoading(false)}
      />
      <h2>{restaurant.name}</h2>
      <p>{restaurant.addressDong}</p>
    </div>
  );
};