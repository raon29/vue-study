import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home.vue'
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
      path: '/test',
      nmae: 'test',
      component: Test
    },
  ]
})
