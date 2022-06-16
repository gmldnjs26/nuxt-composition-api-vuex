import { HogeType } from './types'

const state = (): HogeType => {
  return {
    hoge: {
      hogeCount: 10,
      hogeName: 'test',
    },
  }
}

export default state
