export default {
    path: '/movie',
    redirect: '/movie/nowfire',
    component: () =>
        import ('@/components/movie/Movie.vue'),
    children: [{
            path: 'nowfire',
            component: () =>
                import ('@/components/movie/NowFire.vue')
        },
        {
            path: 'detail',
            name: 'detail',
            component: () =>
                import ('@/components/movie/Detail.vue')
        }
    ]
}