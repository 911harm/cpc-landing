import Vue from 'vue'
import App from './App.vue'
$(function () {
  $('[data-toggle="popover"]').popover()
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
