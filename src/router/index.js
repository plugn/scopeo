import Vue from 'vue'
import VueRouter from 'vue-router'
import Show from '../views/Show'
import Docs from '../views/Docs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/view/:component',
    component: Show,
  },
  {
    path: '/article/:article',
    component: Docs,
  },
  {
    path: '/',
    component: Docs,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

/*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
    }
  }
*/
