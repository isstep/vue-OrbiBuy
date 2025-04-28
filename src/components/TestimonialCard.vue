<script setup>
import { defineProps } from 'vue'
defineProps({
  quote: String,
  authorName: String,
  authorLocation: String,
  authorImage: String,
  rating: {
    type: Number,
    default: 5
  }
})
</script>

<template>
    <div class="testimonial-card">
      <div class="testimonial-card__rating">
        <span v-for="n in 5" :key="n" class="star">{{ n <= rating ? '★' : '☆' }}</span>
      </div>
      <p class="testimonial-card__quote">"{{ quote }}"</p>
      <div class="testimonial-card__author">
        <img :src="authorImage" :alt="authorName" class="testimonial-card__author-img" />
        <div>
          <p class="testimonial-card__author-name">{{ authorName }}</p>
          <p class="testimonial-card__author-location">{{ authorLocation }}</p>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.testimonial-card {
  background-color: #1a1a1a;
  border: 1px solid #262626;
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ffffff;
  font-family: Urbanist, sans-serif;
}
.testimonial-card__rating {
  color: #ffd700;
}
.star {
  font-size: 20px;
  margin-right: 2px;
}
.testimonial-card__quote {
  font-size: 16px;
  line-height: 1.6;
  color: #cccccc;
  flex-grow: 1;
}
.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: auto;
}
.testimonial-card__author-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.testimonial-card__author-name {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
}
.testimonial-card__author-location {
  font-size: 14px;
  color: #999999;
}
</style>
