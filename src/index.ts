import express, { Express } from "express";
import connectRoutes from "./utils/connectRoutes";
import { PORT } from "../config/env";
import { startConfiguration } from "../config";

export const createApp = (): Express => {
  const app: Express = express();

  // middleware
  app.use(express.json());

  // connnect all routes
  connectRoutes(app);

  return app;
}

const startServer = () => {
  const app: Express = createApp();

  // listen to the connection on the configured PORT
  app.listen(PORT, () => {
    console.log(`SERVER STARTS on PORT ${PORT}`);
  })
}

startConfiguration().then(() => {
  startServer();
});