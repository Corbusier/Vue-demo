import * as types from './mutations_types'

export default {
	[types.CHECK_DB](state,id) {
        state.curIndex = -1
        let list = state.cartList
        if(list.length) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === id) {
                    state.curIndex = i;      
                    break;
                }
            }
        }
    },
    [types.ADD_DB](state) {
    	state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num)
    	state.cartList[state.curIndex].num++
        localStorage.setItem('vuex_cart',JSON.stringify(state.cartList))
    },
    [types.CREATE_DB](state,shop) {
    	state.cartList.push(shop)
    },
    [types.UPDATE_CUR_STATUS](state,{index = -1}) {
    	state.curIndex = index
    },
    [types.CLEAR_ITEMS](state) {
    	state.cartList.forEach((item)=>{
    		item.num = 0
    	})
    	state.cartList = []
    	localStorage.removeItem('vuex_cart')
    },
    [types.REDUCE_DB](state) {
    	state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num)
    	state.cartList[state.curIndex].num--

    	if(state.cartList[state.curIndex].num <= 0){
    		state.cartList.splice(state.curIndex,1)
    	}
    },
    [types.DEL_DB](state) {
    	if(state.curIndex >= 0) {
    		state.cartList[state.curIndex].num = 0
    		state.cartList.splice(state.curIndex,1)
    	}
    }
}