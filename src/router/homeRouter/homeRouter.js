export default {
    path: '/home',
    component: () =>
        import ('@/views/home/Home.vue'),
    children: []
}