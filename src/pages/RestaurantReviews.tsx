import React, { useState } from "react";
import { ArrowLeft, Heart, Map } from "lucide-react";
import { Restaurant } from "../types";
import { ReviewList } from "../components/ReviewList";
import { WriteReview } from "../components/WriteReview";
import { reviews } from "../data/mockData";

interface RestaurantReviewsProps {
  restaurant: Restaurant;
  onBack: () => void;
}

export const RestaurantReviews: React.FC<RestaurantReviewsProps> = ({
  restaurant,
  onBack,
}) => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const filteredReviews = reviews.filter((r) => r.restaurantId === restaurant.id);

  const handleSubmitReview = (review: {
    comment: string;
    tags: string[];
    image?: File;
  }) => {
    console.log("New review:", review);
    setShowWriteReview(false);
  };

  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  const handleMapClick = () => {
    if (restaurant.mapUrl) {
      window.open(restaurant.mapUrl, "_blank");
    } else {
      alert("지도 정보가 등록되지 않았습니다.");
    }
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
          {/* Restaurant Image */}
          <div className="relative h-64">
            <img
              src={restaurant.imageUrl}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Restaurant Details */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                {restaurant.name}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handleLikeToggle}
                  className="p-2 bg-gray-100 rounded-full"
                >
                  <Heart
                    className="w-6 h-6"
                    fill={isLiked ? "red" : "none"}
                    stroke={isLiked ? "none" : "gray"}
                  />
                </button>
                <button
                  onClick={handleMapClick}
                  className="p-2 bg-gray-100 rounded-full"
                >
                  <Map className="w-6 h-6 text-blue-500" />
                </button>
              </div>
            </div>

            <p className="text-gray-600 mt-2">{restaurant.addressDong}</p>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">대표 메뉴</h3>
              <div className="mt-2 space-y-2">
                {restaurant.mainMenu.map((menu) => (
                  <div key={menu} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="text-gray-600">{menu}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {restaurant.hashtags.map((tag) => (
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
