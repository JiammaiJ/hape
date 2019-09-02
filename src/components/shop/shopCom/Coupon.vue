<template>
    <div class="coupon">
        <div @click="show=!show">
            <div>优惠</div>
            <div>
                <span>满99减10</span>
                <span>满299减30</span>
                <span>满599减60</span>
            </div>
            <div>· · ·</div>
        </div>
        <van-popup v-model="show" position="bottom">
            <div>
               <h3 style="text-align:center;">醉翁亭记</h3>
               <p>环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺而泻出于两峰之间者，酿泉也。峰回路转，有亭翼然临于泉上者，醉翁亭也。作亭者谁？山之僧智仙也。名之者谁？太守自谓也。太守与客来饮于此，饮少辄醉，而年又最高，故自号曰醉翁也。醉翁之意不在酒，在乎山水之间也。山水之乐，得之心而寓之酒也。
若夫日出而林霏开，云归而岩穴暝，晦明变化者，山间之朝暮也。野芳发而幽香，佳木秀而繁阴，风霜高洁，水落而石出者，山间之四时也。朝而往，暮而归，四时之景不同，而乐亦无穷也。
至于负者歌于途，行者休于树，前者呼，后者应，伛偻提携，往来而不绝者，滁人游也。临溪而渔，溪深而鱼肥。酿泉为酒，泉香而酒洌；山肴野蔌，杂然而前陈者，太守宴也。宴酣之乐，非丝非竹，射者中，弈者胜，觥筹交错，起坐而喧哗者，众宾欢也。苍颜白发，颓然乎其间者，太守醉也。
已而夕阳在山，人影散乱，太守归而宾客从也。树林阴翳，鸣声上下，游人去而禽鸟乐也。然而禽鸟知山林之乐，而不知人之乐；人知从太守游而乐，而不知太守之乐其乐也。醉能同其乐，醒能述以文者，太守也。太守谓谁？庐陵欧阳修也。</p>
            </div>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name:'Coupon',
        data() {
            return {
                show:false,
                coupons:[
                    {
                        available: 1,
                        condition: '无使用门槛\n最多优惠12元',
                        reason: '',
                        value: 150,
                        name: '优惠券名称',
                        startAt: 1489104000,
                        endAt: 1514592000,
                        valueDesc: '1.5',
                        unitDesc: '元'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .coupon{
        padding:0 10px;
        height:40px;
        background-color:#FBF0FD;
        border-top:1px solid #cccccc;
        >div:nth-child(1){
            display:flex;
            div:nth-child(1){
                width:50px;
                line-height:40px;
                text-align:center;
            }
            div:nth-child(2){
                flex:1;
                display:flex;
                align-items: center;
                span{
                    margin:0 12px;
                    border-top:1px solid red;
                    border-bottom:1px solid red;
                    position:relative;
                    font-size:10px;
                }
                span::before{
                    content:'';
                    position:absolute;
                    left:-9px;
                    top:0;
                    width:10px;
                    height:100%;
                    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAMAAACpD3pbAAAAPFBMVEUAAAD////kOTzqaGr+9vb4zc32vL3sdXfnTE/mRUfxmpz87O3yn6HqZ2npXWDlQEP97e33xsf3xsbxl5nHV2NIAAAAAXRSTlMAQObYZgAAAJpJREFUOMvllEsSwiAQRMnjF8g/3v+uKhIrjhHK0l16B4+C7hlALS07qSyS2kVlKnHmCpqdNvwYwTdY6yKGX7AeKtb+jmN3jLuYMMEd5XYBUMZ6cO/BHHhr7ut6wizxHOhvM+kUT5S5I77ZsGWU1kbsExsmiSdMBVc3l9a0tJaDdR+CVcryWtRBFLXYkku1oae955Xnv5Y+j/UKs1MGwyraxf4AAAAASUVORK5CYII=);
                    background-size:cover;
                }
            }
            div:nth-child(3){
                width:50px;
                line-height:40px;
                text-align:center;
            }
        }
    }
</style>