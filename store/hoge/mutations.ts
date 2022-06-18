import { MutationTree } from 'vuex/types/index'
import { HogeType } from './types'

const mutations: MutationTree<HogeType> = {
  setHoge(state, data) {
    state.hoge = data
  },
  setHogeCount(state, data) {
    state.hoge.hogeCount = data
  },
  setHogeName(state, data) {
    state.hoge.hogeName = data
  },
  setNestedHogeCount(state, data) {
    state.hoge.nestedHoge.hogeCount = data
  },
  setNestedHogeName(state, data) {
    state.hoge.nestedHoge.hogeName = data
  },
}

export default mutations
