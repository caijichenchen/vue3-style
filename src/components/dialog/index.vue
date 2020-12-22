<template>
  <teleport to="body">
    <transition>
      <c-overlay v-show="visible" :mask="modal" :overlay-class="modalClass" @click="onModalClick">
        <div
          ref="dialogRef"
          :class="[
            'c-dialog',
            'is-fullscreen' && fullscreen,
            'c-dialog-center' && center,
            customClass
          ]"
          :style="style"
          @click="$event.stopPropagation()"
        >
          <div class="c-dialog__header">
            <slot name="title">
              <span class="c-dialog__title">{{ title }}</span>
            </slot>
            <el-button v-if="showClose" @click="handleClose">
              <i class="el-icon el-icon-close"></i>
            </el-button>
          </div>
          <div class="c-dialog__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="c-dialog__footer">
            <slot name="footer" />
          </div>
        </div>
      </c-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, SetupContext } from 'vue'
import overlay from '@/components/overlay/index.vue'
import {
  default as useDialog,
  UPDATE_MODEL_EVENT,
  CLOSE_EVENT,
  CLOSEED_EVENT,
  OPEN_EVENT,
  OPENED_EVENT
} from './useDialog'
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '50%'
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    },
    modal: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String,
      default: ''
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function as PropType<(...args: any[]) => unknown>
    },
    center: {
      type: Boolean,
      default: false
    },
    destoryOnClose: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'c-overlay': overlay
  },
  emits: [UPDATE_MODEL_EVENT, CLOSE_EVENT, CLOSEED_EVENT, OPEN_EVENT, OPENED_EVENT],
  setup(props, ctx) {
    const dialogRef = ref<HTMLElement | null>(null)
    return {
      ...useDialog(props, ctx as SetupContext, dialogRef),
      dialogRef
    }
  }
})
</script>

<style lang="scss" scoped>
.c-dialog {
  position: relative;
  background-color: #fff;
  border-radius: 2px;
  margin: 0 auto 50px;
  box-sizing: border-box;
  .c-dialog__header {
    padding: 20px 20px 10px;
    .c-dialog__title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
  }
  .c-dialog__body {
    text-align: initial;
    padding: 25px 25px 30px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .c-dialog__footer {
    padding: 10px 20px 20px;
    box-sizing: border-box;
  }
}
.c-dialog-center {
  text-align: center;
}
</style>
