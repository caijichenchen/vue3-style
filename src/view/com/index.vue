<template>
  <div class="com-title">链接-link</div>
  <c-link type="success" @click="handleClick">链接-link</c-link>
  <div class="com-title">卡片-card</div>
  <c-card style="width: 300px" shadow="hover">
    <template #header> 卡片-card </template>
    <div v-for="o in 4" :key="o">
      {{ '卡片内容' + o }}
    </div>
  </c-card>
  <div class="com-title">滑块-slider</div>
  <c-slider></c-slider>
  <div class="com-title">文字提示-tooltip</div>
  <c-tooltip></c-tooltip>
  <div class="com-title">分割线-divider</div>
  <div>
    <span>头上一片晴天，心中一个想念</span>
    <c-divider content-position="left">少年包青天</c-divider>
  </div>
  <div>
    <span>旧故里</span>
    <c-divider direction="vertical"></c-divider>
    <span>草木深</span>
  </div>
  <div class="com-title">标签-tag</div>
  <c-tag closable>标签-tag</c-tag>
  <div class="com-title">评分-rate</div>
  <c-rate v-model="rateScore"></c-rate>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CLink from '@/components/link/index.vue'
import CCard from '@/components/card/index.vue'
import CSlider from '@/components/slider/index.vue'
import CTooltip from '@/components/tooltip/index.vue'
import CDivider from '@/components/divider/index.vue'
import CTag from '@/components/tag/index.vue'
import CRate from '@/components/rate/index.vue'
export default defineComponent({
  components: {
    CLink,
    CCard,
    CSlider,
    CTooltip,
    CDivider,
    CTag,
    CRate
  },
  setup() {
    const handleClick = (e: Event) => {
      console.log(e)
    }
    const rateScore = ref(0)
    return {
      handleClick,

      rateScore
    }
  }
})
</script>

<style lang="scss" scoped>
.com-title {
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0;
  color: red;
}
.com-title::before {
  content: '--------';
}
.com-title::after {
  content: '--------';
}
</style>
