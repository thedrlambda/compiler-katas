// Just for scoping (ignore):
export {};

// ### Definite assignment 2 ###
// In the data structure development team we have been working on a new Stack implementation, that is guaranteed to be non-empty. We have already an implementation for NonEmptyLists. However, with the current implementation of NonEmptyStack fails.
// Can you use definite assignment to fix their implementation?

interface NonEmptyList<T> {
  value: T;
}
class LastNode<T> implements NonEmptyList<T> {
  constructor(public value: T) {}
}
class RegularNode<T> implements NonEmptyList<T> {
  constructor(public value: T, public next: NonEmptyList<T>) {}
}

class NonEmptyStack<T> {
  private data: T[] = [];
  constructor() {}
  prepend(value: T) {
    this.data = [value, ...this.data];
  }
  first() {
    return this.data[0];
  }
}

console.log(new NonEmptyStack<number>().first().toString());
