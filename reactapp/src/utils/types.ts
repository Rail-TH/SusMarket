export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: any;
}

export interface Category {
  id: string;
  title: string;
  image: string;
}