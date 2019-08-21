export default {
    path: '/movie',
    redirect: '/movie/nowfire',
    component: () =>
        import ('@/components/movie/Movie.vue'),
    children: [{
            path: 'nowfire',
            meta: { keepAlive: true },
            component: () =>
                import ('@/components/movie/NowFire.vue')
        },
        {
            path: 'detail',
            name: 'detail',
            meta: { keepAlive: false },
            component: () =>
                import ('@/components/movie/Detail.vue')
        },
        {
            path: 'comment',
            name: 'comment',
            meta: { keepAlive: false },
            component: () =>
                import ('@/components/comment/MovieComment.vue')
        }
    ]
}