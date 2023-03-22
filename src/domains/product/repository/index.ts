import { ProductItem } from "../index.types";

interface ProductRepository {
  getAll(): Promise<ProductItem[]>;
}

export default ProductRepository;