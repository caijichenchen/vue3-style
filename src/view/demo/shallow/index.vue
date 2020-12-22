<template>
  <div>shallowobj1-car{{ shallowObj1.name }}</div>
  <div>shallowobj2-car{{ shallowObj2.name }}</div>
  <button @click="update">update</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  shallowReactive,
  shallowRef,
  ref,
  readonly,
  shallowReadonly
} from 'vue'
export default defineComponent({
  setup() {
    const baseObj = {
      name: 'chen',
      car: {
        name: 'xx'
      }
    }
    const obj1 = reactive(baseObj)
    // 虽然此时处理的代理器对象不会改变深层次的对象数据  但会改变原对象的数据
    // shallowReactive 和 shallowRef shallowReadonly 都是如此
    const shallowObj1 = shallowReactive(baseObj)
    const obj2 = ref(baseObj)
    const shallowObj2 = shallowRef(baseObj)
    const state = reactive(baseObj)

    // const rState1 = readonly(state)
    const rState2 = shallowReadonly(state)
    const state2 = shallowReadonly(reactive(baseObj))
    const update = () => {
      // obj1.car.name = 'cccc'
      // shallowObj1.car.name = 'ccc'
      // shallowObj2.value.car.name = 'ccc'
      // rState2.car.name = 'cccc'
      state2.car.name = 'ccc'
      console.log(obj2.value.car.name, baseObj)
    }
    return {
      obj1,
      shallowObj1,
      obj2,
      update,
      shallowObj2
    }
  }
})
</script>

<style></style>
