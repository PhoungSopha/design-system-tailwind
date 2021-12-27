<script setup>
import { computed, onMounted, ref } from 'vue'
import SdLoading from './SdLoading.vue'

defineEmits(['click'])

const props = defineProps({
  status: { type: String, default: 'normal' },
  size: { type: String, default: 'normal' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
})

const baseClass =
  'transition inline-flex items-center justify-center shadow-sm border rounded-md'
const focusClass = 'focus:ring-2 focus:ring-offset-2'
const textClass = 'font-medium text-base sm:text-sm'
const noInteraction = 'pointer-events-none select-none'
const sizeClass = {
  normal: 'px-4 py-2',
  sm: 'px-2 py-1',
}
const statusClass = {
  normal:
    'bg-white hover:bg-gray-50 ring-gray-300 border-gray-300 text-gray-700',
  primary:
    'bg-primary ring-primary-light border-primary hover:bg-primary-dark text-white',
  warning:
    'bg-warning ring-warning-light border-warning hover:bg-warning-dark text-white',
  success:
    'bg-success ring-success-light border-success hover:bg-success-dark text-white',
  danger:
    'bg-danger ring-danger-light border-danger hover:bg-danger-dark text-white',
  disabled:
    'bg-gray-100 hover:bg-gray-50 ring-gray-300 border-gray-300 text-gray-400',
}

const componentClasses = computed(() => {
  let colorState = props.status
  if (props.disabled || props.loading) {
    colorState = 'disabled'
  }
  return {
    [baseClass]: true,
    [focusClass]: true,
    [textClass]: true,
    [sizeClass[props.size]]: true,
    [statusClass[colorState]]: true,
    [noInteraction]: props.disabled || props.loading,
  }
})

const el = ref(null)
onMounted(() => {
  el.value.style.width = el.value.getBoundingClientRect().width + 'px'
  el.value.style.height = el.value.getBoundingClientRect().height + 'px'
})
</script>
<template>
  <button ref="el" :class="componentClasses" @click="$emit('click')">
    <SdLoading v-if="loading" />
    <slot v-else><span>button</span></slot>
  </button>
</template>
