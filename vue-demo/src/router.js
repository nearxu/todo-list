import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './components/index';
import About from './components/about';
import Login from './components/login';

import LocalStorage from './utils/localstorage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      requireAuth: true
    },
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    debugger
    const token = LocalStorage.get('token')
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router;
