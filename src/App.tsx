import React, { useState } from 'react';
import { Utensils, Briefcase, Landmark, } from 'lucide-react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { GuideButton } from './components/GuideButton';
import { RestaurantList } from './components/RestaurantList';
import { FilterButton } from './components/FilterButton';
import { RestaurantModal } from './components/RestaurantModal';
import { RestaurantReviews } from './pages/RestaurantReviews';
import { AttractionList } from './components/AttractionList';
import { AttractionModal } from './components/AttractionModal';
import { restaurants, attractions } from './data/mockData';
import { Restaurant, Attraction } from './types';

function App() {
  const [selectedGuide, setSelectedGuide] = useState<'restaurants' | 'business' | 'attractions' | null>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [showReviews, setShowReviews] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'restaurants' | 'business' | 'attractions' | 'mypage'>('home');

  const handleViewReviews = (id: string, type: 'restaurant' | 'attraction') => {
    if (type === 'restaurant') {
      setShowReviews(true);
      setSelectedRestaurant(restaurants.find(r => r.id === id) || null);
    } else {
      console.log(`리뷰 보기: Attraction ID ${id}`);
      setSelectedAttraction(attractions.find(a => a.id === id) || null);
    }
  };

  const handleTabChange = (tab: 'home' | 'restaurants' | 'business' | 'attractions' | 'mypage') => {
    setActiveTab(tab);
    if (tab === 'home') {
      setSelectedGuide(null);
    } else if (tab === 'restaurants') {
      setSelectedGuide('restaurants');
    } else if (tab === 'business') {
      setSelectedGuide('business');
    } else if (tab === 'attractions') {
      setSelectedGuide('attractions');
    } else if (tab === 'mypage') {
      setSelectedGuide(null);
    }
  };

  const handleFilterClick = () => {
    console.log('Filter clicked');
  };

  if (showReviews && selectedRestaurant) {
    return (
      <>
        <RestaurantReviews
          restaurant={selectedRestaurant}
          onBack={() => {
            setShowReviews(false);
            setSelectedRestaurant(null);
          }}
        />
        <NavBar activeTab={activeTab} onTabChange={handleTabChange} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[390px] mx-auto bg-white min-h-screen relative pb-16">
        <Header onLogoClick={() => handleTabChange('home')} />
        
        <main className="pt-14 px-4 pb-8">
          {activeTab === 'home' && !selectedGuide ? (
            <div className="space-y-4 pt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">도봉구의 모든 것</h2>
              
              <GuideButton
                icon={Utensils}
                title="맛집 가이드"
                description="도봉구의 숨은 맛집을 찾아보세요"
                onClick={() => handleTabChange('restaurants')}
              />
              
              <GuideButton
                icon={Briefcase}
                title="비즈니스 가이드"
                description="지역 비즈니스 정보를 확인하세요"
                onClick={() => handleTabChange('business')}
              />
              
              <GuideButton
                icon={Landmark}
                title="명소 가이드"
                description="도봉구의 관광 명소를 둘러보세요"
                onClick={() => handleTabChange('attractions')}
              />
            </div>
          ) : activeTab === 'restaurants' && selectedGuide === 'restaurants' ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">맛집 가이드</h2>
                <button
                  onClick={() => handleTabChange('home')}
                  className="text-sm text-gray-600"
                >
                  뒤로가기
                </button>
              </div>
              
              <RestaurantList
                restaurants={restaurants}
                onRestaurantClick={setSelectedRestaurant}
              />
              
              <FilterButton onClick={handleFilterClick} />
            </div>
          ) : activeTab === 'attractions' && selectedGuide === 'attractions' ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">명소 가이드</h2>
                <button
                  onClick={() => handleTabChange('home')}
                  className="text-sm text-gray-600"
                >
                  뒤로가기
                </button>
              </div>
              
              <AttractionList
                attractions={attractions}
                onAttractionClick={setSelectedAttraction}
              />
              <FilterButton onClick={handleFilterClick} />
            </div>
          ) : activeTab === 'mypage' ? (
            <div className="flex items-center justify-center h-[80vh]">
              <p className="text-gray-500">Coming soon...</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[80vh]">
              <p className="text-gray-500">Coming soon...</p>
            </div>
          )}
        </main>

        {selectedRestaurant && !showReviews && (
          <RestaurantModal
            restaurant={selectedRestaurant}
            onClose={() => setSelectedRestaurant(null)}
            onViewReviews={(id) => handleViewReviews(id, 'restaurant')}
          />
        )}

        {selectedAttraction && (
          <AttractionModal
            attraction={selectedAttraction}
            onClose={() => setSelectedAttraction(null)}
            onViewReviews={(id) => handleViewReviews(id, 'attraction')}
          />
        )}

        <NavBar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
}

export default App;
