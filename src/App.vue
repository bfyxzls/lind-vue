<template>
  <div id="app">
    <div v-if="$store.state.adress == '/login'|| $store.state.adress == '/approve' || $store.state.adress == '/approvesign'">
      <Login></Login>
    </div>

    <div v-else>
      <Layout></Layout>
    </div>
  </div>

</template>

<script>

  import Layout from './components/Layout'
  import Login from './views/Login'
  import store from './vuex/store'
  export default {
    store,
    name: 'App',
    components: {
      'Layout':Layout,
      'Login': Login
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
