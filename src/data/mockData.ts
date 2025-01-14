import { Restaurant, Review, Tag, Attraction, Business, Coupon } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: '마선생마약국밥',
    category: '한식',
    subcategory: '국밥',
    tagCategory: '일상의 작은 행복',
    hashtags: ['소소한 한 끼가 필요할 때', '한국인의 소울푸드'],
    addressDetail: null,
    addressDong: '도봉동',
    mainMenu: ['순대국밥'],
    likes: 156,
    imageUrl: 'https://i.ibb.co/CMz2dc4/food1.png',
    mapUrl: 'https://m.place.naver.com/restaurant/1827020251/home'
  },
  {
    id: '2',
    name: '후타츠',
    category: '일식',
    subcategory: '라멘',
    tagCategory: '일상의 작은 행복',
    hashtags: ['소소한 한 끼가 필요할 때'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['라멘', '소바', '초밥', '스시'],
    likes: 120,
    imageUrl: 'https://i.ibb.co/Jq1RTcK/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '3',
    name: '면장우동',
    category: '일식',
    subcategory: '우동',
    tagCategory: '일상의 작은 행복',
    hashtags: ['소소한 한 끼가 필요할 때'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['우동', '어묵', '튀김'],
    likes: 98,
    imageUrl: 'https://i.ibb.co/r2TGZ3Z/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '4',
    name: '텐야',
    category: '일식',
    subcategory: '덮밥',
    tagCategory: '일상의 작은 행복',
    hashtags: ['소소한 한 끼가 필요할 때'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['덮밥', '텐동', '튀김'],
    likes: 75,
    imageUrl: 'https://i.ibb.co/2F21Fnq/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '5',
    name: '디에그',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '일상의 작은 행복',
    hashtags: ['소소한 한 끼가 필요할 때', '달콤함이 그리울 때'],
    addressDetail: null,
    addressDong: '도봉동',
    mainMenu: ['에그타르트'],
    likes: 200,
    imageUrl: 'https://i.ibb.co/DfdRccr/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '6',
    name: '원더베이글하우스',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '일상의 작은 행복',
    hashtags: ['달콤함이 그리울 때'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['커피'],
    likes: 145,
    imageUrl: 'https://i.ibb.co/4SnkvJx/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '7',
    name: '무너미',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '일상의 작은 행복',
    hashtags: ['달콤함이 그리울 때'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['커피'],
    likes: 130,
    imageUrl: 'https://i.ibb.co/yh9FK02/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '8',
    name: '브레드칸',
    category: '카페/디저트',
    subcategory: '빵',
    tagCategory: '일상의 작은 행복',
    hashtags: ['달콤함이 그리울 때'],
    addressDetail: null,
    addressDong: '수유동',
    mainMenu: ['빵'],
    likes: 185,
    imageUrl: 'https://i.ibb.co/FKCmvZ1/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '9',
    name: '도봉관',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '일상의 작은 행복',
    hashtags: ['활력이 필요한 순간'],
    addressDetail: null,
    addressDong: '도봉동',
    mainMenu: ['커피'],
    likes: 95,
    imageUrl: 'https://i.ibb.co/swcsZDN/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '10',
    name: '카페더로비',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '일상의 작은 행복',
    hashtags: ['활력이 필요한 순간'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['커피'],
    likes: 110,
    imageUrl: 'https://i.ibb.co/qkp1pLV/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '11',
    name: '딥코브커피',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '일상의 작은 행복',
    hashtags: ['활력이 필요한 순간'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['커피'],
    likes: 75,
    imageUrl: 'https://i.ibb.co/kJjRmvq/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '12',
    name: '카페도영',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '일상의 작은 행복',
    hashtags: ['활력이 필요한 순간'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['커피'],
    likes: 60,
    imageUrl: 'https://i.ibb.co/mz5Srx4/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '13',
    name: '팔도국밥',
    category: '한식',
    subcategory: '국밥',
    tagCategory: '일상의 작은 행복',
    hashtags: ['한국인의 소울푸드'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['국밥'],
    likes: 155,
    imageUrl: 'https://i.ibb.co/SPDYD0R/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '14',
    name: '병천토종순대국',
    category: '한식',
    subcategory: '국밥',
    tagCategory: '일상의 작은 행복',
    hashtags: ['한국인의 소울푸드'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['국밥'],
    likes: 140,
    imageUrl: 'https://i.ibb.co/gDcdztf/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '15',
    name: '큰맘할매순대국',
    category: '한식',
    subcategory: '국밥',
    tagCategory: '일상의 작은 행복',
    hashtags: ['한국인의 소울푸드'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['국밥'],
    likes: 170,
    imageUrl: 'https://i.ibb.co/WzPD8rz/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '16',
    name: '점순이하우스',
    category: '한식',
    subcategory: '국밥',
    tagCategory: '일상의 작은 행복',
    hashtags: ['한국인의 소울푸드'],
    addressDetail: null,
    addressDong: '도봉동',
    mainMenu: ['국밥'],
    likes: 130,
    imageUrl: 'https://i.ibb.co/nmhLpcJ/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '17',
    name: '유미네튀김집',
    category: '한식',
    subcategory: '분식',
    tagCategory: '일상의 작은 행복',
    hashtags: ['누구나 좋아하는 간식'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['튀김', '떡볶이'],
    likes: 125,
    imageUrl: 'https://i.ibb.co/YhPjYKj/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '18',
    name: '미르미분식과김밥',
    category: '한식',
    subcategory: '분식',
    tagCategory: '일상의 작은 행복',
    hashtags: ['누구나 좋아하는 간식'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['튀김', '떡볶이'],
    likes: 110,
    imageUrl: 'https://i.ibb.co/YhPjYKj/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '19',
    name: '파란하늘',
    category: '한식',
    subcategory: '분식',
    tagCategory: '일상의 작은 행복',
    hashtags: ['누구나 좋아하는 간식'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['튀김', '떡볶이'],
    likes: 95,
    imageUrl: 'https://i.ibb.co/swZwqg0/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '20',
    name: '의정부부대찌개',
    category: '한식',
    subcategory: '찌개',
    tagCategory: '일상의 작은 행복',
    hashtags: ['몸과 마음을 녹여주는'],
    addressDetail: null,
    addressDong: '도봉동',
    mainMenu: ['부대찌개'],
    likes: 140,
    imageUrl: 'https://i.ibb.co/s264vVr/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '21',
    name: '항아리김치찌개',
    category: '한식',
    subcategory: '찌개',
    tagCategory: '일상의 작은 행복',
    hashtags: ['몸과 마음을 녹여주는'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['김치찌개'],
    likes: 125,
    imageUrl: 'https://i.ibb.co/wSSbFgL/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '22',
    name: '또와순두부수제비',
    category: '한식',
    subcategory: '찌개',
    tagCategory: '일상의 작은 행복',
    hashtags: ['몸과 마음을 녹여주는'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['순두부찌개', '수제비'],
    likes: 135,
    imageUrl: 'https://i.ibb.co/RDQzLfC/image.png',
    mapUrl: 'https://m.map.naver.com/'
  },
  {
    id: '23',
    name: '원조할머니두부집',
    category: '한식',
    subcategory: '찌개',
    tagCategory: '일상의 작은 행복',
    hashtags: ['몸과 마음을 녹여주는'],
    addressDetail: null,
    addressDong: '창동',
    mainMenu: ['순두부찌개'],
    likes: 115,
    imageUrl: 'https://i.ibb.co/924Zkgr/image.png',
    mapUrl: 'https://m.map.naver.com/'
  }
];


export const attractions: Attraction[] = [
  {
    id: '1',
    name: '도봉산',
    category: '산',
    subcategory: '등산 코스',
    tagCategory: '자연과 산책',
    hashtags: ['산과 둘레길'],
    addressDetail: null,
    addressDong: '도봉동',
    mainItem: ['산', '등산', '자연'],
    likes: 234,
    imageUrl: 'https://i.ibb.co/mzHDbtW/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '2',
    name: '초안산하늘꽃정원',
    category: '공원',
    subcategory: '정원',
    tagCategory: '자연과 산책',
    hashtags: ['산과 둘레길', '공원'],
    addressDetail: null,
    addressDong: '창동',
    mainItem: ['정원', '꽃', '산책'],
    likes: 178,
    imageUrl: 'https://i.ibb.co/BsbsRYm/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '3',
    name: '당현천기억길',
    category: '공원',
    subcategory: '산책로',
    tagCategory: '자연과 산책',
    hashtags: ['산과 둘레길', '공원'],
    addressDetail: null,
    addressDong: '창동',
    mainItem: ['산책로', '추억', '자연'],
    likes: 150,
    imageUrl: 'https://i.ibb.co/BKdvwxt/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '4',
    name: '발바닥공원',
    category: '공원',
    subcategory: '놀이공원',
    tagCategory: '자연과 산책',
    hashtags: ['산과 둘레길', '공원'],
    addressDetail: null,
    addressDong: '창동',
    mainItem: ['공원', '산책', '놀이'],
    likes: 112,
    imageUrl: 'https://i.ibb.co/Lvkx8T7/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '5',
    name: '서울창포원',
    category: '관광명소',
    subcategory: '자연',
    tagCategory: '자연과 산책',
    hashtags: ['공원'],
    addressDetail: null,
    addressDong: '도봉동',
    mainItem: ['붓꽃', '습지원'],
    likes: 95,
    imageUrl: 'https://i.ibb.co/710mzwc/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '6',
    name: '도봉관',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '가벼운 외출',
    hashtags: ['골목길 카페 탐방'],
    addressDetail: null,
    addressDong: '도봉동',
    mainItem: ['카페', '분위기'],
    likes: 134,
    imageUrl: 'https://i.ibb.co/swcsZDN/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '7',
    name: '카페더로비',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '가벼운 외출',
    hashtags: ['골목길 카페 탐방'],
    addressDetail: null,
    addressDong: '창동',
    mainItem: ['카페', '음료', '휴식'],
    likes: 102,
    imageUrl: 'https://i.ibb.co/qkp1pLV/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '8',
    name: '딥코프커피',
    category: '카페/디저트',
    subcategory: '빵',
    tagCategory: '가벼운 외출',
    hashtags: ['골목길 카페 탐방'],
    addressDetail: null,
    addressDong: '창동',
    mainItem: ['커피', '조용한', '디저트'],
    likes: 98,
    imageUrl: 'https://i.ibb.co/kJjRmvq/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '9',
    name: '카페도영',
    category: '카페/디저트',
    subcategory: '커피',
    tagCategory: '가벼운 외출',
    hashtags: ['골목길 카페 탐방'],
    addressDetail: null,
    addressDong: '창동',
    mainItem: ['카페', '커피', '디저트'],
    likes: 89,
    imageUrl: 'https://i.ibb.co/mz5Srx4/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '10',
    name: '방학동도깨비시장',
    category: '시장',
    subcategory: '전통시장',
    tagCategory: '가벼운 외출',
    hashtags: ['지역 전통시장 구경'],
    addressDetail: null,
    addressDong: '도봉동',
    mainItem: ['전통시장', '먹거리', '쇼핑'],
    likes: 120,
    imageUrl: 'https://i.ibb.co/q5GPfPR/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '11',
    name: '신창시장',
    category: '시장',
    subcategory: '전통시장',
    tagCategory: '가벼운 외출',
    hashtags: ['지역 전통시장 구경'],
    addressDetail: null,
    addressDong: '창동',
    mainItem: ['전통시장', '지역특산물', '쇼핑'],
    likes: 95,
    imageUrl: 'https://i.ibb.co/8r42vHS/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '12',
    name: '창동골목시장',
    category: '시장',
    subcategory: '전통시장',
    tagCategory: '가벼운 외출',
    hashtags: ['지역 전통시장 구경'],
    addressDetail: null,
    addressDong: '창동',
    mainItem: ['골목시장', '소상공인', '먹거리'],
    likes: 110,
    imageUrl: 'https://i.ibb.co/TWk2Fnh/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
  {
    id: '13',
    name: '백운시장',
    category: '시장',
    subcategory: '전통시장',
    tagCategory: '가벼운 외출',
    hashtags: ['지역 전통시장 구경'],
    addressDetail: null,
    addressDong: '창동',
    mainItem: ['시장', '현지음식', '생활용품'],
    likes: 85,
    imageUrl: 'https://i.ibb.co/LJx51Jn/image.png',
    mapUrl: 'https://m.map.naver.com/',
  },
];

export const businesses: Business[] = [
  {
    id: "1",
    name: "도봉구 상공회",
    category: "경제 단체",
    subcategory: "지역 상공회",
    tagCategory: "도봉구의 자랑",
    hashtags: ["지역 경제 활성화", "상공인 네트워크"],
    addressDetail: "노해로63길 43",
    addressDong: "창동",
    mainItem: ["지역 경제 협력", "상공인 지원"],
    likes: 120,
    imageUrl: "https://i.ibb.co/yqJJLGb/image.jpg",
    mapUrl: "https://m.place.naver.com/place/21080054/home",
  },
  {
    id: "2",
    name: "유머스트알엔디",
    category: "연구개발 기업",
    subcategory: "화장품/의료기기",
    tagCategory: "도봉구의 자랑",
    hashtags: ["화장품 연구 개발", "의료기기", "의료IT"],
    addressDetail: "마들로 13길 61 오피스동 303호",
    addressDong: "창동",
    mainItem: ["화장품 기술 개발", "의료 IT 솔루션"],
    likes: 95,
    imageUrl: "https://i.ibb.co/4dtYDdN/17.png",
    mapUrl: "https://m.place.naver.com/place/1283730977/home",
  },
  {
    id: "3",
    name: "린나이 대리점",
    category: "유통",
    subcategory: "가전제품",
    tagCategory: "도봉구의 자랑",
    hashtags: ["보일러, 인덕션, 가전제품"],
    addressDetail: "도당로 141 (방학동)",
    addressDong: "창동",
    mainItem: ["가전제품 판매"],
    likes: 50,
    imageUrl: "https://i.ibb.co/w4fddvw/image.jpg",
    mapUrl: "https://m.place.naver.com/place/12904954/home",
  },
  {
    id: "4",
    name: "기아 쌍문 대리점",
    category: "유통",
    subcategory: "자동차",
    tagCategory: "도봉구의 자랑",
    hashtags: ["자동차 판매"],
    addressDetail: "도봉로 451",
    addressDong: "쌍문동",
    mainItem: ["자동차 판매"],
    likes: 60,
    imageUrl: "https://i.ibb.co/SPLVTMQ/1.png",
    mapUrl: "https://m.place.naver.com/place/13390009/home",
  },
  {
    id: "5",
    name: "우정 흑염소 오리전문점",
    category: "음식점",
    subcategory: "흑염소/오리 요리",
    tagCategory: "도봉구의 자랑",
    hashtags: ["흑염소 요리", "오리 요리"],
    addressDetail: "방학로 2길 16 1층",
    addressDong: "방학동",
    mainItem: ["흑염소 요리", "오리 요리"],
    likes: 80,
    imageUrl: "https://i.ibb.co/b52yFnc/2-1.png",
    mapUrl: "https://m.place.naver.com/restaurant/1109439933/home",
  },
  {
    id: "6",
    name: "고혁준 법률 사무소",
    category: "법률",
    subcategory: "법률 상담",
    tagCategory: "도봉구의 자랑",
    hashtags: ["법률 상담 서비스"],
    addressDetail: "도봉로 168길 1층 102호",
    addressDong: "미아동",
    mainItem: ["법률 상담"],
    likes: 40,
    imageUrl: "https://i.ibb.co/p0vCrDc/3-1.png",
    mapUrl: "https://m.place.naver.com/place/37441472/home",
  },
  {
    id: "7",
    name: "오복 금융 컨설팅",
    category: "금융",
    subcategory: "재무 설계",
    tagCategory: "도봉구의 자랑",
    hashtags: ["재무 설계", "금융 컨설팅"],
    addressDetail: "해등로 286-5 103동 701호",
    addressDong: "방학동",
    mainItem: ["재무 설계"],
    likes: 70,
    imageUrl: "https://i.ibb.co/GJvQQYG/4-1.jpg",
    mapUrl: "https://m.map.naver.com/",
  },
  {
    id: "8",
    name: "서울 노보스 병원",
    category: "의료",
    subcategory: "종합병원",
    tagCategory: "도봉구의 자랑",
    hashtags: ["의료 서비스", "병원"],
    addressDetail: "도봉로 720 도봉로 755",
    addressDong: "방학동",
    mainItem: ["의료 서비스"],
    likes: 100,
    imageUrl: "https://i.ibb.co/3CFHHsN/5-1.png",
    mapUrl: "https://m.place.naver.com/hospital/10984695/home",
  },
  {
    id: "9",
    name: "스피드 광고",
    category: "광고",
    subcategory: "광고 제작",
    tagCategory: "도봉구의 자랑",
    hashtags: ["광고 제작", "홍보"],
    addressDetail: "노해로 63다길 10",
    addressDong: "창동",
    mainItem: ["광고 제작"],
    likes: 55,
    imageUrl: "https://i.ibb.co/VNMW5YS/6.png",
    mapUrl: "https://m.map.naver.com/",
  },
  {
    id: "10",
    name: "더드림 방문간호요양센터",
    category: "의료",
    subcategory: "방문 간호",
    tagCategory: "도봉구의 자랑",
    hashtags: ["방문 간호 서비스"],
    addressDetail: "우이천로 288-3 2층",
    addressDong: "쌍문동",
    mainItem: ["방문 간호 서비스"],
    likes: 65,
    imageUrl: "https://i.ibb.co/ZVbrnDG/7.png",
    mapUrl: "https://m.place.naver.com/place/1664412695/home",
  },
  {
    id: "11",
    name: "대경섬유",
    category: "제조업",
    subcategory: "섬유 제품",
    tagCategory: "도봉구의 자랑",
    hashtags: ["섬유 제품 제조"],
    addressDetail: "덕릉로 59마길 57",
    addressDong: "도봉동",
    mainItem: ["섬유 제품"],
    likes: 45,
    imageUrl: "https://i.ibb.co/BcrxN7B/8.png",
    mapUrl: "https://m.place.naver.com/place/1466104810/home",
  },
  {
    id: "12",
    name: "㈜디케이씨피",
    category: "식품",
    subcategory: "건강기능식품",
    tagCategory: "도봉구의 자랑",
    hashtags: ["IT 솔루션", "소프트웨어"],
    addressDetail: "도봉로 110길 82 1층",
    addressDong: "창동",
    mainItem: ["소프트웨어 개발"],
    likes: 75,
    imageUrl: "https://i.ibb.co/y8S7Y7X/10.png",
    mapUrl: "https://m.map.naver.com/",
  },
  {
    id: "13",
    name: "농협은행㈜ 도봉점",
    category: "금융",
    subcategory: "은행",
    tagCategory: "도봉구의 자랑",
    hashtags: ["금융 서비스"],
    addressDetail: "도봉로 699",
    addressDong: "방학동",
    mainItem: ["금융 서비스"],
    likes: 85,
    imageUrl: "https://i.ibb.co/KFDg4r8/11.png",
    mapUrl: "https://m.place.naver.com/place/13407512/home",
  },
  {
    id: "14",
    name: "창조 대리석",
    category: "건축/인테리어",
    subcategory: "대리석 가공",
    tagCategory: "도봉구의 자랑",
    hashtags: ["인테리어", "건축"],
    addressDetail: "우이천로 16길 8 층",
    addressDong: "창동",
    mainItem: ["대리석 가공"],
    likes: 35,
    imageUrl: "https://i.ibb.co/SNKyCd0/12.png",
    mapUrl: "https://m.place.naver.com/place/1417581655/home",
  },
  {
    id: "15",
    name: "서울성심재가 복지센터",
    category: "복지",
    subcategory: "재가 복지",
    tagCategory: "도봉구의 자랑",
    hashtags: ["재가 복지 서비스"],
    addressDetail: "덕릉로 358 292호",
    addressDong: "창동",
    mainItem: ["재가 복지 서비스"],
    likes: 90,
    imageUrl: "https://i.ibb.co/Tr2PY0K/13.png",
    mapUrl: "https://m.place.naver.com/place/1244327825/home",
  },
  {
    id: "16",
    name: "서울신용보증재단 도봉지점",
    category: "금융",
    subcategory: "보증 지원",
    tagCategory: "도봉구의 자랑",
    hashtags: ["신용 보증", "금융 지원"],
    addressDetail: "마들로 13길 61 오피스동 901호",
    addressDong: "창동",
    mainItem: ["신용 보증 서비스"],
    likes: 60,
    imageUrl: "https://i.ibb.co/zZnRRDT/15.png",
    mapUrl: "https://m.place.naver.com/place/21435775/home",
  },
  {
    id: "17",
    name: "명동 분식",
    category: "음식점",
    subcategory: "분식 전문점",
    tagCategory: "도봉구의 자랑",
    hashtags: ["분식", "저렴한 음식"],
    addressDetail: "도깨비 시장",
    addressDong: "방학동",
    mainItem: ["떡볶이", "김밥"],
    likes: 50,
    imageUrl: "https://i.ibb.co/SsxX9R0/16.png",
    mapUrl: "https://m.place.naver.com/restaurant/13500194/home",
  },
  {
    id: "18",
    name: "코리아브라질리언주짓수 훼더레이션",
    category: "스포츠",
    subcategory: "주짓수 훈련",
    tagCategory: "도봉구의 자랑",
    hashtags: ["브라질리언 주짓수", "스포츠"],
    addressDetail: "해등로 111 3층 301호",
    addressDong: "창동",
    mainItem: ["주짓수 훈련"],
    likes: 65,
    imageUrl: "https://i.ibb.co/L5rSngb/18.png",
    mapUrl: "https://m.place.naver.com/place/1199820306/home",
  },
  {
    id: "19",
    name: "희성한방병원",
    category: "의료",
    subcategory: "한방 의료",
    tagCategory: "도봉구의 자랑",
    hashtags: ["한방 치료", "의료 서비스"],
    addressDetail: "방학로 3길 6SYO 빌딩 1층, 4층",
    addressDong: "방학동",
    mainItem: ["한방 치료"],
    likes: 95,
    imageUrl: "https://i.ibb.co/b156ZG4/19.png",
    mapUrl: "https://m.place.naver.com/hospital/1987216792/home",
  },
  {
    id: "20",
    name: "㈜에스에이치아이티",
    category: "IT",
    subcategory: "IT 서비스",
    tagCategory: "도봉구의 자랑",
    hashtags: ["IT 솔루션 제공"],
    addressDetail: "방학로 31 2층",
    addressDong: "방학동",
    mainItem: ["IT 서비스 제공"],
    likes: 70,
    imageUrl: "https://i.ibb.co/SsPRdpg/20.png",
    mapUrl: "https://m.map.naver.com/",
  },
  {
    id: "21",
    name: "뚱보냉면",
    category: "음식점",
    subcategory: "냉면 전문점",
    tagCategory: "도봉구의 자랑",
    hashtags: ["냉면", "맛집"],
    addressDetail: "우이천로 366 1층 1호",
    addressDong: "쌍문동",
    mainItem: ["냉면"],
    likes: 80,
    imageUrl: "https://i.ibb.co/QHM2Hr7/21.png",
    mapUrl: "https://m.place.naver.com/restaurant/17990023/home",
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    restaurantId: '1',
    userId: 'user1',
    userName: '맛있는생활',
    comment: '정말 맛있게 먹었습니다. 서비스도 정말 친절해요',
    imageUrl: 'https://i.ibb.co/2PWq0NK/image.jpg',
    tags: ['맛있어요', '친절해요', '청결해요'],
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    attractionId: '1', // Attraction 리뷰 추가
    userId: 'user2',
    userName: '산책러버',
    comment: '도봉산 정말 멋진 곳이에요! 등산하기 좋습니다.',
    imageUrl: 'https://i.ibb.co/8Dkj68H/dobongreview1.jpg',
    tags: ['멋진 풍경', '추천해요', '등산하기 좋아요'],
    createdAt: '2024-04-01'
  },
  {
    id: '3',
    attractionId: '2', // Attraction 리뷰 추가
    userId: 'user3',
    userName: '꽃사랑이',
    comment: '초안산 하늘꽃정원 너무 예쁘네요. 가족과 함께 즐겼습니다.',
    imageUrl: 'https://i.ibb.co/Kj6Stnb/dobongreview2.jpg',
    tags: ['꽃이 예뻐요', '가족 추천', '산책로가 좋아요'],
    createdAt: '2024-04-02'
  },
  {
    id: '4',
    businessId: '1', // Business 리뷰 추가
    userId: 'user4',
    userName: '지공이',
    comment: '도봉구 상공회는 지역 상공인들에게 큰 도움을 주는 기관이에요.',
    imageUrl: 'https://i.ibb.co/KVXjRgs/1.jpg',
    tags: ['지역 경제 활성화', '친절한 지원', '상공인 추천'],
    createdAt: '2024-04-10',
  },
  {
    id: '5',
    businessId: '2', // Business 리뷰 추가
    userId: 'user5',
    userName: '알뷰티',
    comment: '믿고 쓰는 유머스트알엔디 화장품, 로사미에!',
    imageUrl: 'https://i.ibb.co/1KSm8L4/2.jpg',
    tags: ['화장품 연구', '기술력', '방문 추천'],
    createdAt: '2024-04-12',
  },

  {
    id: "6", // 새로운 리뷰 ID
    businessId: "3", // "린나이 대리점" ID
    userId: "user6",
    userName: "가전매니아",
    comment: "보일러와 인덕션 모두 믿고 구매했습니다. 설치도 깔끔하고 친절했어요.",
    imageUrl: "",
    tags: ["깔끔한 설치", "친절한 서비스", "추천"],
    createdAt: "2024-04-20",
  },
  {
    id: "7", // 새로운 리뷰 ID
    businessId: "3", // "린나이 대리점" ID
    userId: "user7",
    userName: "주방프로",
    comment: "가전제품 상담부터 구매까지 친절히 도와주셨어요. 품질도 아주 좋습니다!",
    imageUrl: "https://i.ibb.co/3F3CqbW/1.png",
    tags: ["친절한 상담", "품질 좋음", "추천"],
    createdAt: "2024-04-21",
  },
  {
    id: "1001",
    businessId: "1",
    userId: "user1001",
    userName: "so상공인",
    comment: "지역 상공인을 위한 지원이 정말 훌륭합니다.",
    imageUrl: "",
    tags: ["상공인 지원", "추천"],
    createdAt: "2024-05-01",
  },
  {
    id: "1002",
    businessId: "1",
    userId: "user1002",
    userName: "경제활성화러버",
    comment: "지역 경제 활성화를 위해 노력하는 모습이 인상적이에요.",
    imageUrl: "",
    tags: ["지역 경제", "지원"],
    createdAt: "2024-05-02",
  },

  // 유머스트알엔디 (id: 2)
  {
    id: "1003",
    businessId: "2",
    userId: "user1003",
    userName: "뷰티러버",
    comment: "화장품 연구소답게 신뢰가 가는 기술력입니다.",
    imageUrl: "",
    tags: ["화장품 연구", "기술력"],
    createdAt: "2024-05-03",
  },
  {
    id: "1004",
    businessId: "2",
    userId: "user1004",
    userName: "의료IT전문가",
    comment: "의료 IT 솔루션도 정말 전문적으로 보였어요.",
    imageUrl: "",
    tags: ["의료IT", "추천"],
    createdAt: "2024-05-04",
  },

  // 린나이 대리점 (id: 3)
  {
    id: "1005",
    businessId: "3",
    userId: "user1005",
    userName: "가전제품구매자",
    comment: "보일러 설치가 정말 빠르고 친절했어요.",
    imageUrl: "",
    tags: ["빠른 설치", "추천"],
    createdAt: "2024-05-05",
  },
  {
    id: "1006",
    businessId: "3",
    userId: "user1006",
    userName: "인덕션러버",
    comment: "인덕션이 가성비도 좋고 성능이 훌륭합니다.",
    imageUrl: "",
    tags: ["가성비", "좋은 성능"],
    createdAt: "2024-05-06",
  },

  // 기아 쌍문 대리점 (id: 4)
  {
    id: "1007",
    businessId: "4",
    userId: "user1007",
    userName: "자동차마니아",
    comment: "친절한 상담과 좋은 할인 혜택이 좋았습니다.",
    imageUrl: "",
    tags: ["친절한 상담", "할인 혜택"],
    createdAt: "2024-05-07",
  },
  {
    id: "1008",
    businessId: "4",
    userId: "user1008",
    userName: "SUV러버",
    comment: "신형 SUV 시승 후 바로 계약했어요!",
    imageUrl: "",
    tags: ["SUV 추천", "빠른 계약"],
    createdAt: "2024-05-08",
  },

  // 우정 흑염소 오리전문점 (id: 5)
  {
    id: "1009",
    businessId: "5",
    userId: "user1009",
    userName: "건강한식사러버",
    comment: "흑염소 요리가 정말 신선하고 맛있었어요.",
    imageUrl: "",
    tags: ["신선함", "건강식"],
    createdAt: "2024-05-09",
  },
  {
    id: "1010",
    businessId: "5",
    userId: "user1010",
    userName: "오리러버",
    comment: "오리고기 요리가 정말 부드럽고 맛있었습니다.",
    imageUrl: "",
    tags: ["부드러운 고기", "재방문"],
    createdAt: "2024-05-10",
  },

  // 고혁준 법률 사무소 (id: 6)
  {
    id: "1011",
    businessId: "6",
    userId: "user1011",
    userName: "법률상담받음",
    comment: "복잡한 문제를 쉽게 설명해 주셔서 좋았습니다.",
    imageUrl: "",
    tags: ["쉽게 설명", "추천"],
    createdAt: "2024-05-11",
  },
  {
    id: "1012",
    businessId: "6",
    userId: "user1012",
    userName: "법률초보",
    comment: "전문적이고 친절한 상담이 인상적이었어요.",
    imageUrl: "",
    tags: ["전문적 상담", "친절함"],
    createdAt: "2024-05-12",
  },
  {
    id: "1013",
    businessId: "7",
    userId: "user1013",
    userName: "재무설계러버",
    comment: "맞춤형 재무 설계 덕분에 큰 도움이 되었습니다.",
    imageUrl: "",
    tags: ["맞춤형", "전문적"],
    createdAt: "2024-05-13",
  },
  {
    id: "1014",
    businessId: "7",
    userId: "user1014",
    userName: "금융전문가",
    comment: "정확한 분석과 친절한 설명이 만족스러웠습니다.",
    imageUrl: "",
    tags: ["분석 정확", "친절함"],
    createdAt: "2024-05-14",
  },

  // 서울 노보스 병원 (id: 8)
  {
    id: "1015",
    businessId: "8",
    userId: "user1015",
    userName: "병원추천러",
    comment: "전문적인 의료 서비스와 친절한 간호사가 좋았습니다.",
    imageUrl: "",
    tags: ["전문적 의료", "친절한 간호"],
    createdAt: "2024-05-15",
  },
  {
    id: "1016",
    businessId: "8",
    userId: "user1016",
    userName: "치료경험자",
    comment: "병원 시설이 깔끔하고 접근성이 좋아요.",
    imageUrl: "",
    tags: ["깔끔한 시설", "좋은 위치"],
    createdAt: "2024-05-16",
  },

  // 스피드 광고 (id: 9)
  {
    id: "1017",
    businessId: "9",
    userId: "user1017",
    userName: "광고디자인러",
    comment: "효율적인 광고 제작과 빠른 피드백이 만족스러웠습니다.",
    imageUrl: "",
    tags: ["효율적", "빠른 피드백"],
    createdAt: "2024-05-17",
  },
  {
    id: "1018",
    businessId: "9",
    userId: "user1018",
    userName: "홍보전문가",
    comment: "완벽한 광고 제작물로 큰 도움을 받았습니다.",
    imageUrl: "",
    tags: ["광고 제작", "추천"],
    createdAt: "2024-05-18",
  },

  // 더드림 방문간호요양센터 (id: 10)
  {
    id: "1019",
    businessId: "10",
    userId: "user1019",
    userName: "간호서비스이용자",
    comment: "방문 간호사가 정말 친절하고 전문적이었어요.",
    imageUrl: "",
    tags: ["친절한 간호사", "전문성"],
    createdAt: "2024-05-19",
  },
  {
    id: "1020",
    businessId: "10",
    userId: "user1020",
    userName: "환자가족",
    comment: "집에서도 편리하게 의료 서비스를 받을 수 있어서 좋아요.",
    imageUrl: "",
    tags: ["편리함", "추천"],
    createdAt: "2024-05-20",
  },

  // 대경섬유 (id: 11)
  {
    id: "1021",
    businessId: "11",
    userId: "user1021",
    userName: "섬유제품사",
    comment: "품질 좋은 섬유 제품을 저렴한 가격에 구매했습니다.",
    imageUrl: "",
    tags: ["품질 좋음", "가성비"],
    createdAt: "2024-05-21",
  },
  {
    id: "1022",
    businessId: "11",
    userId: "user1022",
    userName: "의류제작자",
    comment: "빠른 납품과 정확한 제품이 마음에 듭니다.",
    imageUrl: "",
    tags: ["빠른 납품", "정확함"],
    createdAt: "2024-05-22",
  },
  {
    id: "1023",
    businessId: "12",
    userId: "user1023",
    userName: "소프트웨어러버",
    comment: "사용하기 간편한 소프트웨어로 업무 효율이 높아졌습니다.",
    imageUrl: "",
    tags: ["사용 편리", "업무 효율"],
    createdAt: "2024-05-23",
  },
  {
    id: "1024",
    businessId: "12",
    userId: "user1024",
    userName: "기능덕후",
    comment: "다양한 기능이 있어 활용도가 매우 높습니다.",
    imageUrl: "",
    tags: ["다양한 기능", "높은 활용도"],
    createdAt: "2024-05-24",
  },

  // 농협은행㈜ 도봉점 (id: 13)
  {
    id: "1025",
    businessId: "13",
    userId: "user1025",
    userName: "금융서비스이용자",
    comment: "빠르고 친절한 은행 서비스가 만족스러웠습니다.",
    imageUrl: "",
    tags: ["빠른 서비스", "친절함"],
    createdAt: "2024-05-25",
  },
  {
    id: "1026",
    businessId: "13",
    userId: "user1026",
    userName: "지역금융팬",
    comment: "지역 주민에게 꼭 필요한 금융 지원을 제공합니다.",
    imageUrl: "",
    tags: ["지역 금융", "필수 서비스"],
    createdAt: "2024-05-26",
  },

  // 창조 대리석 (id: 14)
  {
    id: "1027",
    businessId: "14",
    userId: "user1027",
    userName: "인테리어러버",
    comment: "고급스러운 대리석 가공이 인테리어에 딱 맞아요.",
    imageUrl: "",
    tags: ["고급스러움", "인테리어 추천"],
    createdAt: "2024-05-27",
  },
  {
    id: "1028",
    businessId: "14",
    userId: "user1028",
    userName: "건축가",
    comment: "정확한 시공과 꼼꼼한 작업이 인상적이었습니다.",
    imageUrl: "",
    tags: ["정확한 시공", "꼼꼼함"],
    createdAt: "2024-05-28",
  },

  // 서울성심재가 복지센터 (id: 15)
  {
    id: "1029",
    businessId: "15",
    userId: "user1029",
    userName: "복지서비스이용자",
    comment: "친절하고 따뜻한 복지 서비스로 큰 도움을 받았습니다.",
    imageUrl: "",
    tags: ["친절함", "따뜻한 서비스"],
    createdAt: "2024-05-29",
  },
  {
    id: "1030",
    businessId: "15",
    userId: "user1030",
    userName: "지역복지팬",
    comment: "맞춤형 서비스로 복지 혜택을 잘 받을 수 있었습니다.",
    imageUrl: "",
    tags: ["맞춤형 서비스", "혜택 많음"],
    createdAt: "2024-05-30",
  },

  // 서울신용보증재단 도봉지점 (id: 16)
  {
    id: "1031",
    businessId: "16",
    userId: "user1031",
    userName: "신용보증이용자",
    comment: "사업 초기에 필요한 자금을 빠르게 보증받을 수 있었습니다.",
    imageUrl: "",
    tags: ["빠른 보증", "신뢰도 높음"],
    createdAt: "2024-05-31",
  },
  {
    id: "1032",
    businessId: "16",
    userId: "user1032",
    userName: "중소기업대표",
    comment: "사업 자금 조달에 큰 도움을 주는 서비스입니다.",
    imageUrl: "",
    tags: ["자금 조달", "중소기업 추천"],
    createdAt: "2024-06-01",
  },

  // 명동 분식 (id: 17)
  {
    id: "1033",
    businessId: "17",
    userId: "user1033",
    userName: "분식매니아",
    comment: "떡볶이와 김밥이 정말 맛있고 저렴합니다.",
    imageUrl: "",
    tags: ["저렴한 가격", "맛있어요"],
    createdAt: "2024-06-02",
  },
  {
    id: "1034",
    businessId: "17",
    userId: "user1034",
    userName: "학교앞분식",
    comment: "학생들이 자주 찾는 분식 맛집이에요.",
    imageUrl: "",
    tags: ["학생 추천", "맛집"],
    createdAt: "2024-06-03",
  },

  // 코리아브라질리언주짓수 훼더레이션 (id: 18)
  {
    id: "1035",
    businessId: "18",
    userId: "user1035",
    userName: "주짓수초보",
    comment: "친절한 강사님 덕분에 재미있게 배웠습니다.",
    imageUrl: "",
    tags: ["친절한 강사", "재미있어요"],
    createdAt: "2024-06-04",
  },
  {
    id: "1036",
    businessId: "18",
    userId: "user1036",
    userName: "운동팬",
    comment: "운동하기 좋은 시설과 체계적인 프로그램이 마음에 듭니다.",
    imageUrl: "",
    tags: ["좋은 시설", "체계적"],
    createdAt: "2024-06-05",
  },

  // 희성한방병원 (id: 19)
  {
    id: "1037",
    businessId: "19",
    userId: "user1037",
    userName: "한방치료러",
    comment: "침 치료가 매우 효과적이었고 시설이 깔끔합니다.",
    imageUrl: "",
    tags: ["효과적 치료", "깔끔한 시설"],
    createdAt: "2024-06-06",
  },
  {
    id: "1038",
    businessId: "19",
    userId: "user1038",
    userName: "건강관리러",
    comment: "친절한 상담과 체계적인 한방 치료가 좋았습니다.",
    imageUrl: "",
    tags: ["체계적", "친절 상담"],
    createdAt: "2024-06-07",
  },

  // ㈜에스에이치아이티 (id: 20)
  {
    id: "1039",
    businessId: "20",
    userId: "user1039",
    userName: "IT솔루션러",
    comment: "사용자 친화적인 인터페이스가 돋보이는 서비스입니다.",
    imageUrl: "",
    tags: ["사용자 친화적", "추천"],
    createdAt: "2024-06-08",
  },
  {
    id: "1040",
    businessId: "20",
    userId: "user1040",
    userName: "IT전문가",
    comment: "최신 기술을 적용한 솔루션이라 매우 만족스럽습니다.",
    imageUrl: "",
    tags: ["최신 기술", "만족도 높음"],
    createdAt: "2024-06-09",
  },

  // 뚱보냉면 (id: 21)
  {
    id: "1041",
    businessId: "21",
    userId: "user1041",
    userName: "냉면애호가",
    comment: "시원하고 깔끔한 맛의 냉면을 즐길 수 있습니다.",
    imageUrl: "",
    tags: ["시원한 맛", "깔끔함"],
    createdAt: "2024-06-10",
  },
  {
    id: "1042",
    businessId: "21",
    userId: "user1042",
    userName: "지역맛집러",
    comment: "지역에서 유명한 냉면 맛집으로 추천드립니다.",
    imageUrl: "",
    tags: ["유명 맛집", "추천"],
    createdAt: "2024-06-11",
  },

];

export const popularTags: Tag[] = [
  {
    id: '1',
    name: '맛있어요',
    category: '맛',
    count: 128
  },
  {
    id: '2',
    name: '친절해요',
    category: '서비스',
    count: 95
  }
];

export const coupons: Coupon[] = [
  {
    id: "1",
    title: "10% 할인 쿠폰",
    description: "도봉구 상공회 회원사 대상",
    discount: "10%",
    validUntil: "2024-12-31",
  },
  {
    id: "2",
    title: "무료 음료 쿠폰",
    description: "우정 흑염소 오리전문점에서 제공",
    discount: "무료 음료",
    validUntil: "2024-11-30",
  },
  {
    id: "3",
    title: "5% 추가 할인",
    description: "린나이 대리점 가전제품 구매 시",
    discount: "5%",
    validUntil: "2024-10-15",
  },
];