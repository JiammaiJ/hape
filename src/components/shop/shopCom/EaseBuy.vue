<template>
    <div class="easebuy" >
        <div @click="show=!show">
            <div><van-icon name="gem" />放心购~送运费险~闪电退款~急速审核</div>
            <div>· · · </div>
        </div>
        <van-popup 
            v-model="show"
            position="bottom"
        >
            <div class="pop">
                <div><van-icon name="cross" @click="show=!show"/></div>
                <div>
                    <h3>放心购</h3>
                    <p>家贫，无从致书以观，每假借于藏书之家，手自笔录，计日以还。天大寒，砚冰坚，手指不可屈伸，弗之怠。录毕，走送之，不敢稍逾约。</p>
                </div>
                <div>
                    <h3>送运费险</h3>
                    <p>山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来不白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？</p>
                </div>
                <div>
                    <h3>闪电退款</h3>
                    <p>予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？</p>
                </div>
                <div @click="show=!show"><button>确定</button></div>
            </div>    
        </van-popup>
    </div>
</template>

<script>
    export default {
        name:'EaseBuy',
        data(){
            return {
                show:false
            }
        }
    }
</script>

<style lang="less" scoped>
    .easebuy{
        width:100%;
        height:30px;
        background-color:#FBF0FD;
        padding:0 10px;
        >div:nth-child(1){
            display:flex;
            >div{
                color:#662D99;
            }
            >div:nth-child(1){
                flex:1;
                display:flex;
                align-items: center;
                font-size:15px;
            }
            >div:nth-child(2){
                width:50px;
                line-height:30px;
                text-align:center;
            }
        }
    }
    .pop{
        >div:nth-child(1){
            height:45px;
            border-bottom:1px solid #cccccc;
            display:flex;
            flex-direction: row-reverse;
            .van-icon{
                width:50px;
                font-size:20px;
                line-height:45px;
                text-align:center;
            }
        }
        >div{
            padding:0 10px;
        }
        button{
            display:block;
            width:100%;
            height:45px;
            text-align:center;
            background: linear-gradient(to right,#ffd01e,#ff8917);
            border-radius:20px;
        }
    }
</style>