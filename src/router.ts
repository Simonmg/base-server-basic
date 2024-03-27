import express from "express";
import { ConcreteIterator } from "./iterator/concreteIterator";
import { IterableInterface } from "./iterator/iterable.interface";
import Agencia from "./template/agencia";
import Agente from "./template/agente";

import { ErrorHandle } from "./utils";

export default async function (app) {
  const router = express.Router();

  // Template
  const agente = new Agente();
  const agency = new Agencia();

  router.get("/", (req, res) => {});

  router.get("/config-agent", (req, res) => {
    res.json(agente.onboarding());
  });

  router.get("/config-agency", (req, res) => {
    res.json(agency.onboarding());
  });

  //end template

  router.get("/iterator", async (req, res) => {
    const iterableObject: IterableInterface = {
      items: ["s", "d", "e", "f"],
      getIterator: () => {
        return new ConcreteIterator(iterableObject);
      },
    };

    const client = () => {
      let response: string[] = [];

      const iterabler = iterableObject.getIterator();

      while (iterabler.hasNext()) {
        response.push(iterabler.getNextItem());
      }
      return response;
    };

    res.json(client());

  });

  app.use("/api", router).use(ErrorHandle);
  return app;
}
