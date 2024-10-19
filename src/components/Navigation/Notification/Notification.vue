<script setup>
const props = defineProps({
  title: String,
  message: String,
  time: String,
  status: String
});
</script>

<template>
  <div class="bg-gray-100 p-2 rounded-lg mb-1">
    <div class="flex items-start space-x-3">
      <!-- Status Icon -->
      <span class="bg-purple-200 text-purple-700 rounded-full px-2 py-1 text-xs font-semibold">{{ status }}</span>

      <!-- Message -->
      <div>
        <p class="font-semibold text-sm">
          {{ title }}
        </p>
        <p class="text-xs text-gray-400">{{ message }}</p>
        <p class="text-xs text-gray-400">{{ time }}</p>
      </div>
    </div>
  </div>
</template>
