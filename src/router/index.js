import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Home from '@/views/home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => { return { y: 0 } },
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      // name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: _ => import('@/views/dashboard')
        },
        {
          path: 'table',
          name: 'Table',
          component: _ => import('@/views/demo/table')
        },
        {
          path: 'form',
          name: 'Form',
          component: _ => import('@/views/demo/form')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  // if (to.path === '/') next({ name: 'Login' })
  // else next()
  next()
})

export default router
