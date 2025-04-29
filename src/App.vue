<script setup>
import { ref } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import BannerComponent from './components/BannerComponent.vue'
import AppFooter from './components/AppFooter.vue'
const isBannerVisible = ref(true)
function handleBannerClose() {
  isBannerVisible.value = false
}
</script>
<template>
  <div class="app">
    <BannerComponent v-if="isBannerVisible" @close="handleBannerClose" />
    <HeaderComponent />
    <div class="app__content-area">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>
<style scoped>
.app {
  font-family: Arial, sans-serif;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(20, 20, 20, 1);
}
.app__content-area {
  flex-grow: 1;
  width: 100%;
}
</style>
