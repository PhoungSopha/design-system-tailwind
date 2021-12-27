<script setup>
const props = defineProps({
  status: { type: String, default: 'normal' },
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])
function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>
<template>
  <div>
    <div
      class="flex items-center bg-gray-300 rounded-full w-10 h-6 p-1 transition-colors cursor-pointer"
      :class="{ 'bg-primary': modelValue }"
      @click="toggle"
    >
      <div
        class="h-4 w-4 rounded-full shadow-md bg-white transform transition-transform"
        :class="{ 'translate-x-4': modelValue }"
      ></div>
    </div>
  </div>
</template>
