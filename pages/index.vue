<template>
  <div>
    {{ hogeName }} / {{ hogeCounter }}
    <div>
      <button @click="changeName">Name</button>
      <button @click="changeCount">Count</button>
      <button @click="changeHoge">All</button>
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
      return store.getters['hoge/getNestedHogeName']
    })
    const hogeCounter = computed<number>(() => {
      return store.getters['hoge/getNestedHogeCounter']
    })
    const changeCount = () => {
      store.dispatch('hoge/incrementNestedHogeCount', hogeCounter.value + 1)
    }
    const changeName = () => {
      store.dispatch('hoge/changeNestedHogeName', 'sampleName')
    }
    const changeHoge = () => {
      store.dispatch('hoge/chageHoge', { hogeCount: 999, hogeName: 'reative' })
    }

    return {
      hogeName,
      hogeCounter,
      changeCount,
      changeName,
      changeHoge,
    }
  },
})
</script>
