import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Signin from '../components/signin'
import Register from '../components/register'
import secrete from '../components/secrete'



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
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/secrete',
      name: 'secrete',
      component: secrete
    }
  ]
})
