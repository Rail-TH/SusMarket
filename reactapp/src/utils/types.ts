export type Category = 'toys' | 'clothes' | 'figures' | 'foods' | 'books';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: any;
}