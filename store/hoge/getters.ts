import { GetterTree } from 'vuex/types/index'
import { HogeType } from './types'

const getters: GetterTree<HogeType, HogeType> = {
  getHoge: (state) => state.hoge,
  getHogeCounter: (state) => state.hoge.hogeCount,
  getHogeName: (state) => state.hoge.hogeName,
}

export default getters
