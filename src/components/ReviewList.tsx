import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { Review } from '../types';

interface ReviewListProps {
  reviews: Review[];
  onWriteReview: () => void;
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews, onWriteReview }) => {
  return (
    <div className="pb-20 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">리뷰</h3>
        <button
          onClick={onWriteReview}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
        >
          리뷰 작성
        </button>
      </div>
      
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-800">{review.userName}</span>
              <span className="text-sm text-gray-500">{review.createdAt}</span>
            </div>
            
            {review.imageUrl && (
              <div className="mb-3">
                <img
                  src={review.imageUrl}
                  alt="Review"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
            
            <p className="text-gray-600 mb-3">{review.comment}</p>
            
            <div className="flex flex-wrap gap-2">
              {review.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <button className="mt-3 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
              <ThumbsUp className="w-4 h-4" />
              <span>도움돼요</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};