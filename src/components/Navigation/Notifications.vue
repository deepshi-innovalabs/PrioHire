<script setup>
import DropdownOptionItem from '../Common/DropdownOptionItem.vue';
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
    <label tabindex="0" class="p-2 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 24 24">
    <path d="M 12 2 C 11.172 2 10.5 2.672 10.5 3.5 L 10.5 4.1953125 C 7.9131836 4.862095 6 7.2048001 6 10 L 6 16 L 4.4648438 17.15625 L 4.4628906 17.15625 A 1 1 0 0 0 4 18 A 1 1 0 0 0 5 19 L 12 19 L 19 19 A 1 1 0 0 0 20 18 A 1 1 0 0 0 19.537109 17.15625 L 18 16 L 18 10 C 18 7.2048001 16.086816 4.862095 13.5 4.1953125 L 13.5 3.5 C 13.5 2.672 12.828 2 12 2 z M 10 20 C 10 21.1 10.9 22 12 22 C 13.1 22 14 21.1 14 20 L 10 20 z"></path>
</svg>
      <!-- Notification Dot -->
      <!-- <span class="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span> -->
    </label>

    <!-- Dropdown Content -->
    <ul tabindex="0" class="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-64">
      <!-- Render each notification dynamically -->
      <li v-for="notification in notifications" :key="notification.id">
        <DropdownOptionItem 
      :key="notification.id"
      :title="notification.title"
      :message="notification.message"
      :time="notification.time"
      :status="notification.status"
      :showTime="true"
      :showIcon="false"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* You can add additional styles if needed */
</style>
