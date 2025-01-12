import React, { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';
import { popularTags } from '../data/mockData';

interface WriteReviewProps {
  onClose: () => void;
  onSubmit: (review: {
    comment: string;
    tags: string[];
    image?: File;
  }) => void;
}

export const WriteReview: React.FC<WriteReviewProps> = ({ onClose, onSubmit }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      comment,
      tags: selectedTags,
      image: image || undefined,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] flex items-center justify-center">
      <div className="bg-white w-full max-w-[390px] max-h-[80vh] rounded-xl overflow-y-auto m-4">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">리뷰 작성</h2>
            <button onClick={onClose} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">태그 선택</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => {
                    if (selectedTags.includes(tag.name)) {
                      setSelectedTags(selectedTags.filter((t) => t !== tag.name));
                    } else {
                      setSelectedTags([...selectedTags, tag.name]);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedTags.includes(tag.name)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  #{tag.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">사진 추가</h3>
            <div className="relative">
              {preview ? (
                <div className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setPreview(null);
                    }}
                    className="absolute top-2 right-2 p-1 bg-white/80 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500">
                    사진을 선택하세요
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">리뷰 작성</h3>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="리뷰를 작성해주세요"
              className="w-full h-32 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            리뷰 등록
          </button>
        </form>
      </div>
    </div>
  );
};