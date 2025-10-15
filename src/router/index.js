import { createRouter, createWebHistory } from 'vue-router'

const Comepetitiveness = () => import('../views/comepetitiveness.vue')
const Features = () => import('../views/Features.vue')
const Company = () => import('../views/Company.vue')
const ContactUs = () => import('../views/ContactUs.vue')

const routes = [
  { path: '/comepetitiveness', name: 'comepetitiveness', component: Comepetitiveness },
  { path: '/features', name: 'benefits', component: Features },
  { path: '/company', name: 'company', component: Company },
  { path: '/contactus', name: 'contactus', component: ContactUs }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
 
export default router


