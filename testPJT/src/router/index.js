import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import LeftMenu from '@/components/menu/LeftMenu'

Vue.component("Test", Test);
Vue.component("LeftMenu", LeftMenu);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    }
  ]
})
