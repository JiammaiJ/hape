<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BS from 'better-scroll';
    export default {
        name:"BScroll2",
        data() {
            return {}
        },
        methods:{
            initScroll() {
                let wrapper=document.querySelector('.wrapper');
                let bs=new BS(wrapper,{
                    scrollX:true
                })
            }
        },
        mounted() {
            this.initScroll();
        },
    }
</script>

<style lang="less" scoped>
    .wrapper{
        width:100%;
        height:100%;
    }
</style>