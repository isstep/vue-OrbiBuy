import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('./views/HomePage.vue') },
  { path: '/about-us', name: 'About Us', component: () => import('./views/AboutPage.vue') },
  { path: '/properties', name: 'Properties', component: () => import('./views/PropertiesPage.vue') },
  { path: '/services', name: 'Services', component: () => import('./views/ServicesPage.vue') },
  { path: '/contact', name: 'Contact', component: () => import('./views/ContactPage.vue')},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
