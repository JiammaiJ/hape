<template>
    <div class="nowfire">
        <Loading v-if="!isloading"/>
        <BScroll v-if="isloading">
            <div class="content">
                <div 
                    v-for="(item,index) in movieList"
                    :key="index"
                >
                    <div class="movieItem">
                        <div>
                            <img :src="item.img | imgFormat('128.180')" :alt="item.nm"
                                 @tap="goDetail(item.id)"   
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
    import BScroll from '../BScroll';
    import Header from '../Header';
    import Loading from '../Loading';
    export default {
        name:'NowFire',
        data() {
            return {
                movieList:[],
                tit:'最近热映',
                isloading:false
            }
        },
        components:{
            BScroll,
            Header,
            Loading
        },
        methods:{
            getMovieInfo() {
                this.axios.get('/api/movieOnInfoList?cityId=59').then(res => {
                    this.movieList=res.data.data.movieList;
                    this.$nextTick(() => {
                        setTimeout(() => {
                            this.isloading=!this.isloading;
                        },1200)
                    })
                })
            },
            go() {
                this.$router.go(-1);
            },
            goDetail(movieId) {
                //this.$emit('func',movieId);
                this.$router.push({
                    name:'detail',
                    params:{
                        movieId:movieId
                    }
                });
                localStorage.setItem('movieId',JSON.stringify(movieId));
            }
        },
        filters:{
            imgFormat: (data,str) =>{
                return data.replace(/w\.h/,str);
            }            
        },
        created() {
            this.$emit('func2',this.tit);
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