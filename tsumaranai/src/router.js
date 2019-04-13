import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Team from './views/Team'
import Projects from './views/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'project',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    }
  ]
})
