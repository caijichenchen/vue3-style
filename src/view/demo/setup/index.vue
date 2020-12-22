<template>
  <div>{{ refCount }}</div>
  <div>姓名：{{ retObj.name }}</div>
  <div>年龄：{{ retObj.age }}</div>
  <div>性别：{{ retObj.sex }}</div>
  <h1 ref="refTest">ref-box</h1>
  <button @click="update">更新</button>
  <!-- <button @click="change">改变</button> -->
  <slot name="foot" />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watchEffect } from 'vue'
export default defineComponent({
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    console.log(props, context)
    const count = 1
    const refCount = ref(count)
    const obj = {
      name: 'chen',
      sex: '男'
    }
    // 如果ref内放入对象类型  对将ref.value转化为proxy对象
    const refObj = ref({ name: 'chen' })
    console.log(refCount)
    console.log(refObj)
    const retObj = reactive<any>(obj)
    const update: () => void = () => {
      refCount.value++
      // 增删改 操作代理对象  都会影响到原来对象的属性
      // 增删改 操作原来对象  不会影响到代理对象
      retObj.name = 'chenchen'
      retObj.age = 1
      delete retObj.sex
      console.log(obj)
    }

    const refTest = ref<HTMLElement | null>(null)

    onMounted(() => {
      if (refTest.value) {
        console.log(1111, refTest)
      }
    })

    // const change:()=>void = () => {
    //   retObj = {
    //     v: 1
    //   }
    // }
    // 对于对象来说  属性为基础类型  解构出来的不是响应式  属性为object类型  是proxy代理响应类型
    const objMap = reactive<any>({
      obj1: {
        name: 'chen',
        age: 20
      },
      obj2: {
        name: 'xxx',
        age: 12
      },
      name: 'chen',
      list: ['1', { name: 'c' }]
    })

    console.log(objMap.obj2)
    console.log(objMap.name)

    return {
      refCount,
      retObj,
      update,
      refTest,
      ...objMap
    }
  },
  mounted() {
    // this.num++
    // this.stop()
    console.log(this.obj1)
    this.list[1].name = 'cc'
    console.log(this.list)
  }
})
</script>

<style></style>
