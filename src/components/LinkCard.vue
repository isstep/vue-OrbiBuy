<script setup>
defineProps({
  imgSrc: { type: String, required: true },
  imgAlt: { type: String, default: 'icon' },
  title: { type: String, required: true },
  href: { type: String, default: '#' },
  arrowSrc: { type: String, required: true },
  specialClass: { type: String, default: '' }
})
</script>

<template>
  <div :class="['link-card', specialClass]">
    <img :src="arrowSrc" alt="arrow" class="link-card__arrow" />
    <img :src="imgSrc" :alt="imgAlt" class="link-card__img" />
    <a :href="href" class="link-card__title">{{ title }}</a>
  </div>
</template>

<style scoped>
.link-card {
  color: #ffffff;
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #262626;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 200px;
  margin: 10px 0;
  padding: 30px 16px;
  border-radius: 10px;
  position: relative;
}
.link-card.home__card-link--with-offset {
  margin-left: 10px;
}
.link-card.home__card-link--with-set {
  margin-right: 10px;
}
.link-card__title {
  font-family: Urbanist, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
}
.link-card__title:hover {
  text-decoration: underline;
}
.link-card__img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
.link-card__arrow {
  position: absolute;
  top: 26px;
  right: 26px;
  width: 19px;
  height: 19px;
}
</style>
