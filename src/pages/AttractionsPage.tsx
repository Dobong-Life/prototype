import { useState } from "react";
import { attractions } from "../data/mockData";

import { AttractionModal } from "../components/AttractionModal";
import { Attraction } from "../types";
import { AttractionList } from "../components/AttractionList";

export const AttractionsPage: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] =
    useState<Attraction | null>(null);

  const handleAttractionClick = (attraction: Attraction) => {
    setSelectedAttraction(attraction);
  };

  const closeModal = () => {
    setSelectedAttraction(null);
  };

  // 리뷰 보기 함수
  const handleViewReviews = (attractionId: string) => {
    console.log(`리뷰 페이지로 이동: ${attractionId}`);
    // 여기에 네비게이션 로직 추가 가능
    // 예: navigate(`/attractions/${attractionId}/reviews`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Attraction List */}
      <AttractionList
        attractions={attractions}
        onAttractionClick={handleAttractionClick}
      />

      {/* Attraction Modal */}
      {selectedAttraction && (
        <AttractionModal 
          attraction={selectedAttraction}
          onClose={closeModal}
          onViewReviews={handleViewReviews} // onViewReviews 추가
        />
      )}
    </div>
  );
};
