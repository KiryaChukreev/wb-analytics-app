<template>
  <div class="app-container">
    <NavMenu />
    <router-view class="router-view" />
  </div>
</template>

<script setup lang="ts">
import NavMenu from './components/NavMenu.vue'
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.router-view {
  flex: 1;
  padding: 1rem;
}
</style>
