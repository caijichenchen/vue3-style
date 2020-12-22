import { onMounted, ref, onUnmounted } from 'vue'
export default function useGetPoint() {
  const x = ref(0)
  const y = ref(0)
  const handleClick = (e:MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', handleClick)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })
  return {
    x,
    y
  }
}
