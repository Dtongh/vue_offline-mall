// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import api from './utils/api'
import App from './App'
import router from './router/index'
import './assets/style/common.css'
import 'animate.css'
import 'flex.css'
import comJs from '@/utils/common'

Vue.prototype.axios = api
FastClick.attach(document.body)
Vue.use(comJs)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
