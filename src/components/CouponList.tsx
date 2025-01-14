import React from "react";
import { Coupon } from "../types";
import { CouponCard } from "./CouponCard";

interface CouponListProps {
  coupons: Coupon[];
  onClose: () => void;
}

export const CouponList: React.FC<CouponListProps> = ({ coupons, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md max-h-[80vh] overflow-y-auto rounded-lg p-4">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 mb-4"
        >
          닫기
        </button>
        <div className="space-y-4">
          {coupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>
    </div>
  );
};
