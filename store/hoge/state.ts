import { HogeType } from './types'

const state = (): HogeType => ({
  hoge: {
    hogeCount: 10,
    hogeName: 'test',
  },
})

export default state
