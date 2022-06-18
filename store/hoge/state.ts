import { HogeType } from './types'

const state = (): HogeType => ({
  hoge: {
    hogeCount: 10,
    hogeName: 'test',
    nestedHoge: {
      hogeCount: 20,
      hogeName: 'test2',
    },
  },
})

export default state
