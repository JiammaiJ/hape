<template>
    <div class="home">
        <mt-header fixed title="Home"></mt-header>
        <p>123</p>
    </div>
</template>

<script>
    export default {
        name:'Home',
        data() {
            return {}
        },
        methods:{},
        mounted() {}
    }
</script>

<style lang="less">
    .home{
        .mint-header{
            height:50px;
            line-height:50px;
            text-align:center;
            background-color:#FFAFC9;
        }
    }
</style>