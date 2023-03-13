import { Router } from "express";
import Test from "../src/controller/Test";
import { ProductRouter } from "../src/domains/product/controller";

export type TRoute = {
  path: string;
  router: Router;
}

const routes: TRoute[] = [
  { path: "/test", router: Test() },
  { path: "/v1/products", router: ProductRouter() }
]

export default routes;