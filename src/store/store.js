import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        goods: JSON.parse(localStorage.getItem('userGoods')) || []
    },
    mutations: {
        AddGoods(state, obj) {
            let flag = false;
            if (state.goods.length > 0) {
                for (let i = 0; i < state.goods.length; i++) {
                    console.log(state.goods[i].goods.id, obj.goods.id)
                    if (state.goods[i].goods.id == obj.goods.id && state.goods[i].color == obj.color && state.goods[i].size == obj.size) {
                        state.goods[i].count += obj.count;
                        flag = true;
                    }
                }
            }
            if (!flag) {
                state.goods.push(obj);
            }
            localStorage.setItem('userGoods', JSON.stringify(state.goods));
        },
        CheckedChange(state) {
            console.log(555);
            //state.goods[index].checked = !(state.goods[index].checked);
            //console.log(!state.goods[index].checked)
            localStorage.setItem('userGoods', JSON.stringify(state.goods));
            console.log(666);
        }
    },
    getters: {
        getAllCount(state) {
            if (state.goods.length > 0) {
                let c = 0;
                state.goods.forEach(item => {
                    c += item.count;
                })
                return c;
            } else {
                return false;
            }
        },
        getAllPri(state) {
            let s = 0;
            state.goods.forEach(item => {
                if (item.checked) {
                    s += item.goods.pri * item.count;
                }
            })
            return s * 100;
        }
    }
})