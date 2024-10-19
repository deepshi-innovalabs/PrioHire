<template>
  <div class="relative flex items-center" ref="searchContainer">
    <!-- Search Icon (No circle or background) -->
    <button 
      @click="toggleSearch" 
      class="transition-transform duration-300 focus:outline-none" 
      :class="{'-translate-x-full': isSearching}"
      style="border: none; background: none; padding: 0;">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
        <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
      </svg>
    </button>

    <!-- Search Input (Expands to the left) -->
    <input
      v-if="isSearching"
      ref="searchInput"
      v-model="searchQuery"
      type="text"
      placeholder="Search..."
      class="transition-all duration-300 ease-in-out outline-none pr-2 ml-2 bg-transparent flex-grow"
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
