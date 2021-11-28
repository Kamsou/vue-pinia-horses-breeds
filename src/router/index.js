import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Breeds from '../views/Breeds.vue'
import Breed from '../views/Breed.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/breeds',
    name: 'Breeds',
    component: Breeds,
  },
  {
    path: '/breed',
    name: 'Breed',
    component: Breed,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router