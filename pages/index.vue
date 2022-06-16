<template>
  <div>
    asdasd
    {{ hoge }}
  </div>
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
    console.log('hoge', hoge)

    return {
      hoge,
    }
  },
})
</script>
