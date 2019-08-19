import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// axios
import axios from 'axios'
// mint-ui

import { Swipe, SwipeItem, Search, Header, Tabbar, TabItem } from 'mint-ui';
// flexible
import 'lib-flexible/flexible'
// mui
import './assets/lib/mui/css/mui.css'
import mui from './assets/lib/mui/js/mui'
// mint-ui
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Search.name, Search)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.mui = mui

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')