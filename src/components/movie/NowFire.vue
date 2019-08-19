<template>
    <div class="nowfire">
        <Header :tit="tit"/>
        <BScroll>
            <div class="content">
                <div 
                    v-for="(item,index) in movieList"
                    :key="index"
                >
                    <div class="movieItem">
                        <div>
                            <img :src="item.img | imgFormat('128.180')" :alt="item.nm"
                                 @tap="sendMovieId(item.id)"   
                            >
                        </div>
                        <div>
                            <h3>{{item.nm}}</h3>
                            <p>观众评<b>{{item.sc}}</b></p>
                            <p>主演：{{item.star}}</p>
                            <p>{{item.showInfo}}</p>
                        </div>
                        <div><mt-button type="danger">购票</mt-button></div>
                    </div>
                </div>
            </div>
        </BScroll>
    </div>
</template>>

<script>
    import BScroll from '../BScroll'
    import Header from '../Header'
    export default {
        name:'NowFire',
        data() {
            return {
                movieList:[],
                tit:'热映影片'
            }
        },
        components:{
            BScroll,
            Header
        },
        methods:{
            getMovieInfo() {
                this.axios.get('/api/movieOnInfoList?cityId=59').then(res => {
                    console.log(res.data.data.movieList);
                    this.movieList=res.data.data.movieList;
                })
            },
            go() {
                console.log(1);
                this.$router.go(-1);
            },
            sendMovieId(movieId) {
                this.$emit('func',movieId);
            }
        },
        filters:{
            imgFormat: (data,str) =>{
                return data.replace(/w\.h/,str);
            }            
        },
        created() {
            this.getMovieInfo();
        }
    }
</script>>

<style lang="less" scoped>
    .nowfire{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        overflow:hidden;
        .content{
            padding-top:50px;
            >div{
                padding:10px;
                border-bottom:1px solid #FFAFC9;
                .movieItem{
                    display:flex;
                    align-items: center;
                    div:nth-child(1){
                        width:64px;
                        height:90px;
                        img{
                            display:block;
                            width:100%;
                            height:100%;
                        }
                    }
                    div:nth-child(2){
                        flex:1;
                        margin-left:10px;
                        h3{
                            font-size:20px;
                        }
                        p{
                            margin:0;
                            padding:0;
                        }
                    }
                }
            }
        }
    }
</style>