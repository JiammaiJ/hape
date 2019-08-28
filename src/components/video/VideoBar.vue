<template>
    <div class="videoheader">
        <div>
            <div @tap="$router.push('/home')"><img src="../../assets/images/bicon1.png"></div>
            <div><van-icon name="search" /><input type="text" placeholder="卡布达"></div>
            <div><img src="../../assets/images/bicon2.png"></div>
            <div><button>下载App</button></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'VideoBar'
    }
</script>

<style lang="less" scoped>
    .videoheader{
         >div:nth-child(1){
            display:flex;
            align-items: center;
            justify-content: center;
            width:100%;
            height:50px;
            >div:nth-child(1){
                width:100px;
                img{
                    width:100%;
                }
            }
            >div:nth-child(2){
                position:relative;
                flex:1;
                .van-icon{
                    position:absolute;
                    left:5px;
                    top:50%;
                    transform:translateY(-50%);
                    font-size:20px;
                }
                input{
                    width:100%;
                    margin:0;
                    padding:0;
                    height:25px;
                    border-radius:12.5px;
                    padding-left:25px;
                }
            }
            >div:nth-child(3){
                width:30px;
                height:30px;
                margin:0 10px;
                img{
                    display:block;
                    width:100%;
                    height:100%;
                }
            }
            >div:nth-child(4){
                width:100px;
                height:35px;
                button{
                    display:block;
                    width:100%;
                    height:100%;
                    margin:0;
                    padding:0;
                    background-color:#FFAFC9;
                    color:white;
                }
            }
        }
    }
</style>