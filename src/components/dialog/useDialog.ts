import { UPDATE_MODEL_EVENT } from './../../utils/constants';
import { ref, watch, computed, CSSProperties } from 'vue'

import { UPDATE_MODEL_EVENT } from '@/utils/constants'
import { clearTimer } from '@/utils/util'

import type { Ref } from 'vue'
import { nextTick, SetupContext } from '@vue/runtime-core'
import type { UseDialogProps } from './dialog'

export const CLOSE_EVENT = 'close'
export const OPEN_EVENT = 'open'
export const CLOSEED_EVENT = 'closed'
export const OPENED_EVENT = 'opened'
export { UPDATE_MODEL_EVENT }

export default function(props:UseDialogProps, ctx: SetupContext, targetRef: Ref<HTMLElement|null>) {
  const visible = ref(false)
  const closed = ref(false)
  const openTimer = ref<TimeoutHandle>(null)
  const closeTimer = ref<TimeoutHandle>(null)
  const rendered = ref(false)

  const style = computed(() => {
    const style = {} as CSSProperties
    if(!props.fullscreen) {
      style.marginTop = props.top
      props.width && (style.width = props.width)
    }
    return style
  })

  function afterEnter() {
    ctx.emit(OPENED_EVENT)
  }

  function afterLeave() {
    ctx.emit(CLOSEED_EVENT)
    ctx.emit(UPDATE_MODEL_EVENT, false)
    if(props.destoryOnClose) {
      rendered.value = false
    }
  }

  function close() {
    clearTimer(closeTimer)
    clearTimer(openTimer)
    if(props.closeDelay) {
      closeTimer.value = setTimeout(() => {
        clearTimer(closeTimer)
        doClose()
      }, props.closeDelay)
    }else {
      doClose()
    }
  }

  function doClose() {
    visible.value = false
  }

  function handleClose() {
    if(props.beforeClose) {
      props.beforeClose()
    }else {
      close()
    }
  }

  function doOpen() {
    visible.value = true
  }

  function open() {
    clearTimer(openTimer)
    clearTimer(closeTimer)
    if(props.openDelay) {
      openTimer.value = setTimeout(() => {
        clearTimer(openTimer)
        doOpen()
      }, props.openDelay)
    }else {
      doOpen()
    }
  }
  
  function onModalClick() {
    props.modal && handleClose()
  }

  watch(() => props.modelValue, val => {
    if(val) {
      closed.value = false
      rendered.value = true
      open()
      ctx.emit(OPEN_EVENT)
      nextTick(() => {
        if(targetRef.value) {
          targetRef.value.scrollTop = 0
        }
      })
    }else {
      close()
      if(!closed.value) {
        ctx.emit(CLOSE_EVENT)
      }
    }
  })

  onMounted(() => {
    if(props.modelValue) {
      visible.value = true
      rendered.value = true
      open()
    }
  })

  return {
    handleClose,
    visible,
    style
  }
}