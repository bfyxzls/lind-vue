

<template>
  <div id="app">
  <layout></layout>
   <data></data>
  </div>
</template>

<script>
 
import layout from './components/layout'
import data from './components/data'
export default {
  name: 'App',
  components: {
    'layout':layout,
    'data':data
  }
}
 
</script>