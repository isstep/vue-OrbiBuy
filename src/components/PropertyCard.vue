<script setup>
defineProps({
  imageSrc: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: Array, default: () => [] },
  price: { type: String, required: true },
  detailsLink: { type: String, default: '#' }
})
</script>

<template>
  <div class="property-card">
    <img :src="imageSrc" class="property-card__image" />
    <div class="property-card__content">
      <span class="property-card__title">{{ title }}</span>
      <p class="property-card__description">
        {{ description }}
        <a :href="detailsLink" class="property-card__read-more-link">Read More</a>
      </p>
      <div class="property-card__elements">
        <div v-for="(feature, index) in features" :key="index" class="property-card__feature">
          <img :src="feature.icon" class="property-card__feature-icon" />
          {{ feature.text }}
        </div>
      </div>
      <div class="property-card__footer">
        <div class="property-card__price">
          <span class="property-card__price-label">Price</span>
          <span class="property-card__price-value">{{ price }}</span>
        </div>
        <button class="property-card__button" @click="$emit('viewDetails', detailsLink)">
          View Property Details
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.property-card {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(38, 38, 38, 1);
  background-color: rgba(20, 20, 20, 1);
  box-sizing: border-box;
}
.property-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}
.property-card__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 20px;
}
.property-card__title {
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: #fff;
  margin-bottom: 10px;
}
.property-card__description {
  font-family: Urbanist, sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(153, 153, 153, 1);
  margin-bottom: 15px;
  flex-grow: 1;
}
.property-card__read-more-link {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: underline;
  text-underline-offset: 2px;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
  cursor: pointer;
  margin-left: 5px;
}
.property-card__read-more-link:hover {
  color: rgba(255, 255, 255, 1);
}
.property-card__elements {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
.property-card__feature {
  display: flex;
  align-items: center;
  background-color: rgba(26, 26, 26, 1);
  border: 1px solid rgba(38, 38, 38, 1);
  border-radius: 28px;
  padding: 5px 12px;
  font-family: Urbanist, sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
}
.property-card__feature-icon {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}
.property-card__footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-top: 15px;
  border-top: 1px solid rgba(38, 38, 38, 1);
}
.property-card__price {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.property-card__price-label {
  font-family: Urbanist, sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  color: rgba(153, 153, 153, 1);
}
.property-card__price-value {
  font-family: Urbanist, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: #fff;
}
.property-card__button {
  padding: 10px 18px;
  border-radius: 8px;
  font-family: Urbanist, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  background-color: rgba(112, 59, 247, 1);
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.property-card__button:hover {
  background-color: rgba(100, 50, 230, 1);
}
</style>
