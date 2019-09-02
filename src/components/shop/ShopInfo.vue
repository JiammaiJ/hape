<template>
    <div class="shopinfo">
        <div :class="{navbar:true,active:topFlag}" ref="top">
            <div :class="{active:topFlag}"
                 @tap="$router.go(-1)"
            >
                <van-icon name="arrow-left" />
            </div>
            <div >
                <div v-if="topFlag"><span>商品</span><span>评价</span><span>详情</span><span>推荐</span></div>
            </div>
            <div :class="{active:topFlag}">···</div>
        </div>
        <div class="banner">
            <mt-swipe :auto="2000">
                <mt-swipe-item v-if="isGoods()">
                    <img :src="goods.img">
                </mt-swipe-item>
                <mt-swipe-item
                    v-for="(item,index) in bannerImg"
                    :key="index"
                >
                    <img :src="item">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="des">
            <div>
                <div><span>￥{{goods.pri}}</span></div>
                <div>
                    <span><van-icon name="fire-o" />降价提醒</span>
                    <span><van-icon name="like-o" />关注</span>
                </div>
            </div>
            <div>{{goods.des}}</div>
            <div>下单即送送送,斯是陋室,惟吾德馨,苔痕上阶绿,草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。</div>
        </div>
        <EaseBuy />
        <Coupon />
        <Recomment />
        <ShopBottom :goods="goods" @ballCallback="animateBall"></ShopBottom>
        <div class="ball" ref="ball">

        </div>
    </div>
</template>

<script>
    import EaseBuy from './shopCom/EaseBuy'
    import Coupon from './shopCom/Coupon'
    import Recomment from './shopCom/Recomment'
    import ShopBottom from './shopCom/ShopBottom'
    export default {
        name:"ShopInfo",
        data() {
            return {
                show:true,
                goods:this.$route.params.goodsInfo ||JSON.parse(localStorage.getItem('goods')),
                bannerImg:[
                    require('../../assets/images/no.png'),
                    require('../../assets/images/no.png')
                ],
                topFlag:false
            }
        },
        components:{
            EaseBuy,
            Coupon,
            Recomment,
            ShopBottom
        },
        methods:{
            topScroll() {
                let topHeight=this.$refs.top.offsetHeight;
                window.onscroll=() =>{
                    if(document.documentElement.scrollTop>=10){
                        this.topFlag=true;
                    }else{
                        this.topFlag=false;
                    }
                }
            },
            isGoods() {
                if(this.goods==undefined){
                    return false;
                }else{
                    return true;
                }
            },
            //add cart callback
            animateBall() {
                this.$refs.ball.style.display='block';
                this.$refs.ball.addEventListener('animationend',() =>{
                    console.log(111);
                    this.$refs.ball.style.display="none";
                },false)
            }
        },
        mounted() {
            this.topScroll();
        }
    }
</script>

<style lang="less" scoped>
    .shopinfo{
        width:100%;
        height:auto;
        .navbar{
            position:fixed;
            left:0;
            top:0;
            width:100%;
            height:40px;
            display:flex;
            align-items: center;
            padding:0 10px;
            z-index:55555;
            >div:nth-child(1),div:nth-child(3){
                width:30px;
                height:30px;
                border-radius:50%;
                background-color:rgba(0,0,0,.65);
                display:flex;
                justify-content: center;
                align-items: center;
                color:white;
            }
            >div:nth-child(1).active{
                background-color:white;
                color:black;
            }
            >div:nth-child(3).active{
                color:black;
                background-color:white;
            }
            >div:nth-child(2){
                height:100%;
                flex:1;
                display:flex;
                justify-content: center;
                align-items: center;
                div{
                    height:100%;
                    flex:1;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    span{
                        color:black;
                        margin:0 5px;
                        font-size:16px;
                    }
                }
            }
        }
        .navbar.active{
            background-color:white;
        }
        .banner{
            width:375px;
            height:375px;
            img{
                display:block;
                width:100%;
                height:375px;
            }
        }
        .des{
            background-color:white;
            padding:0 10px;
            >div:nth-child(1){
                display:flex;
                justify-content: space-between;
                div:nth-child(1){
                    display:flex;
                    align-items: center;
                    span{
                        color:red;
                        font-size:22px;
                        font-weight:bold;
                    }
                }
                div:nth-child(2){
                    display:flex;
                    span{
                        margin:0 5px;
                        .van-icon{
                            display:block;
                            text-align:center;
                        }
                    }
                }
            }
            >div:nth-child(2){
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size:16px;
                margin:5px 0;
            }
            
        }
        .ball{
            position:fixed;
            left:50%;
            top:50%;
            width:30px;
            height:30px;
            border-radius:50%;
            background-color:red;
            transform:translate(-50%,-50%);
            animation: ball 1.5s;
            display:none;
        }
    }
    @keyframes ball{
        0%{
            opacity:1;
            top:50%
        }
        30%{
            opacity:1;
            top:55%
        }
        60%{
            top:50%;
            left:50%;
            opacity:1;
        }
        100%{
            top:95%;
            left:34%;
            opacity:0.5;
        }
    }
</style>