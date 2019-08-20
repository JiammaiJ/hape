<template>
    <div class="wrapper" ref="wrapper">
        <!-- 插槽 -->
        <slot></slot>
    </div>    
</template>

<script>
    import betterScroll from 'better-scroll';
    export default {
        name:'BScroll',
        data() {
            return {}
        },
        props:{
            scrollStart:{
                // callback 相当于是回调函数,回调父组件touchEnd绑定的方法
                type:Function,
                default:function(){}
            }
        },
        methods:{},
        mounted() {
            let scroll = new betterScroll(this.$refs.wrapper,{probeType: 1,});
            // better-scroll要调用滚动方法,要配置probeType 1:滚动节流,2:不节流
            scroll.on('scroll',(e) =>{
                // 传值方式1：emit发射参数过去,父组件执行scroll匹配的方法
                this.$emit('scroll',e)
            })
            scroll.on('scrollStart',(e) =>{
                this.scrollStart(e);
            })
        }
    }
</script>

<style lang="less" scoped>
    .wrapper{
        width:100%;
        height:100%;
    }
</style>