import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Home from '@/views/home'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
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
      name: 'Home',
      component: Home,
      redirect: { name: 'Dashboard' },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: _ => import('@/views/dashboard')
        },
        {
          path: 'table',
          name: 'Table',
          component: _ => import('@/views/demo/table')
        },
        {
          path: 'tableWithCopycell',
          name: 'TableWithCopycell',
          component: _ => import('@/views/demo/table-with-copycell')
        },
        {
          path: 'form-input',
          name: 'FormInput',
          component: _ => import('@/views/demo/form-input')
        },
        {
          path: 'form-select',
          name: 'FormSelect',
          component: _ => import('@/views/demo/form-select')
        },
        {
          path: 'formmaker',
          name: 'FormMaker',
          component: _ => import('@/views/form-maker/main')
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
