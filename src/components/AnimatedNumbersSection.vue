<script setup>
import { reactive, watch } from 'vue'
import gsap from 'gsap'
import InfoCard from './InfoCard.vue'
const props = defineProps({
  targetCustomers: { type: Number, default: 0 },
  targetProperties: { type: Number, default: 0 },
  targetExperience: { type: Number, default: 0 }
})
const tweened = reactive({
  customers: 0,
  properties: 0,
  experience: 0
})
watch(
  () => props.targetCustomers,
  (newVal) => {
    gsap.to(tweened, { duration: 1, customers: newVal })
  },
  { immediate: true }
)
watch(
  () => props.targetProperties,
  (newVal) => {
    gsap.to(tweened, { duration: 1, properties: newVal })
  },
  { immediate: true }
)
watch(
  () => props.targetExperience,
  (newVal) => {
    gsap.to(tweened, { duration: 1, experience: newVal })
  },
  { immediate: true }
)
</script>
<template>
  <div class="home__info-cards">
    <InfoCard :value="`${tweened.customers.toFixed(0)}+`" label="Happy Customers" />
    <InfoCard :value="`${tweened.properties.toFixed(0)}k+`" label="Properties For Clients" />
    <InfoCard :value="`${tweened.experience.toFixed(0)}+`" label="Years of Experience" />
  </div>
</template>
<style scoped>
.home__info-cards {
  display: flex;
  gap: 16px;
  margin-top: 49px;
}
</style>
