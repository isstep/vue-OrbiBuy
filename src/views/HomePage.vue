<template>
  <main class="home">
    <div class="home__container">
      <div class="home__content">
        <p class="home__description">Discover Your Dream Property with Orbibuy</p>
        <p class="home__text">
          Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
        </p>
        <div class="home__actions">
          <button class="home__button home__button--primary">Learn More</button>
          <button class="home__button home__button--secondary">Browse Properties</button>
        </div>
      </div>
      <div class="home__image">
        <img src="/Image.png" alt="Beautiful property" class="home__image-img" />
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
  width: 100%;
  max-width: 1200px;
  padding: 20px 35px;
  margin: 0 auto;
}

.home__content {
  max-width: 60%;
}

.home__description {
  font-size: 2rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
}

.home__text {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.home__actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.home__button {
  padding: 14px 24px;
  font-size: 1.1rem;
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

.home__image {
  max-width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home__image-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}
</style>
