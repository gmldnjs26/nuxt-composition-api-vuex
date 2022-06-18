import { reactive } from '@nuxtjs/composition-api'
import { HogeType } from './types'

const state = (): HogeType => {
  return reactive({
    hoge: {
      hogeCount: 10,
      hogeName: 'test',
    },
  })
}

export default state
