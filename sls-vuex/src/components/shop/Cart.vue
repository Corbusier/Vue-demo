<template>
	<div class="shop-list">
		<h4>购物车信息</h4>
		<table class="table table-hover table-shop">
			<thead>
				<tr>
					<th>id</th>
					<th>名称</th>
					<th>价格</th>
                    <th>数量</th>
                    <th>总价</th>
                    <th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(cart, index) of cartList">
					<td>{{ cart.id }}</td>
					<td>{{ cart.name }}</td>
					<td>{{ cart.price }}</td>
					<td>{{ cart.num }}</td>
					<td>{{ cart.price * cart.num }}</td>
					<td>
						<div @click='action_cart(index,"add_db")' class="btn btn-info">+</div>
						<div class="btn btn-warning" @click='action_cart(index,"reduce_db")'>-</div>
						<div @click='action_cart(index,"del_db")' class="btn btn-danger" title='删除'>x</div>
					</td>
				</tr>
			</tbody>
		</table>	
	</div>
</template>

<script>
	export default{
		computed:{
			cartList() {
				return this.$store.getters.getCartList
			}
		},
		methods: {
			action_cart(index,type) {
				/**
				  * 购物车加减删除
				  *	@param {number} index 当前操作的索引
				  * @param {string} type  对应的mutations	
				*/

				this.$store.dispatch('update_cur_status',{index})
				this.$store.dispatch(type)
			}
		}
	}
</script>

<style scoped lang="less">
    .table-shop{
        th{
            text-align: center;
        }
    }
</style>