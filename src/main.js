// import JavaScript Modules
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import './theme/theme/index.css';
import 'element-ui/lib/theme-chalk/display.css';

// use JavaScript Modules
Vue.use(VueRouter)
Vue.use(ElementUI);

// import Vue Components
import ItemList from './components/ItemList.vue'

// define routes
const routes = [
  {
    path: '/',
    redirect: '/itemlist'
  },
  { 
    path: '/itemlist',
    component: ItemList
  }
]

// define router
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
