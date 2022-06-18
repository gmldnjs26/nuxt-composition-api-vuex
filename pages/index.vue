<template>
  <div>
    {{ hogeName }} / {{ hogeCounter }}
    <div>
      <button @click="changeName">Name</button>
      <button @click="changeCount">Count</button>
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
    const hogeCounter = computed<number>(() => {
      return store.getters['hoge/getHogeCounter']
    })
    const changeCount = () => {
      store.dispatch('hoge/incrementHogeCount', hogeCounter.value + 1)
    }
    const changeName = () => {
      store.dispatch('hoge/changeHogeName')
    }

    return {
      hogeName,
      hogeCounter,
      changeCount,
      changeName,
    }
  },
})
</script>
