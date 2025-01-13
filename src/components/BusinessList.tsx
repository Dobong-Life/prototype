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
  // Group businesses by tagCategory
  const groupedByTagCategory = businesses.reduce((acc, business) => {
    if (!acc[business.tagCategory]) {
      acc[business.tagCategory] = [];
    }
    acc[business.tagCategory].push(business);
    return acc;
  }, {} as Record<string, Business[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedByTagCategory).map(([tagCategory, group]) => (
        <div key={tagCategory}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">{tagCategory}</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {group.map((business) => (
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
