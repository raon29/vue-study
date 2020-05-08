import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Second from '@/components/Second'
import Child from '@/components/Child'
import LeftMenu from '@/components/menu/LeftMenu'
import Scroll from '@/components/Scroll'
// import LeftMenu from '@/components/menu/LeftMenu'

Vue.component('Test', Test)
Vue.component('LeftMenu', LeftMenu)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test,
      children: [
        {
          path: '/child',
          name: 'Child',
          component: Child
        }
      ]
    },
    {
      path: '/sec',
      name: 'Second',
      component: Second
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    }
  ]
})
