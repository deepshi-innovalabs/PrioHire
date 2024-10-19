<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="avatar btn btn-circle">
      <div class="w-8 rounded-full">
        <img src="https://placeimg.com/80/80/people" alt="User Profile" />
      </div>
    </label>

    <!-- Dropdown Content -->
    <ul tabindex="0" class="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-48">
      <!-- Profile Info -->
      <div class="flex items-center space-x-3">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt="Profile Pic" />
        </div>
        <div>
          <span class="font-semibold text-sm">Deepshi Sharma</span>
          <p class="text-xs text-gray-500">Ready to interview</p>
          <a href="#" class="text-blue-500 text-xs">Change</a>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider my-1"></div>

      <!-- Personal Links -->
      <li class="menu-title text-xs">Personal</li>
      <li><a href="#" class="text-sm">Edit profile</a></li>
      <li><a href="#" class="text-sm">Settings</a></li>
      <li><a href="#" class="text-sm">Notifications</a></li>

      <!-- Divider -->
      <div class="divider my-1"></div>

      <!-- Support Links -->
      <li class="menu-title text-xs">Support</li>
      <li><a href="#" class="text-sm">Help</a></li>
      <li><a href="#" class="text-sm">Log out</a></li>
    </ul>
  </div>
</template>

