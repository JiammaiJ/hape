<template>
    <div class="home">
        <header>Home</header>
        <div class="content">
           <div class="banner">
                <mt-swipe :auto="3000">
                    <mt-swipe-item v-for="(item,index) in bannerImg" :key="index">
                        <img :src="item.url">
                    </mt-swipe-item>
                </mt-swipe>
           </div>
           <div class="nav">
               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Home',
        data() {
            return {
                bannerImg:[]
            }
        },
        methods:{
            getBanner() {
                this.axios.get('/api/imagesList').then(res =>{
                    console.log(res.data);
                    if(res.data.code===0){
                        this.bannerImg=res.data.data.bigImage;
                    }
                })
            }
        },
        created() {
            this.getBanner();
        }
    }
</script>

<style lang="less">
    .home{
        >header{
            height:50px;
            line-height:50px;
            text-align:center;
            background-color:#FFAFC9;
            font-size:25px;
            color:white;
            font-weight: bold;
        }
        .banner{
            width:375px;
            height:190px;
            .mt-swipe{
                width:100%;
                height:100%;
                .mt-swipe-item{
                    width:100%;
                    height:100%;
                    img{
                        width:100%;
                        height:100%;
                        display:block;
                    }
                }
            }
        }
        .nav{
            display:flex;
        }
    }
</style>