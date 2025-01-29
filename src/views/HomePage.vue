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
      <div class="home__card-links-container">
        <div class="home__card-link home__card-link--with-offset">
          <img src="/home__arrow.png" alt="arrow" class="home__card-link-arrow" />
          <img src="/dream-home.png" alt="dream home" class="home__card-link-img" />
          <a href="#" class="home__card-link-title">Find Your Dream Home</a>
        </div>
        <div class="home__card-link">
          <img src="/home__arrow.png" alt="arrow" class="home__card-link-arrow" />
          <img src="/property-value.png" alt="dream home" class="home__card-link-img" />
          <a href="#" class="home__card-link-title">Unlock Property Value</a>
        </div>
        <div class="home__card-link">
          <img src="/home__arrow.png" alt="arrow" class="home__card-link-arrow" />
          <img src="/property-management.png" alt="dream home" class="home__card-link-img" />
          <a href="#" class="home__card-link-title">Effortless Property Management</a>
        </div>
        <div class="home__card-link home__card-link--with-set">
          <img src="/home__arrow.png" alt="arrow" class="home__card-link-arrow" />
          <img src="/smart-investments.png" alt="dream home" class="home__card-link-img" />
          <a href="#" class="home__card-link-title">Smart Investments, Informed Decisions</a>
        </div>
      </div>
    </div>

    <div class="home__FetueredProperties">
      <img src="/abstract-stars.png" alt="stars" class="home__FetueredProperties--stars" />
      <span class="home__FetueredProperties--text">Featured Properties</span>
      <p class="home__FetueredProperties--description">
        Explore our handpicked selection of featured properties. Each listing offers a glimpse into
        exceptional homes and investments available through Estatein. Click "View Details" for more
        information.
      </p>
      <button class="home__FetueredProperties--button">View All Properties</button>

      <div class="home__FetueredProperties--cards">
        <div class="home__FetueredProperties--card">
          <img src="/Villa.png" class="home__FetueredProperties--card-image" />
          <div class="home__FetueredProperties--card-content">
            <span class="home__FetueredProperties--card-title">Seaside Serenity Villa</span>
            <span class="home__FetueredProperties--card-description">
              A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
              <a class="home__FetueredProperties--card-link">Read More</a>
            </span>

            <div class="home__FetueredProperties--card-elements">
              <div class="home__FetueredProperties--card-feature">
                <img src="/Icon1.png" class="home__FetueredProperties--card-feature-icon" />
                4-Bedroom
              </div>
              <div class="home__FetueredProperties--card-feature">
                <img src="/Icon2.png" class="home__FetueredProperties--card-feature-icon" />
                3-Bathroom
              </div>
              <div class="home__FetueredProperties--card-feature">
                <img src="/Icon3.png" class="home__FetueredProperties--card-feature-icon" />
                Villa
              </div>
            </div>
            <div class="home__FetueredProperties--card-price">
              <span class="home__FetueredProperties--card-price_label">Price</span>
              <span class="home__FetueredProperties--card-price_value">$550,000</span>
            </div>
            <button class="home__FetueredProperties--card-button">View Property Details</button>
          </div>
        </div>
        <div class="home__FetueredProperties--card">
          <img src="/Villa.png" class="home__FetueredProperties--card-image" />
          <div class="home__FetueredProperties--card-content">
            <span class="home__FetueredProperties--card-title">Seaside Serenity Villa</span>
            <span class="home__FetueredProperties--card-description">
              A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
              <a class="home__FetueredProperties--card-link">Read More</a>
            </span>

            <div class="home__FetueredProperties--card-elements">
              <div class="home__FetueredProperties--card-feature">
                <img src="/Icon1.png" class="home__FetueredProperties--card-feature-icon" />
                4-Bedroom
              </div>
              <div class="home__FetueredProperties--card-feature">
                <img src="/Icon2.png" class="home__FetueredProperties--card-feature-icon" />
                3-Bathroom
              </div>
              <div class="home__FetueredProperties--card-feature">
                <img src="/Icon3.png" class="home__FetueredProperties--card-feature-icon" />
                Villa
              </div>
            </div>
            <div class="home__FetueredProperties--card-price">
              <span class="home__FetueredProperties--card-price_label">Price</span>
              <span class="home__FetueredProperties--card-price_value">$550,000</span>
            </div>
            <button class="home__FetueredProperties--card-button">View Property Details</button>
          </div>
        </div>
        <div class="home__FetueredProperties--card">
          <img src="/Villa.png" class="home__FetueredProperties--card-image" />
          <div class="home__FetueredProperties--card-content">
            <span class="home__FetueredProperties--card-title">Seaside Serenity Villa</span>
            <span class="home__FetueredProperties--card-description">
              A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
              <a class="home__FetueredProperties--card-link">Read More</a>
            </span>

            <div class="home__FetueredProperties--card-elements">
              <div class="home__FetueredProperties--card-feature">
                <img src="/Icon1.png" class="home__FetueredProperties--card-feature-icon" />
                4-Bedroom
              </div>
              <div class="home__FetueredProperties--card-feature">
                <img src="/Icon2.png" class="home__FetueredProperties--card-feature-icon" />
                3-Bathroom
              </div>
              <div class="home__FetueredProperties--card-feature">
                <img src="/Icon3.png" class="home__FetueredProperties--card-feature-icon" />
                Villa
              </div>
            </div>
            <div class="home__FetueredProperties--card-price">
              <span class="home__FetueredProperties--card-price_label">Price</span>
              <span class="home__FetueredProperties--card-price_value">$550,000</span>
            </div>
            <button class="home__FetueredProperties--card-button">View Property Details</button>
          </div>
        </div>
      </div>

      <div class="home__FetueredProperties--page-switch">
        <span>01 <span>of 10</span></span>
        <button class="home__FetueredProperties--page-switch-button-arrow">
          <img class="home__FetueredProperties--page-switch-arrow" src="/public/Vector (Stroke).png" />
        </button>
        <button>
          <img class="home__FetueredProperties--page-switch-arrow" src="/public/Vector (Stroke2).png" />
        </button>
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
  font-weight: 600;
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
  left: 47.2%;
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
  color: #ffffff;
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #262626;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 455px;
  margin: 10px 0;
  padding: 30px 16px 30px 16px;
  border-radius: 10px;
  position: relative;
}

