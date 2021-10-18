import express from "express";

import { ErrorHandle } from "./utils";

export default async function (app) {
  const router = express
    .Router();

  app.use("/api", router).use(ErrorHandle);
  return app;
}