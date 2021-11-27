import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/Homepage.vue'

const routes: any = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router