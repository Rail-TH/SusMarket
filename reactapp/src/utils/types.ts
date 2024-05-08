export interface Product {
  title: string;
  tags: string;
  id: number;
  category_id: string;
  price: number;
  icons: any;
  description: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
}

export interface Reviews {
  commentary: string;
  date: string;
  icons: string;
  id: number;
  product_id: number;
  rate: number;
  user_id: number;
}