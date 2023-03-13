import { Router, Request, Response } from "express";
import { STATUS_CODES } from "../../../../constants/api.enum";

class ProductController {
  private router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  public getRouter(): Router {
    return this.router;
  }

  private async getAllProducts(req: Request, res: Response) {
    const response = {
      data: {
        products: [
          {
            "id": 1,
            "name": "Product A",
            "description": "Product A description",
            "price": 10.0,
            "shop": {
              "id": 1,
              "name": "Shop A",
              "address": "123 Main St",
              "email": "shopa@example.com",
              "phone": "555-1234"
           },
           "images": [
            {
              "id": 1,
              "url": "https://example.com/image1.jpg"
            },
            {
              "id": 2,
              "url": "https://example.com/image2.jpg"
            }
           ]
          }
        ]
      }
    }

    return res.status(STATUS_CODES.OK).json(response);
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