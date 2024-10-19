<script setup>
import Navbar from './components/Navigation/Navbar/Navbar.vue'
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar/>
  <router-view></router-view>
</template>

<style scoped>
</style>
