export interface Identifiable<T> {
  readonly id: T;

  getId(): T;
}
