import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Login from '@/views/Login'
import List from '@/views/List'
import DataList from '@/views/DataList'
import DataDetail from '@/views/DataDetail'
import Register from '@/views/Register'
import TestVue from '@/views/Test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',//http://localhost:8080/#/hello
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login', //http://localhost:8080/#/login
      name: 'Login',
      component: Login
    }, {
      path: '/list', //http://localhost:8080/#/list
      name: 'List',
      component: List
    }, {
      path: '/data', //http://localhost:8080/#/data
      name: 'DataList',
      component: DataList,
      meta: {
        name: ["课程管理", "课程列表"],
        path: '/data'
      }
    },
    {
      path: '/data/:id',
      name: 'DataDetail',
      component: DataDetail,
      meta: {
        name: ["课程管理", "课程列表", "课程详细"],
        path: '/data/:id',
      }
    }, {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        name: ["注册"],
        path: '/register'
      }
    },
    {
      path:'/test',
      name: 'test',
      component: TestVue
    }

  ]
})
