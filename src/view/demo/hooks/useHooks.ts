import { ref }from 'vue'
export default function useHooks<T>() {
  const data = ref<T | null>(null)
  setTimeout(() => {
    data.value = {
      name: 'chen',
      age: 1
    }
    // console.log(data);
  }, 1500)
  return {
    data
  }
}