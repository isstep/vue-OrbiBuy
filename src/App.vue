<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import BannerComponent from './components/BannerComponent.vue';

const isBannerVisible = ref(true);

function handleBannerClose() {
  isBannerVisible.value = false;
}
</script>

<template>
  <div class="app">
    <BannerComponent @close="handleBannerClose" />
    <HeaderComponent />
    <main class="app__content">
      <p class="app__description">Discover Your Dream Property with Orbibuy</p>
    </main>
  </div>
</template>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(20, 20, 20, 1);
}

.app__content {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}

.app__description {
  font-size: 1.2rem;
  text-align: center;
  margin: 20px 0;
}
</style>
