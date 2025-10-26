export interface Dish {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  category: string;
  items: Dish[];
}

export interface AboutContent {
  location: string;
  hours: string[];
  phone: string;
  orderUrl: string;
  imageUrl: string;
  story: string;
}

export interface FeaturedDish {
  name: string;
  imageUrl: string;
}
