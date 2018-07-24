import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import PropDemo from '@/components/PropDemo'
import SlotDemo from '@/components/SlotDemo'
import ToggleDemo from '@/components/Toggle'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/prop',
      name: 'PropDemo',
      component: PropDemo
    },
    {
      path: '/slot',
      name: 'SlotDemo',
      component: SlotDemo
    },
    {
      path: '/modal',
      name: 'ToggleDemo',
      component: ToggleDemo
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
