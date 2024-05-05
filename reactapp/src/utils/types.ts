export interface Product {
  title: string;
  id: number;
  category_id: string;
  price: number;
  icons: any;
}

export interface Category {
  id: string;
  title: string;
  image: string;
}