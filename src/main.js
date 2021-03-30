import sketch from '../src/plugins/sketch.js'
import morph from '../src/plugins/morphPath.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import intro from '@/components/intro'




Vue.config.productionTip = false

Vue.component('intro', intro)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 200);
}("f r e e - - - e x e r c i s e - - -  "));