<template>
  <div id="app">
    <div v-if="$store.state.address == '/login'">
      <Login></Login>
    </div>

    <div v-else>
      <Layout></Layout>
    </div>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import Login from "./views/Login";
import store from "./vuex/store";
import Vuex from "vuex";
export default {
  store: store,
  name: "App",
  components: {
    Layout: Layout,
    Login: Login
  },
  data() {
    return { path: this.$store.state.address };
  },
  methods: {}
};
</script>
