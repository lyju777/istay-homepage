import { createRouter, createWebHistory } from 'vue-router'

// 기본 페이지 컴포넌트는 지연 로딩으로 분리
const Istay = () => import('../views/Istay.vue')
const Comepetitiveness = () => import('../views/comepetitiveness.vue')
const Benefits = () => import('../views/Benefits.vue')
const Company = () => import('../views/Company.vue')
const ContactUs = () => import('../views/ContactUs.vue')

const routes = [
  { path: '/istay', name: 'istay', component: Istay },
  { path: '/comepetitiveness', name: 'comepetitiveness', component: Comepetitiveness },
  { path: '/benefits', name: 'benefits', component: Benefits },
  { path: '/company', name: 'company', component: Company },
  { path: '/contactus', name: 'contactus', component: ContactUs }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router


