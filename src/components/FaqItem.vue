<script setup>
import { ref, defineProps } from 'vue'
defineProps({
  question: String,
  answer: String
})
const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
    <div class="faq-item" :class="{ 'faq-item--open': isOpen }">
      <button class="faq-item__question" @click="toggle">
        <span>{{ question }}</span>
        <span class="faq-item__icon">{{ isOpen ? '-' : '+' }}</span>
      </button>
      <div v-show="isOpen" class="faq-item__answer">
        {{ answer }}
      </div>
    </div>
  </template>

<style scoped>
.faq-item {
  background-color: #1a1a1a;
  border: 1px solid #262626;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
  font-family: Urbanist, sans-serif;
  color: #ffffff;
}
.faq-item__question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 25px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}
.faq-item__icon {
  font-size: 24px;
  font-weight: bold;
  color: #703bf7;
}
.faq-item__answer {
  padding: 0 25px 20px 25px;
  font-size: 16px;
  line-height: 1.6;
  color: #cccccc;
  border-top: 1px solid #262626;
  margin-top: 15px;
}
.faq-item--open .faq-item__question {
  color: #703bf7;
}
</style>
