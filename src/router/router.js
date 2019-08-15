import Vue from 'vue'
import VueRouter from 'vue-router';
import homeRouter from './homeRouter/homeRouter'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        homeRouter,
        { path: '/', redirect: '/home' }
    ]
})