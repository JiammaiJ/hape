<template>
    <div class="bottom">
        <van-goods-action>
            <van-goods-action-icon
                icon="chat-o"
                    ext="客服"
            />
            <van-goods-action-icon
                icon="shop-o"
                text="店铺"
            />
            <van-goods-action-icon
                icon="cart-o"
                text="购物车"
                :info="$store.getters.getAllCount  || 0"
            />
            <van-goods-action-button
                type="warning"
                text="加入购物车"
                @click="show=!show"
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="show=!show"
            />
        </van-goods-action>
        <van-popup
            v-model="show"
            position="bottom"
            :round="show"
        >
            <div class="content">
                <div>
                    <div><img :src="goods.img"></div>
                    <div>
                        <h3>￥{{goods.pri}}</h3>
                        <p>{{goods.des}}</p>
                        <p>剩余88888件</p>
                    </div>
                </div>
                <div>
                    <div>颜色</div>
                    <div>
                        <span
                            v-for="(item,index) in color"
                            :key="index"
                            @tap="colorActive=item"
                            :class="{active:colorActive==item?true:false}"
                        >
                            {{item}}
                        </span>
                    </div>
                </div>
                <div>
                    <div>尺码</div>
                    <div>
                        <span
                            v-for="(item,index) in size"
                            :key="index"
                            @tap="sizeActive=item"
                            :class="{active:sizeActive==item?true:false}"
                        >
                            {{item}}
                        </span>
                    </div>
                </div>
                <div>
                    <div>购买数量</div>
                    <div>
                        <mt-button type="primary" @click="reduce">-</mt-button>
                        <span>{{count}}</span>
                        <mt-button type="primary" @click="add">+</mt-button>
                    </div>
                </div>
                <div>
                    <button @click="addToCart">加入购物车</button>
                    <button @click="goCart">购买</button>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name:'ShopBottom',
        data() {
            return {
                show:false,
                colorActive:'天蓝色',
                sizeActive:'大',
                color:['天蓝色','黑色','白色'],
                size:['大','中','小'],
                count:1
            }
        },
        props:{
            goods:{
                type:Object,
                default:{}
            }
        },
        methods:{
            reduce() {
                if(this.count<=0){
                    return false;
                }else{
                    this.count--;
                }
            },
            add() {
                this.count++;
            },
            addToCart() {
                let obj={
                    goods:this.goods,
                    color:this.colorActive,
                    size:this.sizeActive,
                    count:this.count,
                    checked:true
                }
                this.$store.commit('AddGoods',obj);
                this.show=!this.show;
                this.$emit('ballCallback')
            },
            goCart() {
                let obj={
                    goods:this.goods,
                    color:this.colorActive,
                    size:this.sizeActive,
                    count:this.count,
                    checked:true
                };
                this.$store.commit('AddGoods',obj);
                this.$router.push('/shopcart');
            }   
        },
        mounted() {
          
        }
    }
</script>

<style lang="less" scoped>
    .bottom{
        position:fixed;
        left:0;
        bottom:0;
        .content{
            padding:10px;
            >div:nth-child(1){
                display:flex;
                align-items: center;
                >div:nth-child(1){
                    width:135px;
                    height:135px;
                    img{
                        display:block;
                        width:100%;
                        height:100%;
                    }
                }
                >div:nth-child(2){
                    flex:1;
                    display:flex;
                    flex-direction: column;
                    h3{
                        color:red;
                    }
                }   
            }
            >div:nth-child(2),>div:nth-child(3){
                >div:nth-child(1){
                    font-size:18px;
                    border-bottom:1px solid #cccccc;
                }
                >div:nth-child(2){
                    display:flex;
                    padding:5px 0;
                    span{
                        width:50px;
                        height:30px;
                        border:1px solid #cccccc;
                        margin:0 5px;
                        line-height:30px;
                        text-align:center;
                        background-color:#f7f8fa;
                    }
                    span.active{
                        background-color:#FFECEC;
                    }
                }
            }
            >div:nth-child(4){
                display:flex;
                align-items: center;
                div:nth-child(1){
                    width:100px;
                    font-size:18px;
                }
                div:nth-child(2){
                    flex:1;
                    display:flex;
                    .mint-button{
                        width:60px;
                        height:40px;
                        font-size:25px;
                    }
                    >span{
                        width:40px;
                        height:40p;
                        font-size:25px;
                        line-height:40px;
                        text-align:center
                    }
                }
            }
            >div:nth-child(5){
                display:flex;
                padding-top:5px;
                button:nth-child(1){
                    width:50%;
                    height:35px;
                    border-right:none;
                    border-top-left-radius:17px;                    
                    border-bottom-left-radius:17px;
                    background:linear-gradient(to right, #ffd01e, #ff8917);
                    color:white;
                }
                button:nth-child(2){
                    width:50%;
                    height:35px;
                    border-left:none;
                    border-top-right-radius:17px;                    
                    border-bottom-right-radius:17px;
                    background:linear-gradient(to right, #ff6034, #ee0a24);
                    color:white;
                }
            }
        }
    }
</style>