<template>
    <div>detail </div>  
</template>

<script>
    export default {
        name:'Detail',
        data() {
            return {}
        },
        methods:{
            getMovieDetail() {
                let movieId=this.$route.params.movieId;
                this.axios.get('/api/detailmovie?movieId='+movieId).then(res =>{
                    console.log(res);
                })
            }
        },
        mounted() {
            this.getMovieDetail();
        }
    }
</script>

<style lang="less" scoped>

</style>