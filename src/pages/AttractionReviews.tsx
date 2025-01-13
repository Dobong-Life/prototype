import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Attraction } from "../types";
import { ReviewList } from "../components/ReviewList";
import { WriteReview } from "../components/WriteReview";
import { reviews } from "../data/mockData";

interface AttractionReviewsProps {
  attraction: Attraction;
  onBack: () => void;
}

export const AttractionReviews: React.FC<AttractionReviewsProps> = ({
  attraction,
  onBack,
}) => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const filteredReviews = reviews.filter(
    (r) => r.attractionId === attraction.id
  );

  return (
    <div>
      <header>
        <button onClick={onBack}>
          <ArrowLeft />
        </button>
        <h1>{attraction.name} 리뷰</h1>
      </header>
      <ReviewList
        reviews={filteredReviews}
        onWriteReview={() => setShowWriteReview(true)}
      />
      {showWriteReview && (
        <WriteReview
          onClose={() => setShowWriteReview(false)}
          onSubmit={(review) => {
            console.log("새로운 리뷰:", review);
            setShowWriteReview(false);
          }}
        />
      )}
    </div>
  );
};
