import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    clientHeight: document.documentElement.clientHeight,
    clientWidth: document.documentElement.clientWidth,
    address: window.location.pathname,
    message:1
  }

})

export default store