.home__card-link--with-offset {
  margin-left: 10px;
}

.home__card-link--with-set {
  margin-right: 10px;
}

.home__card-link-title {
  font-family: Urbanist;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
}

.home__card-link-img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.home__card-link-arrow {
  position: absolute;
  top: 26px;
  right: 26px;
  width: 19px;
  height: 19px;
}

.home__FetueredProperties {
  margin-left: 120px;
  margin-top: 90px;
}

.home__FetueredProperties--stars {
  width: 54.72px;
  height: 24px;
  margin-left: -10px;
  margin-top: -10px;
  margin-bottom: 8px;
}

.home__FetueredProperties--text {
  font-size: 38px;
  line-height: 57px;
  font-weight: 600;
}

.home__FetueredProperties--description {
  width: 975px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(153, 153, 153, 1);
  font-weight: 500;
  margin-top: 10px;
}

.home__FetueredProperties--button {
  padding: 14px 20px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
  background-color: rgba(26, 26, 26, 1);
  color: #ffffff;
  border: 1px solid rgb(38, 38, 38);
  position: absolute;
  margin-top: -50px;
  right: 120px;
}

.home__FetueredProperties--button:hover {
  background-color: rgba(100, 50, 230, 1);
}
.home__FetueredProperties--cards {
  display: flex;
  gap: 20px;
}
.home__FetueredProperties--card {
  width: 413.33px;
  height: 549px;
  padding: 28.5px;
  border-radius: 12px;
  border: 2px solid rgba(38, 38, 38, 1);
  background-color: rgba(20, 20, 20, 1);
  margin-top: 60px;
}

.home__FetueredProperties--card-image {
  border-radius: 10px;
}

.home__FetueredProperties--card-content {
  display: flex;
  flex-wrap: wrap;
  width: 353.33px;
  height: 214px;
  gap: 24px;
}

.home__FetueredProperties--card-title {
  margin-top: 20px;
  width: 353.33px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
}

.home__FetueredProperties--card-description {
  font-family: Urbanist;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(153, 153, 153, 1);
  margin-top: -20px;
}

.home__FetueredProperties--card-link {
  font-family: 'Urbanist', sans-serif;
  font-size: 16px;
  font-weight: 200;
  line-height: 24px;
  text-align: left;
  text-decoration: underline;
  text-underline-offset: 1px;
  color: rgba(255, 255, 255, 1);
  transition: color 0.3s ease;
}

.home__FetueredProperties--card-elements {
  display: flex;
  width: 353px;
  height: 33px;
  gap: 4px;
}

.home__FetueredProperties--card-feature {
  display: flex;
  background-color: rgba(26, 26, 26, 1);
  border: 1px solid rgba(38, 38, 38, 1);
  border-radius: 28px;
  padding: 4px 14px 5px 13.5px;
  opacity: 0px;
  font-family: Urbanist;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}

.home__FetueredProperties--card-feature-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.home__FetueredProperties--card-price {
  display: flex;
  flex-direction: column;
}

.home__FetueredProperties--card-price_label {
  font-family: Urbanist;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: rgba(153, 153, 153, 1);
}

.home__FetueredProperties--card-price_value {
  font-family: Urbanist;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}

.home__FetueredProperties--card-button {
  width: 227.33px;
  height: 49px;
  margin-left: 16px;
  border-radius: 8px;

  font-family: Urbanist;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;

  background-color: rgba(112, 59, 247, 1);
  color: #ffffff;
  border: 1px solid rgba(112, 59, 247, 0.8);
}

.home__FetueredProperties--card-button:hover {
  background-color: rgba(100, 50, 230, 1);
}

.home__FetueredProperties--page-switch {
  margin-top: 30px;
  width: 1280px;
  height: 60px;
  border-top: 1px solid rgba(38, 38, 38, 1);

  display: flex;
  justify-content: space-between;
  opacity: 0px;
}
</style>
