<script setup>
import { reactive, onMounted, watch } from "vue";
import gsap from "gsap";

const numbers = reactive({
  customers: 200,
  properties: 10,
  experience: 16,
});


const tweened = reactive({
  customers: 0,
  properties: 0,
  experience: 0,
});

watch(
  () => numbers.customers,
  (newVal) => {
    gsap.to(tweened, { duration: 1, customers: newVal });
  }
);

watch(
  () => numbers.properties,
  (newVal) => {
    gsap.to(tweened, { duration: 1, properties: newVal });
  }
);

watch(
  () => numbers.experience,
  (newVal) => {
    gsap.to(tweened, { duration: 1, experience: newVal });
  }
);

onMounted(() => {
  gsap.to(tweened, {
    duration: 1,
    customers: numbers.customers,
    properties: numbers.properties,
    experience: numbers.experience,
  });
});
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
      <img src="/Sub Container.png">
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
  transition: background-color 0.3s ease, border-color 0.3s ease;
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
margin: 0 ;
width: 746px;
height: 622px;
gap: 0px;
opacity: 0px;

  }

  .home__linkimage{
    position: absolute;
    margin-left: 717px;
    margin-bottom: 295px;
  }
</style>
