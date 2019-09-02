import Vue from 'vue'
import VueRouter from 'vue-router';
import homeRouter from './homeRouter/homeRouter'
import movieRouter from './movieRouter/movieRouter'
import videoRouter from './videoRouter/videoRouter'
import shopRouter from './shopRouter/shopRouter'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        homeRouter,
        movieRouter,
        videoRouter,
        shopRouter,
        { path: '/', redirect: '/home' },
        {
            path: '/videoplay',
            component: () =>
                import ('@/components/video/VideoPlay.vue')
        },
        {
            path: '/shopcart',
            component: () =>
                import ('@/views/shopCart/ShopCart.vue')
        }
        // test
    ]
})