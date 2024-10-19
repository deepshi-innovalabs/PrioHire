<template>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="avatar btn btn-circle">
        <div class="w-8 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt="User Profile" />
        </div>
      </label>
  
      <!-- Dropdown Content -->
      <ul tabindex="0" class="dropdown-content menu p-4 shadow-lg bg-base-100 rounded-box w-64">
        <!-- Profile Info -->
        <div class="flex items-center space-x-4">
          <div class="w-12 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="Profile Pic" />
          </div>
          <div>
            <span class="font-semibold text-lg">Deepshi Sharma</span>
            <p class="text-sm text-gray-500">Ready to interview</p>
            <a href="#" class="text-blue-500 text-sm">Change</a>
          </div>
        </div>
  
        <!-- Divider -->
        <div class="divider my-2"></div>
  
        <!-- Personal Links -->
        <li class="menu-title">Personal</li>
        <li><a href="#">Edit profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Notifications</a></li>
  
        <!-- Divider -->
        <div class="divider my-2"></div>
  
        <!-- Support Links -->
        <li class="menu-title">Support</li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Log out</a></li>
  
        <!-- Post a Job Button only if you are an employer -->
        <!-- <div class="p-2">
          <a href="#" class="btn btn-outline btn-primary w-full">Post a job</a>
        </div> -->
      </ul>
    </div>
  </template>

  
  