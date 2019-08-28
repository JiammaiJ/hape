<template>
    <div class="videoplay">
        <BScroll>
            <div class="content">
                <div>
                    <div>HOT</div>
                    <div><van-icon name="bar-chart-o" />排行榜<van-icon name="arrow" /></div>
                </div>
                <div>
                    <div class="item"
                         v-for="(item,index) in list"
                         :key="index"
                    >
                        <div @tap="$router.push('/videoplay')">
                            <img :src="item.img">
                            <div>
                                <div><van-icon name="play-circle-o" />292.2万</div>
                                <div><van-icon name="comment-o" />1.7万</div>
                            </div>
                        </div>
                        <div>{{item.des}}</div>
                    </div>
                </div>
            </div>
        </BScroll>
    </div>
</template>

<script>
    import BScroll from '../BScroll';
    export default {
        name:'VideoList',
        data() {
            return {
                list:[
                    {img:require('@/assets/images/v1.webp'),des:'沙雕至极！这才是今年暑假最搞笑的动画！'},
                    {img:require('@/assets/images/v2.webp'),des:'【灯泡动画】炎炎夏日，既然买不起空调，那么就去抢一个吧'},
                    {img:require('@/assets/images/v3.webp'),des:'【明日方舟】明日方舟&MEMEME 您好，您订的老婆到了，签收一下？！'},
                    {img:require('@/assets/images/v4.webp'),des:'前方有毒！进来就出不去啦！！【猛男必看】'},
                    {img:require('@/assets/images/v5.webp'),des:'我终将青春还给了她 连同指尖弹出的盛夏'},
                    {img:require('@/assets/images/v6.webp'),des:'【Fate/stay night [Heavens Feel]】迷失之蝶——只属于你的正义的伙伴'},
                    {img:require('@/assets/images/v7.webp'),des:'前方高燃！爆肝60小时只为带来最流畅的体验（鬼灭之刃60帧预警）'},
                    {img:require('@/assets/images/v8.webp'),des:'【明日方舟/MMD】整合运动 塔露拉◆赐予你们毁灭【手机竖屏】'}
                ]
            }
        },
        components:{
            BScroll
        },
        methods:{},
    }
</script>

<style lang="less" scoped>
    .videoplay{
        width:100%;
        height:100%;
        .content{
            padding:10px;
            >div:nth-child(1){
                width:100%;
                display:flex;
                justify-content: space-between;
                >div:nth-child(1){
                    font-size:18px;
                }
                >div:nth-child(2){
                    color:orange;
                    font-size:16px;
                    display:flex;
                    align-items: center;
                    .van-icon{
                        margin:0 5px;
                    }
                }
            }
            >div:nth-child(2){
                display:flex;
                flex-wrap: wrap;
                width:100%;
                height:auto;
                padding-top:10px;
                .item{
                    width:50%;
                    margin-bottom:10px;
                    >div:nth-child(1){
                        display:flex;
                        justify-content: center;
                        width:100%;
                        position:relative;
                        img{
                            display:block;
                            width:95%;
                            border-radius:10px;
                        }
                        >div{
                            position:absolute;
                            left:0;
                            bottom:0;
                            color:white;
                            display:flex;
                            justify-content: space-between;
                            width:100%;
                            padding:0 12%;
                        }
                    }
                    >div:nth-child(2){
                        padding:0 5px;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
    }
</style>