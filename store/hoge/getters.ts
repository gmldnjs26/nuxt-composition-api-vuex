import { GetterTree } from 'vuex/types/index'
import { HogeType } from './types'

const getters: GetterTree<HogeType, HogeType> = {
  getHoge(state) {
    return state.hoge
  },
}

export default getters
