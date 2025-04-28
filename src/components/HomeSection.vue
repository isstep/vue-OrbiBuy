<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: ''
  },
  showPagination: {
    type: Boolean,
    default: false
  },
  currentPage: {
    type: Number,
    default: 1
  },
  totalPages: {
    type: Number,
    default: 1
  }
})
defineEmits(['button-click', 'prev-page', 'next-page'])
</script>

<template>
  <div class="home-section">
    <div class="home-section__header">
      <img src="/abstract-stars.png" alt="stars" class="home-section__stars" />
      <span class="home-section__title">{{ title }}</span>
      <button v-if="buttonText" class="home-section__button" @click="$emit('button-click')">
        {{ buttonText }}
      </button>
    </div>
    <p class="home-section__description">
      {{ description }}
    </p>
    <div class="home-section__cards">
      <slot></slot>
    </div>
    <div v-if="showPagination" class="home-section__page-switch">
      <span class="page-info">
        {{ String(currentPage).padStart(2, '0') }}
        <span class="total-pages">of {{ totalPages }}</span>
      </span>
      <div class="page-controls">
        <button class="page-switch-button" @click="$emit('prev-page')" :disabled="currentPage <= 1">
          <img
            class="page-switch-arrow page-switch-arrow--left"
            src="/Vector (Stroke).png"
            alt="Previous Page"
          />
        </button>
        <button
          class="page-switch-button"
          @click="$emit('next-page')"
          :disabled="currentPage >= totalPages"
        >
          <img
            class="page-switch-arrow page-switch-arrow--right"
            src="/Vector (Stroke2).png"
            alt="Next Page"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-section {
  box-sizing: border-box;
}
.home-section__header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
  position: relative;
}
.home-section__stars {
  width: 54.72px;
  height: 24px;
}
.home-section__title {
  font-size: 38px;
  line-height: 1.3;
  font-weight: 600;
  color: #fff;
  margin-right: auto;
}
.home-section__description {
  max-width: 975px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(153, 153, 153, 1);
  margin-bottom: 50px;
}
.home-section__button {
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  font-family: Urbanist, sans-serif;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
  background-color: rgba(26, 26, 26, 1);
  color: #ffffff;
  border: 1px solid rgb(38, 38, 38);
}
.home-section__button:hover {
  background-color: rgba(112, 59, 247, 1);
  border-color: rgba(112, 59, 247, 1);
}
.home-section__cards {
  display: grid;
  gap: 30px;
  margin-bottom: 50px;
}
.home-section__page-switch {
  height: 60px;
  border-top: 1px solid rgba(38, 38, 38, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: Urbanist, sans-serif;
}
.page-info {
  font-size: 16px;
  font-weight: 500;
}
.total-pages {
  color: rgba(153, 153, 153, 1);
  margin-left: 5px;
}
.page-controls {
  display: flex;
  gap: 10px;
}
.page-switch-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(26, 26, 26, 1);
  border: 1px solid rgba(38, 38, 38, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}
.page-switch-button:hover:not(:disabled) {
  background-color: #333;
  border-color: #555;
}
.page-switch-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.page-switch-arrow {
  width: 16px;
  height: 16px;
}
@media (max-width: 768px) {
  .home-section__header {
    justify-content: center;
    text-align: center;
  }
  .home-section__title {
    font-size: 28px;
    margin-right: 0;
    width: 100%;
    order: -1;
  }
  .home-section__description {
    text-align: center;
    margin-bottom: 40px;
  }
  .home-section__button {
    margin-top: 15px;
    width: auto;
    min-width: 200px;
    order: 1;
  }
  .home-section__cards {
    gap: 20px;
    margin-bottom: 40px;
  }
  .home-section__page-switch {
    flex-direction: column;
    gap: 15px;
    height: auto;
    padding: 20px 0;
  }
}
@media (max-width: 480px) {
  .home-section__title {
    font-size: 24px;
  }
  .home-section__description {
    font-size: 14px;
  }
  .page-info {
    font-size: 14px;
  }
  .page-switch-button {
    width: 40px;
    height: 40px;
  }
  .page-switch-arrow {
    width: 14px;
    height: 14px;
  }
}
</style>
