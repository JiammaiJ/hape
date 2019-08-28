export default {
    path: '/shop',
    component: () =>
        import ('@/components/shop/Shop.vue'),
    redirect: '/shop/shoplist',
    children: [{
            path: 'shoplist',
            component: () =>
                import ('@/components/shop/ShopList.vue')
        },
        {
            path: 'shopinfo',
            name: 'shopinfo',
            component: () =>
                import ('@/components/shop/ShopInfo.vue')
        }
    ]
}