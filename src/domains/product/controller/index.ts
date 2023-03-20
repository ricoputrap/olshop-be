import { Router, Request, Response } from "express";
import { STATUS_CODES } from "../../../../constants/api.enum";
import ProductService from "../service";

class ProductController {
  private router: Router;
  private service: ProductService;

  constructor() {
    this.router = Router();
    this.service = new ProductService();
    this.init();
  }

  public getRouter(): Router {
    return this.router;
  }

  getAllProducts = async (req: Request, res: Response) => {
    try {
      const allProducts = await this.service.getAllProducts();
      const response = {
        data: allProducts
      }
      // const response = {
      //   data: {
      //     products: [
      //       {
      //         "id": 1,
      //         "name": "Product A",
      //         "description": "Product A description",
      //         "price": 10.0,
      //         "shop": {
      //           "id": 1,
      //           "name": "Shop A",
      //           "address": "123 Main St",
      //           "email": "shopa@example.com",
      //           "phone": "555-1234"
      //        },
      //        "images": [
      //         {
      //           "id": 1,
      //           "url": "https://example.com/image1.jpg"
      //         },
      //         {
      //           "id": 2,
      //           "url": "https://example.com/image2.jpg"
      //         }
      //        ]
      //       }
      //     ]
      //   }
      // }
  
      return res.status(STATUS_CODES.OK).json(response);
    }
    catch (error: any) {
      return res.status(STATUS_CODES.INTERNAL_SERVER).json({
        "error": "JAJAHA"
      });
      // return { "error": "HAHA" }
    }
    
    
  }

  private async init() {
    this.router.get("/", await this.getAllProducts);
  }
}

export const ProductRouter = (): Router => {
  const controller: ProductController = new ProductController();
  return controller.getRouter();
}

export default ProductController;