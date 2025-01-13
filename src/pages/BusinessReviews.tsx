import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Business } from "../types";
import { ReviewList } from "../components/ReviewList";
import { WriteReview } from "../components/WriteReview";
import { reviews } from "../data/mockData";

interface BusinessReviewsProps {
  business: Business;
  onBack: () => void;
}

export const BusinessReviews: React.FC<BusinessReviewsProps> = ({
  business,
  onBack,
}) => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const filteredReviews = reviews.filter((r) => r.businessId === business.id);

  const handleSubmitReview = (review: {
    comment: string;
    tags: string[];
    image?: File;
  }) => {
    console.log("새로운 리뷰:", review);
    setShowWriteReview(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[390px] mx-auto bg-white min-h-screen">
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 max-w-[390px] mx-auto">
          <div className="flex items-center px-4 h-14">
            <button
              onClick={onBack}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="ml-2 text-xl font-bold text-gray-800">리뷰</h1>
          </div>
        </header>

        <div className="pt-14">
          {/* Business Image */}
          <div className="relative h-64">
            <img
              src={business.imageUrl}
              alt={business.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Business Details */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                {business.name}
              </h2>
            </div>
            <p className="text-gray-600 mt-2">{business.addressDong}</p>

            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
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
          </div>

          {/* Reviews Section */}
          <div className="p-4">
            <ReviewList
              reviews={filteredReviews}
              onWriteReview={() => setShowWriteReview(true)}
            />
          </div>
        </div>

        {showWriteReview && (
          <WriteReview
            onClose={() => setShowWriteReview(false)}
            onSubmit={handleSubmitReview}
          />
        )}
      </div>
    </div>
  );
};
