<template>
  <div>name:{{ name }}age: {{ age }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const obj = reactive({
      name: 'chen',
      age: 1,
      friend: [1, 2]
    })
    const objToRefs = toRefs(obj)
    console.log(objToRefs.name) // 变成ref对象
    setTimeout(() => {
      objToRefs.name.value += '====='
    }, 1000)
    return {
      ...objToRefs
    }
  }
})
</script>

<style></style>
