import { ActionTree } from 'vuex/types/index'
import { HogeType } from './types'

const actions: ActionTree<HogeType, HogeType> = {
  chageHoge({ commit }, data: Object) {
    commit('setHoge', data)
  },
  incrementHogeCount({ commit }, num: number) {
    commit('setHogeCount', num)
  },
  changeHogeName({ commit }, name: string) {
    commit('setHogeName', name)
  },
  incrementNestedHogeCount({ commit }, num: number) {
    commit('setNestedHogeCount', num)
  },
  changeNestedHogeName({ commit }, name: string) {
    commit('setNestedHogeName', name)
  },
}

export default actions
