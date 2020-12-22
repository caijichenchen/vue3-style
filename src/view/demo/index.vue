<template>
  <!-- <div>2</div> -->
  <!-- <to-refs /> -->
  <to-ref name="toRef" :obj="test" />
  <!-- <hooks /> -->
  <!-- <setup type="setup">
    <template v-slot:foot> foot </template>
  </setup>
  <shallow></shallow> -->
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// import Setup from './setup/index.vue'
// import Hooks from './hooks/index.vue'
// import ToRefs from './toRefs/index.vue'
import toRef from './toRef/index.vue'
// import Shallow from './shallow/index.vue'
export default defineComponent({
  name: 'HelloWorld',
  components: {
    // Setup,
    // Hooks,
    // ToRefs,
    toRef
    // Shallow
  },
  setup() {
    const test = reactive({
      name: 'test'
    })
    return {
      test
    }
  }
})
</script>

<style></style>
