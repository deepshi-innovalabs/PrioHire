<template>
  <div class="relative flex items-center">
    <!-- Search Icon -->
    <button @click="toggleSearch" class="btn btn-circle">
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
          d="M10 4a6 6 0 1012 12A6 6 0 0010 4z"
        />
      </svg>
    </button>

    <!-- Search Input (Expands to the left) -->
    <input
      v-if="isSearching"
      v-model="searchQuery"
      type="text"
      placeholder="Search..."
      class="transition-all duration-300 ease-in-out border-b-2 border-gray-400 outline-none w-0 focus:w-48 pr-2 absolute right-0 bg-transparent"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive state to track whether the search input is open
const isSearching = ref(false);
const searchQuery = ref('');

// Function to toggle the search input field
const toggleSearch = () => {
  isSearching.value = !isSearching.value;
};
</script>

<style scoped>
/* Adjust the input width transition to expand to the left */
input {
  width: 0;
  transition: width 0.3s ease-in-out;
}

input:focus {
  width: 12rem; /* Adjust width as needed */
  right: 0;     /* Keep it aligned to the right, expanding to the left */
}
</style>
