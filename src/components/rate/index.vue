<template>
  <div class="el-rate">
    <span
      v-for="item in max"
      :key="item"
      class="el-rate__item"
      :style="{ cursor: disabled ? 'auto' : 'pointer' }"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <i :class="[classes[item - 1]]" class="el-rate__icon" :style="getIconStyle(item)">
        <i v-if="showDecimalIcon(item)" class="el-rate__decimal"> </i>
      </i>
    </span>
    <span v-if="showText || showScore" class="el-rate__text" :style="{ color: textColor }">{{
      text
    }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@/utils/constants'
export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    lowThreshold: {
      type: Number,
      default: 2
    },
    highThreshold: {
      type: Number,
      default: 4
    },
    colors: {
      type: [Array, Object],
      default: () => {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
      }
    },
    voidColor: {
      type: String,
      default: '#C6D1DE'
    },
    diasbledVoidColor: {
      type: String,
      default: '#EFF2F7'
    },
    iconClasses: {
      type: [Array, Object],
      default: () => {
        return ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']
      }
    },
    voidIconClass: {
      type: String,
      default: 'el-icon-star-off'
    },
    disabledVoidIconClass: {
      type: String,
      default: 'el-icon-star-on'
    },
    showText: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: '1F2D3D'
    },
    texts: {
      type: Array as PropType<string[]>,
      default: () => {
        return ['极差', '失望', '一般', '满意', '惊喜']
      }
    },
    scoreTemplate: {
      type: String,
      default: '{value}'
    }
  },
  emits: [CHANGE_EVENT, UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    /**
     * 1.colorsMap 根据界限值划分
     * 2.classesMap 根据界限值划分
     * 3.showText || showScore
     * 4.fun
     */
    const currentValue = ref(props.modelValue)

    const text = computed(() => {
      let result
    })

    function getValueMap(value: unknown, map: Record<string, unknown>) {}

    const colorsMap = computed(() => {
      return Array.isArray(props.colors)
        ? {
            [props.lowThreshold]: props.colors[0],
            [props.highThreshold]: { value: props.colors[1], excludes: true },
            [props.max]: props.colors[2]
          }
        : props.colors
    })
    const voidColor = computed(() => (props.disabled ? props.diasbledVoidColor : props.voidColor))
    const activeColor = computed(() => getValueMap(currentValue.value, colorsMap.value))

    function getIconStyle(item: number) {
      return {
        color: item <= currentValue.value ? activeColor : voidColor
      }
    }

    const classesMap = computed(() => {
      return Array.isArray(props.iconClasses)
        ? {
            [props.lowThreshold]: props.iconClasses[0],
            [props.highThreshold]: { value: props.iconClasses[1], excludes: true },
            [props.max]: props.iconClasses[2]
          }
        : props.iconClasses
    })
    const voidClass = computed(() =>
      props.disabled ? props.disabledVoidIconClass : props.voidIconClass
    )
    const activeClass = computed(() => getValueMap(currentValue.value, classesMap.value))

    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val
      }
    )

    return {
      getIconStyle
    }
  }
})
</script>

<style lang="scss" scoped></style>
