import { Ref } from "vue"

import type { Ref } from 'vue'

export const clearTimer = (timer: Ref<TimerHandler>) => {
  clearTimeout(timer)
  timer.value = null
}