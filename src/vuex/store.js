import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    clientHeight: document.documentElement.clientHeight,
    clientWidth: document.documentElement.clientWidth,
    adress: window.location.pathname,
  }

})

export default store
