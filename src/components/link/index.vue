<template>
  <a
    :class="['c-link', 'c-link-' + type, disabled && 'is-disabled', underline && 'is-underline']"
    :href="href || null"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CLICK_EVENT } from '@/utils/constants'
type CLineType = PropType<'primary' | 'sucess' | 'warning' | 'danger' | 'info' | 'default'>
export default defineComponent({
  props: {
    type: {
      type: String as CLineType,
      default: 'default',
      validator: (value: string) => {
        return ['default', 'primary', 'success', 'waring', 'danger', 'info'].includes(value)
      }
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    }
  },
  emits: [CLICK_EVENT],
  setup(props, { emit }) {
    function handleClick(e: Event) {
      !props.disabled && emit(CLICK_EVENT, e)
    }
    return {
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped>
.c-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  vertical-align: middle;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  padding: 0;
  font-weight: 500;
  position: relative;
}
.c-link-default {
  color: #606266;
}
.c-link-primary {
  color: #409eff;
}
.c-link-success {
  color: #67c23a;
}
.c-link-warning {
  color: #e6a23c;
}
.c-link-danger {
  color: #f56c6c;
}
.c-link-info {
  color: #909399;
}
.is-disabled {
  cursor: not-allowed;
}
.is-underline:hover {
  color: #67c23a;
  // text-decoration: underline;
}
</style>
