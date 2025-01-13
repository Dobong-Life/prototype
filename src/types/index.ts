export interface Restaurant {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  tagCategory: string;
  hashtags: string[];
  addressDetail: string | null;
  addressDong: string;
  mainMenu: string[];
  likes: number;
  imageUrl: string;
  mapUrl: string | undefined;
}

export type Attraction = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  tagCategory: string;
  hashtags: string[];
  addressDetail: string | null;
  addressDong: string;
  mainItem: string[];
  likes: number;
  imageUrl: string;
  mapUrl?: string;
};

export interface Review {
  id: string;
  restaurantId: string;
  userId: string;
  userName: string;
  comment: string;
  imageUrl?: string;
  tags: string[];
  createdAt: string;
}

export interface Tag {
  id: string;
  name: string;
  category: string;
  count: number;
}