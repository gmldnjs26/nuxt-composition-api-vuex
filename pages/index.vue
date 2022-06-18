<template>
  <div>
    <div>
      <span>hogeName: </span>
      {{ hogeName }}
      <button @click="changeHogeName">ChangHogeName</button>
    </div>
    <div>
      <span>hogeCount: </span>
      {{ hogeCount }}
      <button @click="changeHogeCount">ChangHogeCount</button>
    </div>
    <div>
      <span>nestedHogeName: </span>
      {{ hogeNestedName }}
      <button @click="changeNestedHogeName">ChangNestedHogeName</button>
    </div>
    <div>
      <span>nestedHogeCount: </span>
      {{ hogeNestedCount }}
      <button @click="changeNestedHogeCount">ChangNestedHogeCount</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const store = useStore()
    const hogeName = computed<string>(() => {
      return store.getters['hoge/getHogeName']
    })
    const hogeCount = computed<number>(() => {
      return store.getters['hoge/getHogeCounter']
    })
    const hogeNestedName = computed<string>(() => {
      return store.getters['hoge/getNestedHogeName']
    })
    const hogeNestedCount = computed<number>(() => {
      return store.getters['hoge/getNestedHogeCounter']
    })
    const changeHogeCount = () => {
      store.dispatch('hoge/incrementHogeCount', hogeCount.value + 1)
    }
    const changeHogeName = () => {
      store.dispatch('hoge/changeHogeName', hogeName.value + '_1')
    }
    const changeNestedHogeCount = () => {
      store.dispatch('hoge/incrementNestedHogeCount', hogeNestedCount.value + 1)
    }
    const changeNestedHogeName = () => {
      store.dispatch('hoge/changeNestedHogeName', hogeNestedName.value + '_2')
    }
    const changeHoge = () => {
      store.dispatch('hoge/chageHoge', {
        hogeCount: 999,
        hogeName: 'reative',
        nestedHoge: { hogeCount: 999, hogeName: 'nestedReative' },
      })
    }

    return {
      hogeName,
      hogeCount,
      hogeNestedName,
      hogeNestedCount,
      changeHogeCount,
      changeHogeName,
      changeNestedHogeCount,
      changeNestedHogeName,
      changeHoge,
    }
  },
})
</script>
