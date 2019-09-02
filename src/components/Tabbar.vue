<template>
    <div class="tabbar">
        <mt-tabbar>
            <mt-tab-item>
                <img slot="icon" src="@/assets/images/icon1.png">
                    主页
                </mt-tab-item>
            <mt-tab-item>
                <img slot="icon" src="@/assets/images/icon4.png" @click="goCart">
                    购物车                    
            </mt-tab-item>
            <mt-tab-item >
                <img slot="icon" src="@/assets/images/icon2.png">
                    无
            </mt-tab-item>
            <mt-tab-item >
                <img slot="icon" src="@/assets/images/icon3.png">
                    无
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name:'Tabbar',
        data() {
            return {}
        },
        methods:{
            goCart() {
                console.log(1);
                this.$router.push('/shopcart');
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    .tabbar{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:55px;
        z-index:555;
    }
</style>