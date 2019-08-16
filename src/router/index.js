import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vantindexbar from '@/components/vantIndexBar'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vantindexbar',
      name: 'vantindexbar',
      component: vantindexbar

    }
  ]
})
