<template>
    <div class="videoplay">
        <div>
            <VideoHeader />
        </div>
         <div>
            <div>
                <div><img src="../../assets/images/poster.jpg"></div>
                <div><header>av9527</header></div>
                <div><span>00:08:08</span><van-icon name="play-circle-o" /></div>
            </div>
            <div>
                <div><p>我要报警了,这动画简直在偷窥我的生活啊啊啊！！</p></div>
                <div><van-icon name="arrow-down" /></div>
            </div>
            <div>
                <span>砰砰砰</span>
                <span>45.0万次观看</span>
                <span>1.3万弹幕</span>
                <span>8-28</span>
            </div>
            <div>
                <div>
                    <div><van-icon name="like-o" />收藏</div>
                    <div><van-icon name="like-o" />缓存</div>
                    <div><van-icon name="like-o" />分享</div>
                </div>
                <div>
                    <div><van-icon name="like-o" />评论</div>
                </div>
            </div>
        </div>
        <VideoList />
    </div>
</template>

<script>
    import VideoHeader from './VideoBar';
    import VideoList from './VideoList'
    export default {
        name:'VideoPlay',
        data() {
            return {}
        },
        components:{
            VideoHeader,
            VideoList
        },
        methods:{}
    }
</script>

<style lang="less" scoped>
    .videoplay{
        >div:nth-child(1){
            position:fixed;
            left:0;
            top:0;
            padding:10px;
            background-color:#ffffff;
            z-index:55555;
        }
        >div:nth-child(2){
            padding-top:70px;
            background-color: white;
            >div:nth-child(1){
                position:relative;
                height:211px;
                div:nth-child(1){
                    height:100%;
                    img{
                        display:block;
                        width:100%;
                        height:100%;
                    }
                }
                div:nth-child(2){
                    position:absolute;
                    left:0;
                    top:0;
                    display:flex;
                    width:100%;
                    padding-top:10px;
                    header{
                        flex:1;
                        color:white;
                        font-size:18px;
                        text-align:center;
                    }
                }
                div:nth-child(3){
                    position:absolute;
                    left:0;
                    bottom:0;
                    width:100%;
                    display:flex;
                    height:40px;
                    align-items: center;
                    justify-content: space-between;
                    padding:0 20px;
                    >span{
                        color:white;
                        font-size:16px;
                        padding:3px;
                        border:1px solid #cccccc;
                        background-color:rgb(208,206,205,.3);
                    }
                    >.van-icon{
                        color:white;
                        font-size:35px;
                    }
                }
            }
            >div:nth-child(2){
                display:flex;
                padding:10px;
                padding-bottom:0;
                align-items: center;
                justify-content: center;
                div:nth-child(1){
                    flex:1;
                    p{
                        margin:0;
                        padding:0;
                        color:black;
                        font-size:16px;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        line-clamp: 1;
                        -webkit-box-orient: vertical;
                    }
                }
                div:nth-child(2){
                    width:50px;
                    text-align:center;
                    font-size:18px;
                }
            }
            >div:nth-child(3){
                display:flex;
                padding:0 10px;
                span{
                    color:#B2B2B2;
                    margin-right:5px;
                }
                span:nth-child(1){
                    color:black;
                    margin-right:10px;
                }
            }
            >div:nth-child(4){
                display:flex;
                padding:0 15px;
                div:nth-child(1){
                    display:flex;
                    div{
                        width:43px;
                        height:20px;
                        margin-right:10px;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                >div:nth-child(2){
                    flex:1;
                    >div{
                        width:100%;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
        }
    }
</style>