import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CompletedTasks from '@/components/CompletedTasks'
import Quadrant1 from '@/components/Quadrant1'
import Quadrant2 from '@/components/Quadrant2'
import Quadrant3 from '@/components/Quadrant3'
import Quadrant4 from '@/components/Quadrant4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/completed',
      name: 'CompletedTasks',
      component: CompletedTasks
    },
    {
      path: '/q1',
      name: 'Quadrant1',
      component: Quadrant1
    },
    {
      path: '/q2',
      name: 'Quadrant2',
      component: Quadrant2
    },
    {
      path: '/q3',
      name: 'Quadrant3',
      component: Quadrant3
    },
    {
      path: '/q4',
      name: 'Quadrant4',
      component: Quadrant4
    }
  ]
})
