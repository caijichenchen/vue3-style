<template>
  <div class="c-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div v-if="$slots.header || header" class="c-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="c-card__body" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    header: {
      type: String,
      default: ''
    },
    bodyStyle: {
      type: [Object, Array, String],
      default: ''
    },
    shadow: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.c-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  font-size: 14px;
  overflow: hidden;
  transition: all 0.3s;
  color: #303133;
  .c-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }
  .c-card__body {
    padding: 20px;
    box-sizing: border-box;
  }
}
.is-always-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.is-never-shadow {
  box-shadow: none;
}
.is-hover-shadow:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
