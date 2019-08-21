<template>
    <div class="movieComment">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="comment">全部评论</div>
                    <div class="commentList"
                        v-for="(item,index) in commentList"
                        :key="index"
                    >
                        <div><img src="../../assets/images/nav2.png"></div>
                        <div>
                            <p>匿名</p>
                            <p>成都  {{item.time}}</p>
                            <p>{{item.comment}}</p>
                        </div>
                    </div>
            </van-pull-refresh>
    </div>
</template>

<script>
    import BScroll from '../BScroll'
import { setTimeout } from 'timers';
    export default {
        name:'MovieComment',
        data() {
            return {
                tit:'电影评论',
                isLoading: false,
                commentList:[]
            }
        },
        components:{
            BScroll
        },
        methods:{
            getComment() {
                let comment = JSON.parse(localStorage.getItem('userComment'));
                this.commentList=comment;
            },
            onRefresh() {
                setTimeout(() => {
                    this.isLoading=false;
                },1000000)
            }
        },
        created() {
            this.$emit('func2',this.tit);
            this.getComment();
        }
    }
</script>

<style lang="less" scoped>
  
    .movieComment{
        padding:10px;
        padding-top:60px;
        width:100%;
        height:100%;
        overflow:hidden;
        div.comment{
            color:#308FDF;
            font-size:20px;
            text-indent:.5em;
            border-left:3px solid #308FDF;
        }
        div.commentList{
            margin-top:10px;
            display:flex;
            >div:nth-child(1){
                width:50px;
                height:50px;
                margin:0 10px;
                img{
                    display:block;
                    width:100%;
                    height:100%;
                    border-radius:50%;
                }
            }
            >div:nth-child(2){
                flex:1;
                display:flex;
                flex-direction: column;
                border-bottom:1px solid #FFAFC9;
                padding-bottom:10px;
                >p{
                    margin:0;
                    padding:0;
                }
                p:nth-child(1){
                    color:#7A7A7A;
                    font-size:22px;
                }
                p:nth-child(2){
                    color:#7A7A7A;
                    font-size:16px;
                }
                p:nth-child(3){
                    font-size:20px;
                    color:black;
                }
            }
        }
    }
</style>