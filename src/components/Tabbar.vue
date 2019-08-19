<template>
    <div class="tabbar">
        <mt-tabbar>
            <mt-tab-item >
                <img slot="icon" src="@/assets/images/icon1.png">
                    home
                </mt-tab-item>
            <mt-tab-item >
                <img slot="icon" src="@/assets/images/icon4.png">
                    page
            </mt-tab-item>
            <mt-tab-item >
                <img slot="icon" src="@/assets/images/icon2.png">
                    page
            </mt-tab-item>
            <mt-tab-item >
                <img slot="icon" src="@/assets/images/icon3.png">
                    page
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
        methods:{}
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