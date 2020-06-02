import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home.vue'
import Todo from '@/components/common/Todo.vue'
import Test from '@/components/common/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todos',
      name: 'todo',
      component: Todo
    },
    {
      path: '/test',
      nmae: 'test',
      component: Test
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/common/About.vue')
    }
  ]
})
