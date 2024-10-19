<script setup>
import Notification from './Notification/Notification.vue';

// Mock notifications data (you can replace this with data fetched from an API)
const notifications = [
  {
    id: 1,
    title: 'Happy workiversary!',
    message: 'Be sure to add new projects to your work experience.',
    time: '2 weeks ago',
    status: 'NEW'
  },
  {
    id: 2,
    title: 'New message from HR',
    message: 'Check your inbox for updates regarding your application.',
    time: '1 week ago',
    status: 'NEW'
  },
  {
    id: 3,
    title: 'Meeting Reminder',
    message: 'You have a meeting scheduled for tomorrow at 10 AM.',
    time: '3 days ago',
    status: 'REMINDER'
  },
];
</script>

<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 7.388 8 8.722v5.436c0 .764-.236 1.47-.646 2.064L6 17h5"
        />
      </svg>
      <!-- Notification Dot -->
      <span class="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
    </label>

    <!-- Dropdown Content -->
    <ul tabindex="0" class="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-64">
      <!-- Render each notification dynamically -->
      <li v-for="notification in notifications" :key="notification.id">
        <Notification 
          :title="notification.title" 
          :message="notification.message" 
          :time="notification.time" 
          :status="notification.status" 
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* You can add additional styles if needed */
</style>
