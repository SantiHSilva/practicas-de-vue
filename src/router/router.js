import { createWebHistory, createRouter } from 'vue-router'

import Pokemon from '../Pokemon.vue'
import Inicio from '../Inicio.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/pokemon', component: Pokemon },
  { path: '/inicio', component: Inicio },
]

export const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
})

// $router.push('/') // Esta es una sentencia para mover de la ruta actual a otra ruta
// Solo era posible accederse mediante $router.push('pokemon')