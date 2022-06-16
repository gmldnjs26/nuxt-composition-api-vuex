<template>
  <div>{{ hogeName }} / {{ hogeCounter }}</div>
</template>

<script lang="ts">
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'
import { HogeType } from '@/store/hoge/types'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const store = useStore()
    const hoge = computed<HogeType>(() => {
      return store.getters['hoge/getHoge']
    })
    const hogeName = computed<HogeType>(() => {
      return store.getters['hoge/getHogeName']
    })
    const hogeCounter = computed<HogeType>(() => {
      return store.getters['hoge/getHogeCounter']
    })

    return {
      hoge,
      hogeName,
      hogeCounter,
    }
  },
})
</script>
