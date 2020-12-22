<template>
  <div :class="['c-divider', 'c-divider-' + direction]">
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="['c-divider__text', 'is-' + contentPosition]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(val: string): boolean {
        return ['horizontal', 'vertical'].includes(val)
      }
    },
    contentPosition: {
      type: String,
      default: 'center',
      validator(val: string): boolean {
        return ['left', 'center', 'right'].includes(val)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.c-divider {
  background-color: #dcdfe6;
  position: relative;
}
.c-divider-horizontal {
  width: 100%;
  margin: 24px 0;
  height: 1px;
  display: block;
}
.c-divider-vertical {
  width: 1px;
  margin: 0 8px;
  height: 1em;
  vertical-align: middle;
  display: inline-block;
}
.c-divider__text {
  position: absolute;
  padding: 0 20px;
  background-color: #fff;
  font-size: 14px;
  color: #303133;
  font-weight: 500;
}
.is-center {
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.is-left {
  left: 20px;
  transform: translateY(-50%);
}
.is-right {
  right: 20px;
  transform: translateY(-50%);
}
</style>
