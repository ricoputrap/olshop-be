import { ProductImage } from "../index.types";

interface ProductImageRepository {
  getProductMainImages(productIDs: string[]): Promise<ProductImage[]>;
}

export default ProductImageRepository;