import { ProductImage } from "../../product-image/index.types";
import ProductImageRepository from "../../product-image/repository";
import SupabaseProductImageRepository from "../../product-image/repository/SupabaseProductImageRepository";
import { ProductItem, ProductItemResponse } from "../index.types";
import ProductRepository from "../repository";
import SupabaseProductRepository from "../repository/SupabaseProductRepository";

class ProductService {
  private productRepository: ProductRepository;
  private productImageRepository: ProductImageRepository;

  constructor() {
    this.productRepository = new SupabaseProductRepository();
    this.productImageRepository = new SupabaseProductImageRepository();
  }

  getAllProducts = async (): Promise<ProductItemResponse[]> => {
    try {
      // retrieve data from DB
      const products: ProductItem[] = await this.productRepository.getAll();
      const productIDs: string[] = products.map(prod => prod.id);
      const productImages: ProductImage[] = await this.productImageRepository.getProductMainImages(productIDs);

      // compute response
      const response: ProductItemResponse[] = [];
      products.forEach(product => {
        const productItemResponse: ProductItemResponse = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: {
            label: "",
            url: ""
          }
        }

        // get the product main image
        const images: ProductImage[] = productImages.filter(item => item.product_id == product.id);
        if (images.length > 0) {
          productItemResponse.image = {
            label: images[0].label,
            url: images[0].url
          }
        }

        response.push(productItemResponse);
      });

      return response;
    }
    catch (error: any) {
      console.error("===== error:", error)
      return [];
    }
  }
}

export default ProductService;