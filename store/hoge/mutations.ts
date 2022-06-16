import { MutationTree } from 'vuex/types/index'
import { HogeType } from './types'

const mutations: MutationTree<HogeType> = {
  setHogeCount(state, data) {
    state.hoge.hogeCount = data
  },
  setHogeName(state, data) {
    state.hoge.hogeName = data
  },
}

export default mutations
