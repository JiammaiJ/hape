<template>
    <div class="commentbar">
        <div>
            <div>
                <span class="mui-icon mui-icon-compose"
                      @click="showPopup"
                >评一下</span></div>
            <router-link to="/movie/comment" tag="div"><span class="mui-icon mui-icon-chat">1.7万</span></router-link>
            <div><span class="mui-icon mui-icon-redo" @click="showPop2"></span></div>
        </div>
        <van-popup v-model="show1"
                   position="bottom"
                   round
                   :duration="duration"
        >
            <div class="userComment">
                <div><textarea v-model="userComment" v-focus></textarea></div>
                <div>
                    <van-icon name="photo-o" />
                    <van-icon name="scan" />
                    <div><button @tap="sendComment">发送</button></div>
                </div>
                <div @tap.once="getLocation">
                    <van-icon name="location-o" />{{location.nm}}
                </div>
            </div>
        </van-popup>
        <van-popup
            v-model="show2"
            position="bottom"
            round
            :duration="duration"
        >
            <div class="share">
                <div class="wrapper">
                    <ul class="ul">
                        <li v-for="(item,index) in icon" :key="index">
                            <img :src="item">
                        </li>
                    </ul>
                </div>
                <div>
                    <button @click="show2=!show2">取消</button>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import BS from 'better-scroll';
    export default {
        name:'CommentBar',
        data() {
            return {
              show1:false,
              show2:false,
              duration:0.4,
              userComment:'',
              location:{nm:'点击获取位置'},
              icon:[
                  require('@/assets/images/iicon1.png'),
                  require('@/assets/images/iicon2.png'),
                  require('@/assets/images/iicon3.png'),
                  require('@/assets/images/iicon4.png'),
                  require('@/assets/images/iicon5.png'),
                  require('@/assets/images/iicon6.png')
              ]
            }
        },
        methods:{
            showPopup() {
                this.show1 = !this.show1;
            },
            showPop2() {
                this.show2=!this.show2;
                this.$nextTick(() =>{
                    this.transverse();
                })
            },
            sendComment() {
                if(this.userComment.trim().length>0){
                    let userComment=JSON.parse(localStorage.getItem('userComment')) || [];
                    let obj={
                        comment:this.userComment,
                        time:new Date()
                    };
                    userComment.unshift(obj);
                    localStorage.setItem('userComment',JSON.stringify(userComment));
                    this.showPopup();
                    this.$toast.success('提交成功');
                    this.userComment='';
                }else{
                    this.$toast.fail('内容不能为空');
                }
            },
            getLocation() {
                this.axios.get('/api/getLocation').then(res =>{
                    if(res.status===200){
                        console.log(res.data.data);
                        this.location=res.data.data;
                        this.$nextTick(() =>{
                            this.$toast.success({
                                message:'定位成功',
                                duration:1000
                            });
                        })
                    }else{
                        this.$toast.fail({
                            message:'定位失败',
                            duration:1000
                        });
                    }
                })
            },
            transverse() {
                let ul=document.querySelector('.ul');
                let li=ul.querySelectorAll('li');
                let wrapper=document.querySelector('.wrapper');
                ul.style.width=(li.length+1)*li[0].offsetWidth+'px';
                this.$nextTick(() =>{
                    let bs = new BS(wrapper,{
                        scrollX:true,
                        eventPassthrough: "vertical"
                    })
                })
            }
        },
        directives:{
            focus:{
                bind:(el) =>{
                    // 指令的生命周期钩子,bind在刚绑定的时候,此时浏览器还在解析DOM树,在这里操作DOM不会生效,
                    // 但是可以操作元素的样式
                    el.focus();
                },
                inserted:(el) =>{
                    // 指令操作DOM执行脚本时,放在inserted插入父节点时才会生效
                    el.focus();
                }
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    .commentbar{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        >div:nth-child(1){
            display:flex;
            align-items: center;
            justify-content: center;
            width:100%;
            height:50px;
            border:1px solid #FFAFC9;
            border-radius:10px;
            box-shadow:0 0 15px #FFAFC9;
            background-color:#c5f0f5;
            div:nth-child(1){
                flex:1;
                text-indent:1em;
                span{
                    font-size:18px;
                }
            }
            div:nth-child(2){
                width:100px;
                text-align:center;
                span{
                    font-size:18px;
                    color:#FFAFC9;
                }
            }
            div:nth-child(3){
                width:50px;
                text-align:center;
                span{
                    font-size:18px;
                }
            }
        }
        .userComment{
            padding:10px;
            box-shadow:0 0 15px inset #FFAFC9;
            >div:nth-child(1){
                textarea{
                    margin:0;
                    background-color:#e6e6e6;
                }
            }
            >div:nth-child(2){
                display:flex;
                font-size:24px;
                align-items: center;
                justify-content: center;
                padding-bottom:10px;
                border-bottom:1px solid #cccccc;
                text-align:center;
                .van-icon{
                    width:50px;
                }
                >div{
                    flex:1;
                    button{
                        float:right;
                    }
                }
            }
            >div:nth-child(3){
                display:flex;
                align-items: center;
                padding:10px 0;
                .van-icon{
                    font-size:23px;
                }
            }
        }
        .share{
            >div:nth-child(1){
                width:100%;
                ul{
                   margin:0;
                   padding:0;
                   list-style:none;
                   display:flex;
                   li{
                       width:75px;
                       height:75px;
                   } 
                }
            }
            >div:nth-child(2){
                display:flex;
                padding:10px;
                height:50px;
                button{
                    flex:1;
                    border:none;
                    border-top:1px solid #FFAFC9;
                }
            }
        }
    }
</style>