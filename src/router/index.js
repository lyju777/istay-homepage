import { createRouter, createWebHistory } from 'vue-router';
import i18n from '../i18n';

import Home from '../views/Home.vue';
import Comepetitiveness from '../views/Comepetitiveness.vue';
import Features from '../views/Features.vue';
import Company from '../views/Company.vue';
import ContactUs from '../views/ContactUs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/comepetitiveness',
    name: 'Comepetitiveness',
    component: Comepetitiveness,
  },
  {
    path: '/features',
    name: 'Features',
    component: Features,
  },
  {
    path: '/company',
    name: 'Company',
    component: Company,
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const scrollBehavior = () => {
  return { top: 0 };
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

router.beforeEach((to, from, next) => {
  const language = to.query.lang || 'ko';
  i18n.global.locale.value = language;
  return next();
});

export default router;
