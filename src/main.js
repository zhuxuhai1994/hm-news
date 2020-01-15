import Vue from 'vue'
import App from './App.vue'
import router from './/router/index'
import 'lib-flexible'
import './styles/base.css'
import './styles/iconfont.css'

// console.log(router, App)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
