import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AppHeader from '@/components/Header'
import NewCandidate from '@/components/NewCandidate'
import Senate from '@/components/Senate'
import President from '@/components/President'

Vue.component('app-header', AppHeader)
Vue.component('new-candidate', NewCandidate)
Vue.component('app-senate', Senate)
Vue.component('app-president', President)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/new-candidate',
      name: 'NewCandidate',
      component: NewCandidate
    },
    {
      path: '/candidate/senate',
      name: 'Senate',
      component: Senate
    },
    {
      path: '/candidate/president',
      name: 'President',
      component: President
    }
  ]
})
