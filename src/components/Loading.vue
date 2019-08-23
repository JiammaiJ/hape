<template>
    <div class="loading">
        <div class="spinner">
		  <div class="dot1"></div>
		  <div class="dot2"></div>
		</div>
    </div>
</template>

<script>
    export default {
        name:'Loading',
        data() {
            return {}
        }
    }
</script>

<style  lang="less" scoped>
    .loading{
        position:absolute;
        left:0;
        top:0;
        bottom:0;
        right:0;
        z-index:10000;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .spinner {
        width: 90px;
        height: 90px;
        position:relative;
        text-align: center;
        animation: rotate 2.0s infinite linear;
    }
    .dot1, .dot2 {
        width: 60%;
        height: 60%;
        display: inline-block;
        position: absolute;
        top: 0;
        background-color: #FFAFC9;
        border-radius: 100%;
        animation: bounce 2.0s infinite ease-in-out;
    }
    .dot2 {
        top: auto;
        bottom: 0px;
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }
    @keyframes rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}
 
    @keyframes bounce {
    0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
    }
</style>