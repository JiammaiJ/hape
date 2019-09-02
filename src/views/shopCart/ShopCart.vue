<template>
    <div class="cart">
        <Header :go="goHome">
            <h3>{{tit}}</h3>
        </Header>
        <div class="content">
            <div class="item"
                 v-for="(item,index) in $store.state.goods"
                 :key="index"
            >
                <div>
                    <van-switch
                        v-model="item.checked"
                        size="50px"
                        @change="onChange"
                    />
                </div>
                <div>
                    <van-card
                        :num="item.count"
                        tag="标签"
                        :price="item.goods.pri"
                        :desc="item.size+'   '+item.color"  
                        :title="item.goods.des"
                        :thumb="item.goods.img"
                        origin-price="8888"
                    />
                </div>
            </div>
        </div>
        <ShopSubmit />
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import ShopSubmit from '@/components/shop/shopCom/ShopSubmit.vue';
    export default {
        name:'ShopCart',
        data() {
            return {
                checked:true,
                tit:'购物车'
            }
        },
        components:{
            Header,
            ShopSubmit
        },
        methods:{
            onChange(c){
                console.log(c);
                this.$store.commit('CheckedChange');
            },
            goHome() {
                this.$router.push('/home')
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    .cart{
        >div.content{
            margin-top:50px;
            .item{
                display:flex;
                align-items:center;
                background-color:white;
                >div:nth-child(1){
                    width:60px;
                    display:flex;
                    justify-content: center;
                }
                >div:nth-child(2){
                    flex:1
                }
            }
        }
    }
</style>