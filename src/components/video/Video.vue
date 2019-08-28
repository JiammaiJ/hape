<template>
    <div class="video">
        <!-- 顶部 fixed-->
        <div class="videobar">
            <VideoHeader />
            <div class="top">
                <div>
                    <van-tabs 
                        v-model="tabActive"
                        @click="tabClick"
                    >
                        <van-tab 
                            v-for="(item,index) in tabsList"
                            :key="index"
                            :title="item.tab">
                            </van-tab>
                    </van-tabs>
                </div>
                <div><van-icon name="arrow-down" @click="show=!show"/></div>
            </div>
            <BScroll2>
                <div class="tabpage">
                    <span>推荐</span>
                    <span v-for="(item,index) in tabPageList" :key="index">{{item}}</span>
                </div>
            </BScroll2>
        </div>
        <!-- Popup -->
        <van-popup 
            v-model="show"
            position="top"
        >
            <div class="popcontent">
                <div v-for="(item,index) in tabsList" 
                    :key="index" 
                    :class="index===tabActive?'popborder':''"
                    @tap="tabActive=index"
                ><a @tap="getTab">{{item.tab}}</a></div>
            </div>
            <div class="popclose"><van-icon name="arrow-up" @click="show=!show"/></div>
        </van-popup>
        <div class="videolist">
            <VideoList />
        </div>
    </div>
</template>

<script>
    import BScroll2 from '../BScroll2';
    import VideoList from './VideoList';
    import VideoHeader from './VideoBar';
    export default {
        name:'Video',
        data() {
            return {
                show:false,
                tabActive:1,
                tabsList:[
                   {tab:"首页"},{tab:"动画"},{tab:"番剧"},{tab:"国创"},{tab:"音乐"},{tab:"舞蹈"},
                   {tab:"游戏"},{tab:"科技"},{tab:"数码"},{tab:"生活"},{tab:"鬼畜"},{tab:"时尚"}
               ],
               tabPageList:[],
            }
        }, 
        components:{
            BScroll2,
            VideoList,
            VideoHeader
        },
        methods:{
            tabClick(name,title) {
                if(name===0){
                    this.$router.push('/home')
                    return false;
                }
                this.axios.get('/mock/tab'+name)
                .then(res => {
                    if(res.status===200){
                        this.tabPageList=res.data.data.data;
                        this.$nextTick(() =>{
                            this.scrollTabpage();
                        })
                    }
                },err => {
                    if(err){
                        this.$toast.fail({
                            message:'暂无数据',
                            duration:1000
                        });
                    };
                })
            },
            scrollTabpage() {
                let e=document.querySelectorAll('.tabpage span');
                console.log(e);
                let sum=0;
                for(let i=0;i<e.length;i++){
                    let w=e[i].offsetWidth;
                    sum+=w; 
                }
                console.log(sum);
                document.querySelector('.tabpage').style.width=sum+30+'px';
            },
            initTab() {
                this.axios.get('/mock/tab'+this.tabActive).then(res =>{
                    if(res.status===200){
                        this.tabPageList=res.data.data.data;
                        this.$nextTick(() =>{
                            this.scrollTabpage();
                        })
                    }
                },err =>{
                    this.$toast.fail({
                        message:'暂无数据',
                        duration:1000
                    })
                })
            },
            getTab() {
               this.$nextTick(() =>{
                   if(this.tabActive===0){
                       this.$router.push('/home');
                       return false;
                   }else {
                       this.initTab();
                   }
               })
            }
        },
        directives:{
            
        },
        mounted() {
            this.initTab();
        }
    }
</script>

<style lang="less">
.van-overlay{
    background-color:white;
}
.popborder{
    border-bottom:3px solid #FF4444;  
    >a{
        color:#FFAFC9 !important;
    }
}
    .video{
        width:100%;
        height:100%;
        overflow:hidden;
        .videobar{
            background-color:#ffffff;
            padding:10px;
            >div:nth-child(2){
                position:relative;
                width:100%;
                height:50px;
                >div:nth-child(1){
                    margin-right:60px;
                }
                >div:nth-child(2){
                    position:absolute;
                    right:0;
                    top:50%;
                    width:60px;
                    height:100%;
                    font-size:30px;
                    display:flex;
                    text-align:center;
                    z-index:555;
                    transform:translateY(-50%);
                    background-color:white;
                    .van-icon{
                        flex:1;
                    }
                }
            }
            .tabpage{
                width:100%;
                height:40px;
                span{
                    float:left;
                    padding:10px;
                    line-height:30px;
                    font-size:16px;
                    color:#757575;
                }
                span:nth-child(1){
                    color:#FFAFC9;
                    font-weight: bold;
                    font-size:15px;
                }
            }
        }
        .videolist{
            position:absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            padding-top:160px;
            z-index:-1;
        }
    }
    .popcontent{
        display:flex;
        flex-wrap: wrap;
        align-items:flex-start;
        div{
            width:20%;
            height:40px;
            text-align:center;
            line-height:40px;
            font-size:20px;
            a{
                color:#757575
            }
        }
    }
    .popclose{
        width:100%;
        height:40px;
        text-align:center;
        line-height:40px;
        .van-icon{
            font-size:23px;
        }
    }
</style>