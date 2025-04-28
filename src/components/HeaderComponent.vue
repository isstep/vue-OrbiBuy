<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const activeLink = ref('Home')
  const isMenuOpen = ref(false)
  const router = useRouter()
  function setActive(link, route) {
    activeLink.value = link
    isMenuOpen.value = false
    router.push(route)
  }
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="/Symbol.png" alt="Logo" class="header__logo-img" />
        <router-link to="/">
          <span class="header__brand-name">Orbibuy</span>
        </router-link>
      </div>
      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <button class="header__nav-close" @click="toggleMenu">
          <span class="header__nav-close-bar"></span>
          <span class="header__nav-close-bar"></span>
          <span class="header__nav-close-bar"></span>
        </button>
        <ul class="header__menu">
          <li
            v-for="link in ['Home', 'About Us', 'Properties', 'Services']"
            :key="link"
            class="header__menu-item"
          >
            <router-link
              :to="link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`"
              class="header__link"
              :class="{ active: activeLink === link }"
              @click="
                setActive(link, link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`)
              "
            >
              {{ link }}
            </router-link>
          </li>
        </ul>
      </nav>
      <router-link to="/contact">
        <button class="header__button">Contact Us</button>
      </router-link>
      <button class="header__burger" @click="toggleMenu">
        <span
          :class="{ 'header__burger-bar': true, 'header__burger-bar--active': isMenuOpen }"
        ></span>
        <span
          :class="{ 'header__burger-bar': true, 'header__burger-bar--active': isMenuOpen }"
        ></span>
        <span
          :class="{ 'header__burger-bar': true, 'header__burger-bar--active': isMenuOpen }"
        ></span>
      </button>
    </div>
  </header>
</template>


<style scoped>
.header {
  width: 100%;
  background-color: rgba(26, 26, 26, 0.9);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1.5px solid rgb(38, 38, 38);
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 86px;
  padding: 12px 36px;
}
.header__logo {
  display: flex;
  align-items: center;
}
.header__logo-img {
  width: 32.5px;
  height: 32.5px;
  margin-right: 6px;
}
.header__brand-name {
  color: #ffffff;
  font-size: 20px;
}
.header__nav {
  display: flex;
  align-items: center;
}
.header__menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0px;
  margin-left: 40px;
}
.header__link {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  padding: 14px 19px;
  font-family: Urbanist, sans-serif;
  border: 1px solid transparent;
  border-radius: 10px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}
.header__link:hover {
  color: rgba(112, 59, 247, 1);
}
.header__link.active {
  background-color: rgba(20, 20, 20, 1);
  color: #7700ff;
  border-color: rgb(38, 38, 38);
}
.header__burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
}
.header__burger-bar {
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition: transform 0.3s ease;
}
.header__burger-bar--active:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.header__burger-bar--active:nth-child(2) {
  opacity: 0;
}
.header__burger-bar--active:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
.header__button {
  background-color: rgba(20, 20, 20, 1);
  color: #ffffff;
  border: 1px solid rgb(38, 38, 38);
  padding: 14px 20px;
  margin-right: 14px;
  cursor: pointer;
  font-size: 14px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
  border-radius: 10px;
}
.header__button:hover {
  background-color: rgba(49, 49, 49, 0.171);
}
@media (max-width: 900px) {
  .header__burger {
    display: flex;
  }
  .header__nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 26, 26, 0.95);
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    transition: transform 0.3s ease;
    transform: translateY(-100%);
    z-index: 999;
  }
  .header__nav--open {
    display: flex;
    transform: translateY(0);
  }
  .header__menu {
    flex-direction: column;
  }
  .header__menu-item {
    margin: 10px 0;
  }
  .header__link {
    font-size: 1.2rem;
  }
  .header__logo-img {
    width: 30px;
    height: 30px;
  }
  .header__button {
    display: none;
  }
  .header__nav--open {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(26, 26, 26);
    z-index: 999;
  }
  .header__nav-close {
    position: absolute;
    top: 40px;
    right: 40px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1000;
  }
  .header__nav-close-bar {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }
  .header__nav--open .header__nav-close-bar:nth-child(1) {
    transform: rotate(39deg) translate(5px, 5px);
  }
  .header__nav--open .header__nav-close-bar:nth-child(2) {
    opacity: 0;
    transform: translateX(-80%);
  }
  .header__nav--open .header__nav-close-bar:nth-child(3) {
    transform: rotate(-46deg) translate(5px, -5px);
  }
}
</style>
