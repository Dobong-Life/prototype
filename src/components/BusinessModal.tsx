import React from "react";
import { X, Heart, Map, MessageCircle } from "lucide-react";
import { Business } from "../types";

interface BusinessModalProps {
  business: Business;
  onClose: () => void;
  onViewReviews: (businessId: string) => void;
}

export const BusinessModal: React.FC<BusinessModalProps> = ({
  business,
  onClose,
  onViewReviews,
}) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] flex items-center justify-center">
      <div className="bg-white w-full max-w-[390px] max-h-[80vh] rounded-xl overflow-y-auto m-4">
        {/* 이미지 섹션 */}
        <div className="relative h-64">
          <img
            src={business.imageUrl}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/80 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 본문 섹션 */}
        <div className="p-6">
          {/* 제목 및 버튼 */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {business.name}
            </h2>
            <div className="flex gap-2">
              <button className="p-2 bg-gray-100 rounded-full">
                <Heart className="w-6 h-6 text-red-500" />
              </button>
              {business.mapUrl ? (
                <button
                  onClick={() => window.open(business.mapUrl, "_blank")}
                  className="p-2 bg-gray-100 rounded-full"
                >
                  <Map className="w-6 h-6 text-blue-500" />
                </button>
              ) : (
                <button
                  onClick={() => alert("지도 정보가 등록되지 않았습니다.")}
                  className="p-2 bg-gray-100 rounded-full"
                >
                  <Map className="w-6 h-6 text-gray-500" />
                </button>
              )}
            </div>
          </div>

          {/* 주소 정보 */}
          <p className="text-gray-600 mt-2">
            {business.addressDetail
              ? business.addressDetail
              : `${business.addressDong} (상세 주소 미등록)`}
          </p>

          {/* 주요 항목 */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">주요 항목</h3>
            <div className="mt-2 space-y-2">
              {business.mainItem.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 태그 */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">태그</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {business.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 리뷰 보기 버튼 */}
          <button
            onClick={() => onViewReviews(business.id)}
            className="w-full mt-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            리뷰 보기
          </button>
        </div>
      </div>
    </div>
  );
};
