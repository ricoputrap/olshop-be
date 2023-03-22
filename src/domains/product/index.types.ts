export interface ProductItemResponse {
  id: string;
  name: string;
  price: number;

  // category: {
  //   id: string;
  // };
  // shop: {
  //   id: string;
  //   name: string;
  //   location: string;
  // };
  image: {
    label: string;
    url: string;
  };
}

export type ProductItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  created_at?: string;
  category_id: string;
  shop_id: string;
}