<template>
  <div>x:{{ x }}y:{{ y }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useGetPoint from './useGetPoint'
// import useHooks from './useHooks'
interface UserData {
  name: string
  age: number
}
export default defineComponent({
  setup() {
    // const { data } = useHooks<UserData>()
    const { x, y } = useGetPoint()

    return { x, y }
  }
})
</script>

<style></style>
