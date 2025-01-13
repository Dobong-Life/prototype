import React from "react";
import { Business } from "../types";
import { BusinessCard } from "./BusinessCard";

interface BusinessListProps {
  businesses: Business[];
  onBusinessClick: (business: Business) => void;
}

export const BusinessList: React.FC<BusinessListProps> = ({
  businesses,
  onBusinessClick,
}) => {
  const groupedByHashtags = businesses.reduce((acc, business) => {
    business.hashtags.forEach((hashtag) => {
      if (!acc[hashtag]) {
        acc[hashtag] = [];
      }
      acc[hashtag].push(business);
    });
    return acc;
  }, {} as Record<string, Business[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedByHashtags).map(([hashtag, businesses]) => (
        <div key={hashtag}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">#{hashtag}</h3>
            <button className="text-sm text-gray-600">더보기</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {businesses.slice(0, 4).map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                onClick={() => onBusinessClick(business)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
