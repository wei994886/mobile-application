import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/home')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      name: 'search',
      path: '/search',
      component: () => import('@/views/search')
    },
    {
      name: 'search-result',
      path: '/search/:q',
      component: () => import('@/views/search-result')
    },
    {
      name: 'article',
      path: '/article/:articleId',
      component: () => import('@/views/article')
    },
    {
      name: 'my',
      path: '/my',
      component: () => import('@/views/my')
    },
    {
      name: 'user-settings',
      path: '/user-settings',
      component: () => import('@/views/user-settings')
    },
    {
      name: 'chat',
      path: '/chat',
      component: () => import('@/views/chat')
    }
  ]
})
