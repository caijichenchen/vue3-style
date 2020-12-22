<template>
  <span class="c-tag" @click="handleClick">
    <slot />
    <i class="el-tag__close el-icon-close" v-if="closable" @click="handleClose" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CLICK_EVENT } from '@/utils/constants'
export default defineComponent({
  props: {
    type: {
      type: String,
      default: '',
      validator(val: string): boolean {
        return ['success', 'info', 'warning', 'danger', ''].includes(val)
      }
    },
    closable: {
      type: Boolean,
      default: false
    },
    hit: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'light',
      validator(val: string): boolean {
        return ['dark', 'light', 'plain'].includes(val)
      }
    },
    disableTansitions: {
      type: Boolean,
      default: false
    }
  },
  emits: [CLICK_EVENT],
  setup(props, { emit }) {
    function handleClick() {
      emit(CLICK_EVENT)
    }
    function handleClose(e: Event) {
      e.stopPropagation()
      emit(CLICK_EVENT)
    }
    return {
      handleClick,
      handleClose
    }
  }
})
</script>

<style lang="scss" scoped>
.c-tag {
  padding: 0 10px;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  border: 1px solid #d9ecff;
  background-color: #ecf5ff;
  color: #409eff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
}
</style>
