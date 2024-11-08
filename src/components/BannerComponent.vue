<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['close'])
const isVisible = ref(true)

function closeBanner() {
    isVisible.value = false
    emit('close')
}
</script>

<template>
    <div v-if="isVisible" class="banner" :class="{ 'fade-out': !isVisible }">
        <div class="banner__overlay"></div>
        <div class="banner__container">
            <span class="banner__text">
                ⭐Discover Your Dream Property with Orbibuy
                <a href="#" class="banner__learn-more">Learn More</a>
            </span>
            <button class="banner__close-button" @click="closeBanner" aria-label="Close banner">
                <img src="/Vector.png" alt="Close" class="close-icon" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.banner {
    width: 100%;
    background-image: url('/123.png');
    max-height: 63px;
    position: relative;
    background-size: cover;
    background-position: center;
    color: #ffffff;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: opacity 0.5s ease;
    border-bottom: 1.5px solid rgb(38, 38, 38);
}

.fade-out {
    opacity: 0;
}

.banner__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(26, 26, 26, 0.82);
    z-index: 1;
}

.banner__container {
    position: relative;
    z-index: 2;
    width: 100%;
    margin: 0 auto;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.banner__text {
    font-family: 'Urbanist', sans-serif;
    font-size: 1.125rem;
    text-align: center;
    flex-grow: 1;
}

.banner__learn-more {
    color: #ffffff;
    text-decoration: underline;
    margin-left: 10px;
    cursor: pointer;
}

.banner__close-button {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
}


.close-icon {
    width: 12px;
    height: 12px;
}

@media (min-width: 1920px) {
.banner__container {
    max-width: 1920px;
}
}

@media (max-width: 1440px) {
.banner__container {
    max-width: 1440px;
}
}
</style>
