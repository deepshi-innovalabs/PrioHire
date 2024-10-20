<script setup>
const props = defineProps({
  icon: String,         // The icon or SVG content (can be empty for notifications)
  title: String,        // The main title (used for both notifications and user status)
  message: String,      // The secondary message (optional, for notifications)
  time: String,         // Time or date info (optional, for notifications)
  status: String,       // Status label (used in notifications or user status)
  showTime: {           // Boolean to conditionally show time
    type: Boolean,
    default: false
  },
  showIcon: {           // Boolean to conditionally show icon (for user status)
    type: Boolean,
    default: false
  }
});

// Emits the event to update the parent component's v-model
const emit = defineEmits(['update:modelValue']);

const handleClick = () => {
  emit('update:modelValue', props.title);
};
</script>

<template>
  <div @click="handleClick" class="p-3 rounded-lg mb-1">
    <div class="flex items-start space-x-3">
      <!-- SVG Icon / Status Label -->
      <span v-if="showIcon" v-html="icon"></span>
      <span v-else class="bg-purple-200 text-purple-700 rounded-full px-2 py-1 text-xs font-semibold">{{ status }}</span>

      <!-- Title and Message -->
      <div>
        <p class="font-semibold text-sm">{{ title }}</p>
        <p v-if="message" class="text-xs text-gray-400">{{ message }}</p>
        <p v-if="showTime && time" class="text-xs text-gray-400">{{ time }}</p>
      </div>
    </div>
  </div>
</template>
