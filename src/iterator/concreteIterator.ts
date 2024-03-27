import { items, IterableInterface } from "./iterable.interface";
import { IteratorInterface } from "./iterator.interface";


export class ConcreteIterator implements IteratorInterface {
  iter: items;
  index: number;

  constructor(iterList: IterableInterface) {
    this.index = 0;
    this.iter = iterList.items;
  }

  increaseIndex = () => {
    if (this.index <= this.iter.length - 1) {
      this.index += 1;
    }
  };

  hasNext = () => {
    return this.index <= this.iter.length - 1;
  };

  getNextItem = () => {
    if (this.index >= this.iter.length) {
      return null;
    }
    const curr = this.iter[this.index];
    this.increaseIndex();
    return curr;
  };
}




