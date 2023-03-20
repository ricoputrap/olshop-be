interface ProductItemResponse {
  id: string;
  name: string;
  price: number;

  category: {
    id: string;
    
  };
  shop: {
    id: string;
    name: string;
    location: string;
  };
  images: {
    id: string;
    url: string;
  }[];
}

export type ProductImage = {
  id: string;
  label: string;
  url: string;
  order: number;
}

export type ProductItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  created_at?: string;
}