<template>
    <div class="home">
        <header>Home</header>
        <div class="container">
            <BScroll @scroll="scroll" :scrollStart="scrollStart">
                <div class="content">
                    <div class="banner">
                        <mt-swipe :auto="2000">
                            <mt-swipe-item v-for="(item,index) in bannerImg" :key="index">
                                <img :src="item">
                            </mt-swipe-item>
                        </mt-swipe>
                    </div> 
                    <ul class="mui-table-view mui-grid-view mui-grid-9">
                        <li
                            class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
                            v-for="(item,index) in navImg"
                            :key="index"
                        >   
                            <a @tap="go(item.path)">
                                <img :src="item.img">
                                <div class="mui-media-body">{{item.tit}}</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </BScroll>
        </div>
        <Tabbar />
    </div>
</template>

<script>
    import Tabbar from '@/components/Tabbar.vue';
    import BScroll from '@/components/BScroll.vue';
    import { Toast } from 'mint-ui';
    export default {
        name:'Home',
        data() {
            return {
                bannerImg:[require('@/assets/images/banner1.jpg'),
                           require('@/assets/images/banner2.jpg'),
                           require('@/assets/images/banner3.jpg'),
                           require('@/assets/images/banner4.jpg'),
                           require('@/assets/images/banner5.jpg')
                ],
                navImg:[
                    {img:require('@/assets/images/nav1.png'),tit:"电影",path:"/movie"},
                    {img:require('@/assets/images/nav2.png'),tit:"视频",path:"/video"},
                    {img:require('@/assets/images/nav3.png'),tit:"news"},
                    {img:require('@/assets/images/nav4.png'),tit:"news"},
                    {img:require('@/assets/images/nav5.png'),tit:"news"},
                    {img:require('@/assets/images/nav6.png'),tit:"news"},
                    {img:require('@/assets/images/nav5.png'),tit:"news"},
                    {img:require('@/assets/images/nav6.png'),tit:"news"}
                ]
            }
        },
        components:{
            Tabbar,
            BScroll
        },
        methods:{
            // getBanner() {
            //     this.axios.get('/api/imagesList').then(res =>{
            //         console.log(res.data);
            //         if(res.data.code===0){
            //             this.bannerImg=res.data.data.bigImage;
            //         }
            //     })
            // }
            scroll(e) {
                console.log('scroll');
            },
            scrollStart(e){
                console.log('start');
            },
            go(path){
                if(path){
                    this.$router.push(path);
                }else{
                    Toast({
                        message:"莫得了",
                        className:"toast",
                        duration:"3000"
                    });
                }
            }
        },
        created() {
            // this.getBanner();
        }
    }
</script>

<style lang="less">
    .toast{
        background-color:#FFAFC9;
    }
    .home{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        overflow:hidden;
        >header{
            position:fixed;
            left:0;
            top:0;
            width:100%;
            height:50px;
            line-height:50px;
            text-align:center;
            background-color:#FFAFC9;
            font-size:25px;
            color:white;
            font-weight: bold;
            z-index:555;
        }
        .container{
            padding-top:50px;
            padding-bottom:55px;
            width:100%;
            height:100%;
            .content{
                .banner{
                    width:375px;
                    height:190px;
                    img{
                        display:block;
                        width:100%;
                        height:100%;
                        border-radius:10px;
                    }
                }
                .mui-table-view-cell{
                    padding:0;
                    img{
                        display:block;
                        width:40px;
                        height:40px;
                        margin:0 auto;
                        border-radius:10px;
                    }
                }
            }
        }
    }
</style>