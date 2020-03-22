import Vue from 'vue'
import VueRouter from 'vue-router'
import Sort from '@/components/Sort'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sort',
    component: Sort
  }
]

const router = new VueRouter({
  routes
})

export default router
