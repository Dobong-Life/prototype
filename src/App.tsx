import React, { useState } from "react";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { GuideButton } from "./components/GuideButton";
import { RestaurantList } from "./components/RestaurantList";
import { FilterButton } from "./components/FilterButton";
import { RestaurantModal } from "./components/RestaurantModal";
import { RestaurantReviews } from "./pages/RestaurantReviews";
import { AttractionList } from "./components/AttractionList";
import { AttractionModal } from "./components/AttractionModal";
import { restaurants, attractions, businesses } from "./data/mockData";
import { Restaurant, Attraction, Business } from "./types";
import { AttractionReviews } from "./pages/AttractionReviews";
import { BusinessList } from "./components/BusinessList";
import { BusinessModal } from "./components/BusinessModal";
import { BusinessReviews } from "./pages/BusinessReviews";

function App() {
  const [selectedGuide, setSelectedGuide] = useState<
    "restaurants" | "business" | "attractions" | null
  >(null);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [selectedAttraction, setSelectedAttraction] =
    useState<Attraction | null>(null);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null
  );
  const [showReviews, setShowReviews] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "home" | "restaurants" | "business" | "attractions" | "mypage"
  >("home");

  const handleViewReviews = (
    id: string,
    type: "restaurant" | "attraction" | "business"
  ) => {
    if (type === "restaurant") {
      setShowReviews(true);
      setSelectedRestaurant(restaurants.find((r) => r.id === id) || null);
    } else if (type === "attraction") {
      setShowReviews(true); // 상태 업데이트 추가
      setSelectedAttraction(attractions.find((a) => a.id === id) || null);
    } else if (type === "business") {
      setShowReviews(true);
      setSelectedBusiness(businesses.find((b) => b.id === id) || null);
    }
  };

  const handleTabChange = (
    tab: "home" | "restaurants" | "business" | "attractions" | "mypage"
  ) => {
    setActiveTab(tab);
    if (tab === "home") {
      setSelectedGuide(null);
    } else if (tab === "restaurants") {
      setSelectedGuide("restaurants");
    } else if (tab === "business") {
      setSelectedGuide("business");
    } else if (tab === "attractions") {
      setSelectedGuide("attractions");
    } else if (tab === "mypage") {
      setSelectedGuide(null);
    }
  };

  const handleFilterClick = () => {
    console.log("Filter clicked");
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

  if (showReviews && selectedAttraction) {
    // AttractionReviews 렌더링 조건 추가
    return (
      <>
        <AttractionReviews
          attraction={selectedAttraction}
          onBack={() => {
            setShowReviews(false);
            setSelectedAttraction(null);
          }}
        />
        <NavBar activeTab={activeTab} onTabChange={handleTabChange} />
      </>
    );
  }

  if (showReviews && selectedBusiness) {
    return (
      <BusinessReviews
        business={selectedBusiness}
        onBack={() => {
          setShowReviews(false);
          setSelectedBusiness(null);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[390px] mx-auto bg-white min-h-screen relative pb-16">
        <Header onLogoClick={() => handleTabChange("home")} />

        <main className="pt-14 px-4 pb-8">
          {activeTab === "home" && !selectedGuide ? (
            <div className="space-y-4 pt-6">
              <img
                src="/logo.png"
                alt="Dobong Life"
                className="h-16 algin-center mx-auto mb-4"
              />
              <div className="text-center">
                <p className="text-xl text-gray-800 mb-2">
                  도봉에서 만나요, 도봉 라이프!
                </p>
                <p className="text-l text-gray-800 mb-2">
                  도봉구의 <span className="font-bold">숨은 매력</span>부터{" "}
                  <span className="font-bold">할인 쿠폰</span>까지!
                </p>
              </div>
              <GuideButton
                imageSrc="/restaurant-guide.png"
                altText="맛집 가이드"
                onClick={() => handleTabChange("restaurants")}
              />

              <GuideButton
                imageSrc="/business-guide.png"
                altText="비즈니스 가이드"
                onClick={() => handleTabChange("business")}
              />

              <GuideButton
                imageSrc="/attractoin-guide.png"
                altText="명소 가이드"
                onClick={() => handleTabChange("attractions")}
              />
            </div>
      ) : activeTab === "restaurants" && selectedGuide === "restaurants" ? (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">맛집 가이드</h2>
          <button
            onClick={() => handleTabChange("home")}
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
      ) : activeTab === "attractions" && selectedGuide === "attractions" ? (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">명소 가이드</h2>
          <button
            onClick={() => handleTabChange("home")}
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
      ) : activeTab === "mypage" ? (
      <div className="flex items-center justify-center h-[80vh]">
        <p className="text-gray-500">Coming soon...</p>
      </div>
      ) : activeTab === "business" && selectedGuide === "business" ? (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            비즈니스 가이드
          </h2>
          <button
            onClick={() => handleTabChange("home")}
            className="text-sm text-gray-600"
          >
            뒤로가기
          </button>
        </div>
        <BusinessList
          businesses={businesses}
          onBusinessClick={setSelectedBusiness}
        />
      </div>
          ) : null}
    </main>

        {
    selectedRestaurant && !showReviews && (
      <RestaurantModal
        restaurant={selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
        onViewReviews={(id) => handleViewReviews(id, "restaurant")}
      />
    )
  }

  {
    selectedAttraction && (
      <AttractionModal
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
        onViewReviews={(id) => handleViewReviews(id, "attraction")}
      />
    )
  }

  {
    selectedBusiness && (
      <BusinessModal
        business={selectedBusiness}
        onClose={() => setSelectedBusiness(null)}
        onViewReviews={(id) => handleViewReviews(id, "business")}
      />
    )
  }
  {
    selectedBusiness && showReviews ? (
      <BusinessReviews
        business={selectedBusiness}
        onBack={() => {
          setShowReviews(false);
          setSelectedBusiness(null);
        }}
      />
    ) : null
  }

  <NavBar activeTab={activeTab} onTabChange={handleTabChange} />
      </div >
    </div >
  );
}

export default App;
