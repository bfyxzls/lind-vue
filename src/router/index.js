import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'
import List from '@/views/List'
import DataList from '@/views/DataList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',//http://localhost:8080/#/hello
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login', //http://localhost:8080/#/login
      name: 'Login',
      component: Login
    },{
      path: '/list', //http://localhost:8080/#/list
      name: 'List',
      component: List
    },{
      path: '/data', //http://localhost:8080/#/data
      name: 'DataList',
      component: DataList
    }
  ]
})
