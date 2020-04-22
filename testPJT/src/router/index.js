import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import tt from '@/components/tt'
import LeftMenu from '@/components/menu/LeftMenu'
// import LeftMenu from '@/components/menu/LeftMenu'

Vue.component('Test', Test)
Vue.component('tt', tt)
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
          path: '/test',
          name: 'tt',
          component: tt
        }
      ]
    }
  ]
})
