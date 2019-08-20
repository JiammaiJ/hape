<template>
    <div>
        <Header><h3>{{tit}}</h3></Header>
            <transition mode="out-in">
                <keep-alive>
                    <router-view
                    v-if="$route.meta.keepAlive"
                    @func="getMovieId" 
                    @func2="changeTit">   
                    </router-view>
                </keep-alive>
            </transition>
            <transition mode="out-in">
                    <router-view
                    v-if="!$route.meta.keepAlive"
                    @func2="changeTit">   
                    </router-view>
            </transition>
    </div>
</template>

<script>
    import Header from '../Header'
    export default {
        name:'Movie',
        data() {
            return{
                tit:'电影',
            }
        },
        components:{
            Header
        },
        methods:{
            getMovieId(id) {
                this.$router.push({
                    name:'detail',
                    params:{
                        movieId:id
                    }
                })
            },
            changeTit(t) {
                this.tit=t;
            }
        }
    }
</script>

<style lang="less" scoped>
    .v-enter{
        transform:translateX(100%);
    }
    .v-leave-to{
        transform:translateX(-100%);
    }
    .v-enter-active,.v-leave-active{
        transition:all .5s linear;
    }
</style>