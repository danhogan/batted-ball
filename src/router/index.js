import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/table'
  },
  {
    path: '/',
    redirect: '/table'
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/Table.vue')
  },
  {
    path: '/batters',
    name: 'batters',
    component: () => import('../views/Batters.vue')
  },
  {
    path: '/pitchers',
    name: 'pitchers',
    component: () => import('../views/Pitchers.vue')
  },
  {
    path: '/plot',
    name: 'plot',
    component: () => import('../views/Plot.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
