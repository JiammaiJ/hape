<template>
    <div class="recommend">
         <div class="content">
            <div><img src="../../../assets/images/recommend.png"></div>
            <div class="item"
                v-for="(item,index) in data"
                :key="index" 
            >
            <div>
                <img :src="item.img">
            </div>
            <div>
                <span>{{item.des}}</span>
            </div>
            <div>
                <span>￥{{item.pri}}</span>
                <span>找相似</span>
            </div>
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        name:'Recomment',
        data() {
            return {
                 data:[
                    {img:require('../../../assets/images/s1.webp'),des:'格米莱（GEMILAI）半自动意式咖啡机家用 黑色',pri:230,id:1},
                    {img:require('../../../assets/images/s2.webp'),des:'金士顿(Kingston) DDR4 2666 8GB 笔记本内存 骇客神条 Impact系列 ',pri:888,id:2},
                    {img:require('../../../assets/images/s3.webp'),des:'海氏（Hauswirt）HC71 咖啡机家用小型 全半自动意式商用蒸汽打奶泡',pri:189,id:3},
                    {img:require('../../../assets/images/s4.webp'),des:'华迅仕（Fxunshi） 全自动意式咖啡机家用咖啡壶小型商用奶泡机现磨现煮咖啡 红色款',pri:299,id:4}
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
.content{
                display:flex;
                flex-wrap:wrap;
                align-content: center;
                justify-content: space-between;
                .item{
                    margin-bottom:10px;
                    padding-bottom:15px;
                    width:48%;
                    height:auto;
                    border:1px solid #cccccc;
                    background-color:white;
                    div:nth-child(1){
                        display:flex;
                        width:100%;
                        img{
                            width:100%;
                            background:white;
                        }
                    }
                    div:nth-child(2){
                        padding:0 3px;
                        span{
                            text-overflow: -o-ellipsis-lastline;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    }
                    div:nth-child(3){
                        display:flex;
                        justify-content: space-between;
                        padding:0 10px;
                        span:nth-child(1){
                            color:red;
                        }
                        span:nth-child(2){
                            border:1px solid #cccccc;
                        }
                    }
                }
            }
</style>