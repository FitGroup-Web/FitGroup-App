import { createRouter, createWebHistory } from 'vue-router'
import LogInRegister from '../views/LogInRegister.vue'
import Home from '../views/Home.vue';
import Routines from '../views/Routines.vue';
import Nutrition from '../views/Nutrition.vue';
import TestExercises from '../components/routines/TestExercises.vue';

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
    path: '/test',
    name: 'TestExercise',
    component: TestExercises
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
