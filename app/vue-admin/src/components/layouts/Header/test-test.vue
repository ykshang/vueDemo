<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => Array.from({ length: 30 }, (_, i) => ({
      id: i,
      text: `项目 ${i + 1}`,
    })),
  },
})

const scrollContent = ref(null)
const showControls = ref(false)
const isStart = ref(true)
const isEnd = ref(false)

function checkOverflow() {
  if (scrollContent.value) {
    showControls.value = scrollContent.value.scrollWidth > scrollContent.value.clientWidth
  }
}

function updateButtonStates() {
  if (!scrollContent.value)
    return

  const { scrollLeft, scrollWidth, clientWidth } = scrollContent.value
  isStart.value = scrollLeft === 0
  isEnd.value = scrollLeft + clientWidth >= scrollWidth
}

function scrollBy(amount) {
  scrollContent.value?.scrollBy({
    left: amount,
    behavior: 'smooth',
  })
}

onMounted(() => {
  checkOverflow()
  updateButtonStates()
  window.addEventListener('resize', checkOverflow)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkOverflow)
})
</script>

<template>
  <div class="scroll-container">
    <div
      ref="scrollContent"
      class="scroll-content"
      @scroll="updateButtonStates"
    >
      <div v-for="item in items" :key="item.id" class="scroll-item">
        {{ item.text }}
      </div>
    </div>

    <button
      v-show="showControls && !isStart"
      class="scroll-btn left"
      :disabled="isStart"
      @click="scrollBy(-200)"
    >
      <div i-ri-arrow-left-line />
    </button>

    <button
      v-show="showControls && !isEnd"
      class="scroll-btn right"
      :disabled="isEnd"
      @click="scrollBy(200)"
    >
      <div i-ri-arrow-right-line />
    </button>
  </div>
</template>

<style scoped>
.scroll-container {
  position: relative;
  width: 100%;
  margin: auto 10px;
  overflow: hidden;
}

.scroll-content {
  display: flex;
  gap: 12px;
  padding: 16px 0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-content::-webkit-scrollbar {
  display: none;
}

.scroll-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 4px;
  padding: 5px 10px;
}

.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
}

.scroll-btn:hover {
  background: #f5f5f5;
}

.scroll-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.scroll-btn.left {
  left: 10px;
}

.scroll-btn.right {
  right: 10px;
}
</style>
