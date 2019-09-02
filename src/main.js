import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
// axios
import axios from 'axios'
// mint-ui
import { Swipe, SwipeItem, Header, Tabbar, TabItem, Button } from 'mint-ui';
// flexible
import 'lib-flexible/flexible'
// mui
import './assets/lib/mui/css/mui.css'
import mui from './assets/lib/mui/js/mui'
// vant
import { Popup, Icon, Toast, PullRefresh, Tab, Tabs, Search, GoodsAction, GoodsActionIcon, GoodsActionButton, Sku, Switch, Card, SubmitBar, AddressList } from 'vant';
Vue.use(Popup);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(PullRefresh);
Vue.use(Tab).use(Tabs);
Vue.use(Search);
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
Vue.use(Sku);
Vue.use(Switch);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(AddressList);
// mint-ui
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.mui = mui

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')