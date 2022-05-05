declare global {
  type Nullable<T> = T | null
  type Optional<T> = T | undefined
  type Maybe<T> = Nullable<Optional<T>>
}

export {}
