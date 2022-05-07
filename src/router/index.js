import { createRouter, createWebHistory } from 'vue-router'
import LogInRegister from '../views/LogInRegister.vue'
import Home from '../views/Home.vue';
import Routines from '../Routines/Routines.vue';
import Nutrition from '../Nutrition/Nutrition.vue';
import PhysicalActivity from '../Routines/components/forms/FormPhysicalActivity.vue'
import TestExercises from '../Routines/components/routines/TestExercises.vue';
import AbsRoutine from '../Routines/components/routines/types/AbsRoutine.vue';
import ExerciseSuperman from '../Routines/components/routines/exercises/ExerciseSuperman.vue';


const routes = [
  {
    path: '/',
    name: 'login',
    component: LogInRegister
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
    path: '/form-physical-activity',
    name: 'PhysicalActivity',
    component: PhysicalActivity
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
  },
  {
    path: '/abs-routine',
    name: 'AbsRoutine',
    component: AbsRoutine
  },
  {
    path: '/exercise-superman',
    name: 'ExerciseSuperman',
    component: ExerciseSuperman
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
