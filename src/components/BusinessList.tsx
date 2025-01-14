import React, { useState } from "react";
import { Business } from "../types";
import { BusinessCard } from "./BusinessCard";
import { CouponList } from "./CouponList";
import { coupons } from "../data/mockData";

interface BusinessListProps {
  businesses: Business[];
  onBusinessClick: (business: Business) => void;
}

export const BusinessList: React.FC<BusinessListProps> = ({
  businesses,
  onBusinessClick,
}) => {
  const [showCoupons, setShowCoupons] = useState(false);

  const groupedByTagCategory = businesses.reduce((acc, business) => {
    if (!acc[business.tagCategory]) {
      acc[business.tagCategory] = [];
    }
    acc[business.tagCategory].push(business);
    return acc;
  }, {} as Record<string, Business[]>);

  return (
    <div className="relative space-y-8 pb-20"> {/* Add padding-bottom for content */}
      {Object.entries(groupedByTagCategory).map(([tagCategory, group]) => (
        <div key={tagCategory}>
          <h3 className="font-semibold text-gray-800 mb-3">{tagCategory}</h3>
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

      {/* Coupon Book Button */}
      <button
        onClick={() => setShowCoupons(true)}
        className="fixed bottom-20 right-4 bg-[#FF6F20] text-white px-4 py-3 rounded-[10px] shadow-lg hover:bg-[#FF5710] transition-colors z-30 font-medium"
      >
        쿠폰 확인
      </button>

      {/* Coupon List */}
      {showCoupons && (
        <CouponList
          coupons={coupons}
          onClose={() => setShowCoupons(false)}
        />
      )}
    </div>
  );
};
