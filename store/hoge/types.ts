type NestedHoge = {
  hogeCount: number
  hogeName: string
}

type Hoge = {
  hogeCount: number
  hogeName: string
  nestedHoge: NestedHoge
}

export type HogeType = {
  hoge: Hoge
}
