import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// css 引入
import '../src/assets/css/global.css'
import '../src/assets/css/iconfont.css'
// js 
import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");