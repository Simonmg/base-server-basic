export interface IteratorInterface {
  hasNext: () => boolean;
  getNextItem: () => string | null;
  increaseIndex: () => void;
  index: number;
}


