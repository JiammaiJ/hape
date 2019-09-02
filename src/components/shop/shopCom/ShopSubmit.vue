<template>
    <div>
        <van-submit-bar
            :price="$store.getters.getAllPri"
            button-text="提交订单"
            @submit="show=!show"
        />
        <van-popup 
            v-model="show"
            position="bottom"
        >
            <div class="address">
                <van-address-list
                    v-model="chosenAddressId"
                    :list="list"
                    :disabled-list="disabledList"
                    disabled-text="以下地址超出配送范围"
                    @add="onAdd"
                    @edit="onEdit"
                />
            </div>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name:'ShopSubmit',
        data() {
            return {
                show:false,
                chosenAddressId:'1',
                list:[
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    }
                ],
                disabledList:[
                    {
                        id: '2',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    }
                ]
            }
        },
        methods:{
            onAdd() {
                this.$toast({
                    message:'新增地址'
                })
            },
            onEdit() {
                this.$toast({
                    message:'修改地址'
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>