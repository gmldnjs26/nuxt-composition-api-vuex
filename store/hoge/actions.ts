import { ActionTree } from 'vuex/types/index'
import { HogeType } from './types'

const actions: ActionTree<HogeType, HogeType> = {
  incrementHogeCount({ commit }, num: number) {
    commit('setHogeCount', num)
  },
  changeHogeName({ commit }, name: string) {
    commit('setHogeName', name)
  },
}

export default actions
