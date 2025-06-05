import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TarefasView from '../views/TarefasView.vue'
import PensamentosView from '../views/PensamentosView.vue'
import CronogramaView from '../views/CronogramaView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  // Se alguém entrar em “/”, redirecionamos direto para /login
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: TarefasView,
    meta: { requiresAuth: true }
  },
  {
    path: '/pensamentos',
    name: 'Pensamentos',
    component: PensamentosView,
    meta: { requiresAuth: true }
  },
  {
    path: '/cronograma',
    name: 'Cronograma',
    component: CronogramaView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access')

  if (to.meta.requiresAuth && !token) {

    next({ name: 'Login' })
  } else if (to.name === 'Login' && token) {

    next({ name: 'Home' })
  } else {

    next()
  }
})

export default router
