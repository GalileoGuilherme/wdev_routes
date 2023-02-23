import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Videos from '../pages/Videos'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  },
  {
    path: '/sobre',
    name: 'about',
    component: Sobre
  },
  {
    path: '/contato',
    name: 'contacts',
    component: Contato
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
