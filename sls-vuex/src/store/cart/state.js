export default {
	//购物车列表
	cartList: localStorage.getItem('vuex_cart') ? 
			 JSON.parse(localStorage.getItem('vuex_cart')) :
			 [],

 	//当前购物车信息
 	cartInfos: {
 		total_price: 0,
 		total_nums : 0
 	},
 	//对应点击当前菜品是否在购物车,在则为对应的索引 
 	curIndex: -1
}