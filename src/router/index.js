import { createRouter, createWebHistory } from 'vue-router';
import LogInRegister from '../views/LogInRegister.vue'
import Home from '../views/Home.vue';
import Routines from '../views/Routines.vue';
import Nutrition from '../views/Nutrition.vue';
import AbsRoutine from '../components/AbsRoutine.vue';
import Superman from '../components/Superman.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LogInRegister',
    component: LogInRegister
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/routines',
    name: 'Routines',
    component: Routines
  },
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: Nutrition
  },
  {
    path: '/absroutine',
    name: 'AbsRoutine',
    component: AbsRoutine
  },
  {
    path: '/superman',
    name: 'Superman',
    component: Superman
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
