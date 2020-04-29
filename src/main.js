import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store' 

Vue.config.productionTip = false

//引入淘宝适配rem插件,网易适配就不用引入了
import "lib-flexible";

 
 //引入Vant
//  import Vant from "vant";
//  import "vant/lib/index.css";
//  Vue.use(Vant);
 import "@/utils/vant";

//引入全局样式
import "@/styles/index.scss";

import "@/utils/quan";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
