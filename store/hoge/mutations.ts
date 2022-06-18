import { MutationTree } from 'vuex/types/index'
import { HogeType } from './types'

const mutations: MutationTree<HogeType> = {
  setHogeCount(state, data) {
    state.hoge.hogeCount = data
    console.log(state.hoge.hogeCount)
  },
  setHogeName(state, data) {
    state.hoge.hogeName = data
  },
}

export default mutations
