<template>
    <div>
        <transition>
            <router-view @func="getMovieId">   
            </router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name:'Movie',
        data() {
            return{

            }
        },
        components:{
            
        },
        methods:{
            getMovieId(id) {
                this.$router.push({
                    name:'detail',
                    params:{
                        movieId:id
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>