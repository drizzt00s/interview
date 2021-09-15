import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Signin from '../components/signin'
import Login from '../components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
