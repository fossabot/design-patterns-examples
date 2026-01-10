export interface Iterator<T> {
  hasNext(): boolean;
  next(): T | null;
}

export class ArrayIterator<T> implements Iterator<T> {
  private position = 0;

  constructor(private items: T[]) {}

  hasNext(): boolean {
    return this.position < this.items.length;
  }

  next(): T | null {
    return this.hasNext() ? this.items[this.position++] : null;
  }
}

export class Collection<T> {
  constructor(private items: T[]) {}

  createIterator(): Iterator<T> {
    return new ArrayIterator(this.items);
  }
}
