<template>
    <div>
        <header><span class="mui-icon mui-icon-back" @tap="go"></span><slot></slot></header>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data() {
            return{}
        },
        props:{
          
        },
        methods:{
            go() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less" scoped>
    header{
            display:flex;
            align-items: center;
            position:fixed;
            left:0;
            top:0;
            width:100%;
            height:50px;
            background-color:#FFAFC9;
            color:white;
            z-index:555;
            span{
                display:flex;
                align-items: center;
                justify-content:center;
                width:50px;
                height:50px;
                z-index:666;
            }
            h3{
                flex:1;
                display:flex;
                justify-content: center;
                margin-left:-50px;
            }
    }
</style>