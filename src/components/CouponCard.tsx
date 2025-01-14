import React from "react";
import { Coupon } from "../types";

interface CouponCardProps {
  coupon: Coupon;
}

export const CouponCard: React.FC<CouponCardProps> = ({ coupon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-800">{coupon.title}</h3>
      <p className="text-gray-600">{coupon.description}</p>
      <p className="text-blue-500 mt-2">{coupon.discount}</p>
      <p className="text-gray-400 text-sm">유효기간: {coupon.validUntil}</p>
    </div>
  );
};
