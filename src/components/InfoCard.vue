<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="info-card">
    <span class="info-card__value">{{ value }}</span>
    <span class="info-card__text">{{ label }}</span>
  </div>
</template>

<style scoped>
.info-card {
  width: 192px;
  display: flex;
  flex-direction: column;
  padding: 14px 20px;
  background-color: #1a1a1a;
  border-radius: 9px;
  border: 1px solid #262626;
  text-align: left;
}
.info-card__value {
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
}
.info-card__text {
  font-size: 1rem;
  color: rgba(153, 153, 153, 1);
}
</style>
