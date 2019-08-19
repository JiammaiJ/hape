<template>
    <div class="home">
        <header>Home</header>
        <div class="container">
            <BScroll @scroll="scroll" :touchEnd="touchEnd">
                <div class="content">
                    <div class="banner">
                        <mt-swipe :auto="2000">
                            <mt-swipe-item v-for="(item,index) in bannerImg" :key="index">
                                <img :src="item">
                            </mt-swipe-item>
                        </mt-swipe>
                    </div> 
                    <ul class="mui-table-view mui-grid-view mui-grid-9">
                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-home"></span>
                            <div class="mui-media-body">news</div></a>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                            <div class="mui-media-body">Email</div></a>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">Chat</div></a>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">location</div></a>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">Search</div></a>
                        </li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">Phone</div></a>
                        </li>
                    </ul>
                    <h1>11111111</h1>
                    <h1>11111111</h1>
                    <h1>11111111</h1>
                    <h1>11111111</h1>
                    <h1>11111111</h1>
                </div>
            </BScroll>
        </div>
        <Tabbar />
    </div>
</template>

<script>
    import Tabbar from '@/components/Tabbar.vue';
    import BScroll from '@/components/BScroll.vue';
    export default {
        name:'Home',
        data() {
            return {
                bannerImg:[require('@/assets/images/banner1.jpg'),
                           require('@/assets/images/banner2.jpg'),
                           require('@/assets/images/banner3.jpg'),
                           require('@/assets/images/banner4.jpg'),
                           require('@/assets/images/banner5.jpg')
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
            touchEnd(e){
                console.log('touchEnd');
            }
        },
        created() {
            // this.getBanner();
        }
    }
</script>

<style lang="less">
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
            }
        }
    }
</style>