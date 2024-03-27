import { ConcreteIterator } from "./concreteIterator";

export interface IterableInterface {
  readonly items: items;
  getIterator: () => ConcreteIterator;
}

export type items = string[];

