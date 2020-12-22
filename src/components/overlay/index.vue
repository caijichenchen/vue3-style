<script lang="ts">
import { createVNode, defineComponent, renderSlot } from 'vue'
import { CLICK_EVENT } from '@/utils/constants'
export default defineComponent({
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  emits: [CLICK_EVENT],
  setup(props, { slots, emit }) {
    const onMaskClick = () => {
      emit(CLICK_EVENT)
    }
    return () => {
      return props.mask
        ? createVNode('div', {
            class: ['c-overlay', props.overlayClass],
            style: {
              zIndex: props.zIndex
            },
            onClick: onMaskClick
          })
        : renderSlot(slots, 'default')
    }
  }
})
</script>

<style lang="scss" scoped>
.c-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
}
</style>
