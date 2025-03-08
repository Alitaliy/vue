import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});

// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
