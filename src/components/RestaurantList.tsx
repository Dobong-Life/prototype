import React from 'react';
import { Restaurant } from '../types';
import { RestaurantCard } from './RestaurantCard';

interface RestaurantListProps {
  restaurants: Restaurant[];
  onRestaurantClick: (restaurant: Restaurant) => void;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  onRestaurantClick,
}) => {
  // Group restaurants by tagCategory and then by hashtags
  const groupedByHashtags = restaurants.reduce((acc, restaurant) => {
    restaurant.hashtags.forEach(hashtag => {
      if (!acc[hashtag]) {
        acc[hashtag] = [];
      }
      acc[hashtag].push(restaurant);
    });
    return acc;
  }, {} as Record<string, Restaurant[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedByHashtags).map(([hashtag, restaurants]) => (
        <div key={hashtag}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">#{hashtag}</h3>
            <button className="text-sm text-gray-600">더보기</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {restaurants.slice(0, 4).map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onClick={() => onRestaurantClick(restaurant)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};