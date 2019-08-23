import Vue from 'vue'
import VueRouter from 'vue-router';
import homeRouter from './homeRouter/homeRouter'
import movieRouter from './movieRouter/movieRouter'
import videoRouter from './videoRouter/videoRouter'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        homeRouter,
        movieRouter,
        videoRouter,
        { path: '/', redirect: '/home' },
        // test
        {
            path: '/a',
            component: () =>
                import ('@/components/Loading.vue')
        },
        {
            path: '/page',
            component: () =>
                import ('@/views/member/Member.vue')
        }
    ]
})