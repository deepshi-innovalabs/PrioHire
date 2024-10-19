<template>
<div class="dropdown dropdown-end">
  <label tabindex="0" class="btn btn-outline">Change Status</label>
  <ul tabindex="0" class="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-60">
    <!-- Ready to Interview -->
    <li class="rounded-lg" v-for="option in options">
      <UserStatusItem
      :icon="option.icon" 
          :description="option.description"  
          :status="option.status"/>
    </li>
  </ul>
</div>
</template>
<script setup>
import UserStatusItem from './UserStatus/UserStatusItem.vue'
const options = [
  {
    id: 1,
    status: 'Ready to interview',
    description: 'You’re actively looking for new work and ready to interview. Your job profile will be visible to startups.',
    icon:  `<svg class="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm3.293-10.707a1 1 0 00-1.414-1.414L12 11.586l-1.879-1.879a1 1 0 10-1.414 1.414l2.293 2.293a1 1 0 001.414 0l3.293-3.293z"/>
        </svg>`,
  },
  {
    id: 2,
    status: 'Open to Offers',
    description: 'You’re not looking but open to hear about new opportunities. Your job profile will be visible to startups.',
    icon: `<svg class="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-8h2v5h-2v-5zm1-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
        </svg>`,
  },
  {
    id: 3,
    status: 'Closed to offers',
    description: 'You’re not looking and don’t want to hear about new opportunities. Your job profile will be hidden to startups.',
    icon: `<svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm4.707-11.707a1 1 0 00-1.414-1.414L12 10.586l-3.293-3.293a1 1 0 10-1.414 1.414l3.293 3.293-3.293 3.293a1 1 0 101.414 1.414L12 12.414l3.293 3.293a1 1 0 001.414-1.414l-3.293-3.293 3.293-3.293z"/>
        </svg>`,
  },
];
</script>