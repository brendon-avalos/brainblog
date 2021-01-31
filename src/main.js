import sketch from '../src/plugins/sketch.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import intro from '@/components/intro'
import draw from '@/components/draw'



Vue.config.productionTip = false

Vue.component('intro', intro)
Vue.component('draw', draw)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


