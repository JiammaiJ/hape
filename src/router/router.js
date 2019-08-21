import Vue from 'vue'
import VueRouter from 'vue-router';
import homeRouter from './homeRouter/homeRouter'
import movieRouter from './movieRouter/movieRouter'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        homeRouter,
        movieRouter,
        { path: '/', redirect: '/home' },
        // test
        {
            path: '/a',
            component: () =>
                import ('@/components/comment/CommentBar.vue')
        }
    ]
})