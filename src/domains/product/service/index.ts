import ProductRepository from "../repository"

class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  getAllProducts = async (): Promise<any> => {
    try {
      const products: any[] = await this.productRepository.getAll();

      return {
        products
      }
    }
    catch (error: any) {
      console.log("===== error:", error)
      return {}
    }
  }
}

export default ProductService;