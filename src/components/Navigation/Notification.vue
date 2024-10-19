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
  
      <!-- Notification Dropdown Content -->
      <ul tabindex="0" class="dropdown-content menu p-4 shadow-lg bg-base-100 rounded-box w-72">
        <!-- Title -->
        <div class="flex justify-between items-center mb-3">
          <span class="font-semibold text-sm text-gray-500">RECENT NOTIFICATIONS</span>
          <button class="text-gray-400 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
  
        <!-- Notification Message -->
        <div class="bg-gray-100 p-3 rounded-lg mb-2">
          <div class="flex items-start space-x-3">
            <!-- Icon -->
            <span class="bg-purple-200 text-purple-700 rounded-full px-2 py-1 text-xs font-semibold">NEW</span>
  
            <!-- Message -->
            <div>
              <p class="font-semibold text-sm">
                Happy workiversary! Be sure to add new projects to your work experience.
              </p>
              <p class="text-xs text-gray-400">2 weeks ago</p>
            </div>
  
            <!-- Arrow Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </ul>
    </div>
  </template>
  