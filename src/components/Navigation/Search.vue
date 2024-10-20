<template>
  <div class="relative flex items-center" ref="searchContainer">
    <!-- Search Icon (No circle or background) -->
    <button 
      @click="toggleSearch" 
      class="transition-transform duration-300 focus:outline-none" 
      :class="{'-translate-x-full': isSearching}"
      style="border: none; background: none; padding: 0;">
      <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 15L21 21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#323232" stroke-width="2"></path> </g></svg>
    </button>

    <!-- Search Input (Expands to the left) -->
    <input
      v-if="isSearching"
      ref="searchInput"
      v-model="searchQuery"
      type="text"
      placeholder="Search..."
      class="transition-all duration-300 ease-in-out outline-none pr-2 bg-transparent flex-grow"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Reactive state to track whether the search input is open
const isSearching = ref(false);
const searchQuery = ref('');
const searchContainer = ref(null);
const searchInput = ref(null)

// Function to toggle the search input field
const toggleSearch = async () => {
  isSearching.value = !isSearching.value;
  if (isSearching.value) {
    setTimeout(() => {
      if (searchInput.value) {
        searchInput.value.focus();
      }
    }, 100); // Adjust the delay if needed
  }
  }

// Function to close search when clicking outside
const handleClickOutside = (event) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target)) {
    isSearching.value = false; // Close the search input
  }
};

// Setup listeners when component is mounted
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

// Clean up listeners when component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Style updates: No need for explicit width transition */
input {
  transition: flex-grow 0.3s ease-in-out;
}
</style>
