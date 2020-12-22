<template>
  <div>name: {{ name }}</div>
  <div>{{ state }}</div>
  <div>{{ foo }}</div>
  <div>{{ foo2 }}</div>
  <button @click="update">update</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    },
    obj: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  setup(props) {
    const state = reactive({ name: 'chen', age: 1 })
    const foo = toRef(state, 'name')
    const foo2 = ref(state.name)
    // const propName = toRef(prop.obj.name)
    console.log(props)
    const update = () => {
      // state.name = 'xxx' // state && foo   change
      foo.value = 'xxx'
      foo2.value = 'xxxx'
    }
    return {
      state,
      foo,
      foo2,
      update
    }
  }
})
</script>

<style></style>
