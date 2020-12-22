<template>
  <!-- <demo /> -->
  <com />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import Demo from './view/demo/index.vue'
import com from './view/com/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    com
    // Demo
  }
})
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
