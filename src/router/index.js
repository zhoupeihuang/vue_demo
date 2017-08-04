import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AddForm from '@/components/AddForm'
import List from '@/components/List'
import ReadMe from '@/components/ReadMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/addForm',
      name: 'AddForm',
      component: AddForm
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/readMe',
      name: 'ReadMe',
      component: ReadMe
    }
  ]
})
