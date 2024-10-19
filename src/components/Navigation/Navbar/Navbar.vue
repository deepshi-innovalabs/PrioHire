<template>
  <nav class="navbar bg-white shadow-md px-4 py-2">
    <div class="flex justify-between items-center w-full">
      <!-- Left Section: Logo -->
      <Logo />

      <!-- Right Section: Search, Notifications, "Ready to Interview", and Profile -->
      <div class="flex items-center space-x-4">
        <!-- Search Component -->
        <Search />

        <!-- Notification Bell Component -->
        <Notifications />

        <!-- Status Button Component -->
        <UserStatus />

        <!-- Profile Dropdown Component -->
        <ProfileDropdown />

        <!-- Dark Mode Toggle -->
        <button @click="toggleTheme" class="btn btn-circle">
          <svg
            v-if="isDarkMode"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m8.66-7.66l.71.71M4.63 5.63l.71.71m12.02 12.02l.71.71M5.63 18.37l.71.71M12 6a6 6 0 100 12 6 6 0 000-12z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12.9A8.1 8.1 0 0112.9 20 8.1 8.1 0 014 12.9 8.1 8.1 0 0112.9 4 8.1 8.1 0 0120 12.9z"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Import components using script setup in Vue 3
import {ref} from 'vue';
import Logo from '../Logo.vue';
import Search from '../Search.vue';
import Notifications from '../Notification.vue';
import UserStatus from '../UserStatus.vue';
import ProfileDropdown from '../ProfileDropdown.vue';

// State for dark mode toggle
const isDarkMode = ref(false);

// Function to toggle dark mode
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;

  // Toggle the dark class on the HTML element
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>

<style scoped>
/* Add any global styles for the navbar */
</style>
