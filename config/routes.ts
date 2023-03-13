import { Router } from "express";
import Test from "../src/controller/Test";

export type TRoute = {
  path: string;
  router: Router;
}

const routes: TRoute[] = [
  { path: "/test", router: Test() }
]

export default routes;