import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Second from '@/components/Second'
import Child from '@/components/Child'
import LeftMenu from '@/components/menu/LeftMenu'
import Scroll from '@/components/Scroll'
import Scroll2 from '@/components/Scroll2'
import nav1 from '@/components/nav/nav1'
import nav2 from '@/components/nav/nav2'
import nav3 from '@/components/nav/nav3'
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
    },
    {
      path: '/scroll2',
      name: 'Scroll2',
      component: Scroll2
    },
    {
      path: '/nav1',
      name: 'nav1',
      component: nav1
    },
    {
      path: '/nav2',
      name: 'nav2',
      component: nav2
    },
    {
      path: '/nav3',
      name: 'nav3',
      component: nav3
    }
  ]
})
