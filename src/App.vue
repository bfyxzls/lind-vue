

<template>
  <div id="app">
  <layout></layout>
    <login></login> // 显示组件
    <list></list>
  </div>
</template>


<script>
 
import login from './components/login' // 引入login.vue组件
import list from './components/list' 
import layout from './components/layout'
export default {
  name: 'App',
  components: {
    'login': login,
    'list': list,
    'layout':layout
  }
}
 
</script>