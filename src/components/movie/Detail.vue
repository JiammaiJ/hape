<template>
    <div class="detail">
        <div v-for="(item,index) in movieInfo" :key="index">
            <div class="movieInfo">
                <div><img :src="item.img | imgFormat('128.180')"></div>
                <div><img :src="item.img | imgFormat('128.180')"></div>
                <div>
                    <h3>{{item.nm}}</h3>
                    <p>{{item.enm}}</p>
                    <p>{{item.sc}}</p>
                    <p>{{item.cat}}</p>
                    <p>{{item.src}} / {{item.dur}}</p>
                    <p>{{item.pubDesc}}</p>
                </div>
            </div>
            <div :class="{movieIntroduce:true,openall:openFlag}" @tap="openFlag=!openFlag">
                {{item.dra}}
            </div>
            <div class="movieImg" ref="wrapper"> 
                <ul>
                    <li
                        v-for="(item,index) in item.photos"
                        :key="index"
                    ><img :src="item | imgFormat('128.180')"></li>
                </ul>
            </div>
        </div>
        
    </div>  
</template>

<script>
    import { Toast } from 'mint-ui';
    import betterScroll from 'better-scroll';
    export default {
        name:'Detail',
        data() {
            return {
                tit:'影片详情',
                movieInfo:[],
                movieId:this.$route.params.movieId,
                openFlag:true
            }
        },
        components:{
           
        },
        methods:{
            getMovieDetail() {
                this.axios.get('/api/detailmovie?movieId=1170287').then(res =>{
                    
                    if(res.data.msg==='ok'&&res.data.status===0&&res.data.data.detailMovie){
                        console.log(res.data.data.detailMovie);
                        this.movieInfo.push(res.data.data.detailMovie);
                        this.$nextTick(() =>{
                            this.scrollInit();
                        })
                    }else{
                         Toast({
                            message:"莫得数据",
                            className:"toast",
                            duration:"3000"
                    });
                    }
                })
            },
            scrollInit() {
                let bs=new betterScroll(document.querySelector('.movieImg'),{scrollX:true})
                let liWidth=document.querySelector('.movieImg li')
                console.log(liWidth)
            }
        },
        filters:{
            imgFormat:(dataStr,str) =>{
                return dataStr.replace(/w\.h/,str);
            }
        },
        created() {
            this.$emit('func2',this.tit);
            this.getMovieDetail();
        },
        mounted() {
            console.log(this.$route.params.movieId);
        }
    }
</script>

<style lang="less" scoped>
    .toast{
        background-color:#FFAFC9;
    }
    .detail{
        padding-top:50px;
        .movieInfo{
            position:relative;
            padding:10px;
            display:flex;
            align-items: center;
            width:100%;
            height:auto;
            div:nth-child(1){
                position:absolute;                
                left:0;
                top:0;
                width:100%;
                height:100%;
                filter:blur(15px);
                img{
                    display:block;
                    width:100%;
                    height:100%;
                }
            }
            div:nth-child(2){
                width:100px;
                height:145px;
                margin-right:15px;
                z-index:555;
                img{
                    width:100%;
                    height:100%;
                }
            }
            div:nth-child(3){
                flex:1;
                z-index:555;
                h3{
                    font-size:20px;
                    color:#ffffff;
                }
                p{
                    color:#cccccc;
                    padding:0;
                    margin:0;
                }
            }
        }
        .movieIntroduce{
            padding:15px;
            padding-bottom:0;
            font-size:16px;
            line-height:20px;
            width:100%;
            text-overflow:ellipsis;
            overflow:hidden;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:3;
        }
        .movieIntroduce.openall{
            display:-webkit-box;
        }
        .movieImg{
            width:100%;
            height:200px;
            ul{
                margin:0;
                padding:0;
                list-style:none;
                li{
                    width:64px;
                    height:px;
                    float:left;
                    img{
                        display:block;
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
    }
</style>