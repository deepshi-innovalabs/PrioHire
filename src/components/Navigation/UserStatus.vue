<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-circle">
      <div class="w-8 rounded-full">
        <img src="https://placeimg.com/80/80/people" alt="User Profile" />
      </div>
    </label>

    <!-- Dropdown Content -->
    <ul tabindex="0" class="dropdown-content menu p-4 shadow-lg bg-base-100 rounded-box w-72">
      <!-- Ready to interview -->
      <li class="mb-4">
        <div class="flex items-center space-x-2">
          <div class="bg-green-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m0 0l-2-2m2 2V8m0 4a8 8 0 11-8-8 8 8 0 018 8z" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-lg">Ready to interview</h3>
            <p class="text-sm text-gray-500">You’re actively looking for new work and ready to interview. Your job profile will be visible to startups.</p>
          </div>
        </div>
      </li>

      <!-- Open to offers -->
      <li class="mb-4">
        <div class="flex items-center space-x-2">
          <div class="bg-yellow-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-lg">Open to offers</h3>
            <p class="text-sm text-gray-500">You’re not looking but open to hear about new opportunities. Your job profile will be visible to startups.</p>
          </div>
        </div>
      </li>

      <!-- Closed to offers -->
      <li>
        <div class="flex items-center space-x-2 bg-purple-50 p-3 rounded-lg">
          <div class="bg-red-100 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-lg">Closed to offers</h3>
            <p class="text-sm text-gray-500">You’re not looking and don’t want to hear about new opportunities. Your job profile will be hidden to startups.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

