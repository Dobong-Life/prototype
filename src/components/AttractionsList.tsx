import React from 'react';
import { Attraction } from '../types';
import { AttractionCard } from './AttractionCard';

interface AttractionListProps {
  attractions: Attraction[];
  onAttractionClick: (attraction: Attraction) => void;
}

export const AttractionList: React.FC<AttractionListProps> = ({
  attractions,
  onAttractionClick,
}) => {
  // Group attractions by tagCategory and then by hashtags
  const groupedByHashtags = attractions.reduce((acc, attraction) => {
    attraction.hashtags.forEach((hashtag) => {
      if (!acc[hashtag]) {
        acc[hashtag] = [];
      }
      acc[hashtag].push(attraction);
    });
    return acc;
  }, {} as Record<string, Attraction[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedByHashtags).map(([hashtag, attractions]) => (
        <div key={hashtag}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">#{hashtag}</h3>
            <button className="text-sm text-gray-600">더보기</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {attractions.slice(0, 4).map((attraction) => (
              <AttractionCard
                key={attraction.id}
                attraction={attraction}
                onClick={() => onAttractionClick(attraction)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
