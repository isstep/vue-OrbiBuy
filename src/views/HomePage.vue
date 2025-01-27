<script setup>
import { reactive, onMounted, watch } from 'vue'
import gsap from 'gsap'

const numbers = reactive({
  customers: 200,
  properties: 10,
  experience: 16
})

const tweened = reactive({
  customers: 0,
  properties: 0,
  experience: 0
})

watch(
  () => numbers.customers,
  (newVal) => {
    gsap.to(tweened, { duration: 1, customers: newVal })
  }
)

watch(
  () => numbers.properties,
  (newVal) => {
    gsap.to(tweened, { duration: 1, properties: newVal })
  }
)

watch(
  () => numbers.experience,
  (newVal) => {
    gsap.to(tweened, { duration: 1, experience: newVal })
  }
)

onMounted(() => {
  gsap.to(tweened, {
    duration: 1,
    customers: numbers.customers,
    properties: numbers.properties,
    experience: numbers.experience
  })
})
</script>

<template>
  <main class="home">
    <div class="home__container">
      <div class="home__content">
        <div class="home__description">
          <p>Discover Your Dream Property with Orbibuy</p>
        </div>
        <p class="home__text">
          Your journey to finding the perfect property begins here. Explore our listings to find the
          home that matches your dreams.
        </p>
        <div class="home__actions">
          <button class="home__button home__button--primary">Learn More</button>
          <button class="home__button home__button--secondary">Browse Properties</button>
        </div>
        <div class="home__info-cards">
          <div class="home__card">
            <span class="home__card-value">{{ tweened.customers.toFixed(0) }}+</span>
            <span class="home__card-text">Happy Customers</span>
          </div>
          <div class="home__card">
            <span class="home__card-value">{{ tweened.properties.toFixed(0) }}k+</span>
            <span class="home__card-text">Properties For Clients</span>
          </div>
          <div class="home__card">
            <span class="home__card-value">{{ tweened.experience.toFixed(0) }}+</span>
            <span class="home__card-text">Years of Experience</span>
          </div>
        </div>
      </div>
      <div class="home__image">
        <img src="/Container2.png" alt="Beautiful property" class="home__image-img" />
      </div>
      <div class="home__linkimage">
        <img src="/Sub Container.png" />
      </div>
    </div>

    <div class="home__card-links">
  <div class="home__card-links-container ">
    <div class="home__card-link home__card-link--with-offset">
      <img src="/home__arrow.png" alt="arrow" class="home__card-link-arrow">
      <img src="/dream-home.png" alt="dream home" class="home__card-link-img">
      <a href="#" class="home__card-link-title">Find Your Dream Home</a>
    </div>
    <div class="home__card-link">
      <img src="/home__arrow.png" alt="arrow" class="home__card-link-arrow">
      <img src="/property-value.png" alt="dream home" class="home__card-link-img">
      <a href="#" class="home__card-link-title">Unlock Property Value</a>
    </div>
    <div class="home__card-link">
      <img src="/home__arrow.png" alt="arrow" class="home__card-link-arrow">
      <img src="/property-management.png" alt="dream home" class="home__card-link-img">
      <a href="#" class="home__card-link-title">Effortless Property Management</a>
    </div>
    <div class="home__card-link home__card-link--with-set">
      <img src="/home__arrow.png" alt="arrow" class="home__card-link-arrow">
      <img src="/smart-investments.png" alt="dream home" class="home__card-link-img">
      <a href="#" class="home__card-link-title">Smart Investments, Informed Decisions</a>
    </div>
  </div>
</div>
  </main>
</template>

<style scoped>
.home {
  width: 100%;
}

.home__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}

.home__content {
  max-width: 600px;
  height: 622px;
  margin-left: 120px;
}

.home__description {
  margin-top: 100px;
  font-size: 46px;
  font-family: Urbanist, sans-serif;
  font-weight: semi-bold;
  color: #ffffff;
  line-height: 55.2px;
}

.home__text {
  margin-top: 19px;
  font-size: 1rem;
  width: 610px;
  color: #a89e9e;
}

.home__actions {
  display: flex;
  gap: 15px;
  margin-top: 49px;
}

.home__button {
  padding: 14px 20px;
  font-size: 13.8px;
  border-radius: 10px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.home__button--primary {
  background-color: rgba(20, 20, 20, 1);
  color: #ffffff;
  border: 1px solid rgb(38, 38, 38);
}

.home__button--primary:hover {
  background-color: #262626;
  border-color: #333;
}

.home__button--secondary {
  background-color: rgba(112, 59, 247, 1);
  color: #ffffff;
  border: 1px solid rgba(112, 59, 247, 0.8);
}

.home__button--secondary:hover {
  background-color: rgba(100, 50, 230, 1);
}

.home__info-cards {
  display: flex;
  gap: 16px;
  margin-top: 49px;
  width: 610px;
  height: 99px;
}

.home__card {
  width: 192px;
  display: flex;
  flex-direction: column;
  padding: 14px 20px;
  background-color: #1a1a1a;
  border-radius: 9px;
  border: 1px solid #262626;
  text-align: left;
}

.home__card-value {
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
}

.home__card-text {
  font-size: 1rem;
  color: rgba(153, 153, 153, 1);
}

.home__image-img {
  margin: 0;
  width: 730px;
  height: 622px;
  gap: 0px;
  opacity: 0px;
}

.home__linkimage {
  position: absolute;
  margin-left: 717px;
  margin-bottom: 295px;
  width: 129px;
  height: 129px;
}

.home__card-links {
  width: 100%;
  height: 190px;
  background-color: rgba(26, 26, 26, 1);
}

.home__card-links-container {
  position: absolute;
  border-top: 3px solid #262626;
  border-bottom: 3px solid #262626;
  margin: 5px 0;
  background-color: rgba(20, 20, 20, 1);
  height: 180px;
  width: 100%;
  display: flex;
  gap: 13px;

}

.home__card-link {
  color: #ffffff; /* text-violet-400 */
  background-color: #1a1a1a; /* bg-graphite-black */
  border-radius: 10px; /* rounded-10px */
  box-shadow: 0 0 0 1px #262626; /* ring-signal-black */

  display: flex;
  flex-direction: column;  /* Для вертикального выравнивания */
  justify-content: center;  /* Вертикальное выравнивание */
  align-items: center;
  
  width: 455px;
  margin: 10px 0;
  padding: 30px 16px 30px 16px;
  border-radius: 10px;
  position: relative; /* Добавляем относительное позиционирование */
}

.home__card-link--with-offset {
  margin-left: 10px; /* Добавляем отступ сверху */
}

.home__card-link--with-set{
  margin-right: 10px;
}

.home__card-link-title{
  font-family: Urbanist;
  font-size: 16px;
  line-height: 24px;
}

.home__card-link-img{
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.home__card-link-arrow{
  position: absolute;  /* Абсолютное позиционирование */
  top: 26px;
  right: 26px;
  width: 19px;
  height: 19px;
}
</style>
