<template>
	<div class="shop-list">
		<h4>商品信息</h4>
		<table class="table table-hover table-bordered table-shop">
			<thead>
				<tr>
					<th>id</th>
					<th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for='(items,index) of shop_list'>
					<td>{{ items.id }}</td>
					<td>{{ items.name }}</td>
					<td>{{ items.price }}</td>
					<td>{{ items.num || '' }}</td>
					<td>
						<div class="btn btn-info" @click='add_db(items)'>{{items.num ? '+' : '加入购物车'}}</div>
						<div class="btn btn-warning"  @click='reduce_db(items)' v-if='items.num && items.num>0'>-</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//菜品列表
				shop_list: [
					{
						id: 1,
						name: '鱼香肉丝',
						price: 18
					},
					{
						id: 2,
						name: '小炒肉',
						price: 20
					},
					{
						id: 3,
						name: '腌笃鲜',
						price: 20
					},
					{
						id: 4,
						name: '米饭',
						price: 2
					}
				]
			}
		},
		mounted() {
			/**
			 * list 购物车列表
			 * shop_list 菜品列表
			 * 将购物车中的对应菜品在初始化时,添加到商品信息中
			*/
			let list = this.$store.state.cart.cartList
			for(let i = 0;i<this.shop_list.length;i++) {
				for(let j = 0;j<list.length;j++) {
					if(list[j].id === this.shop_list[i].id){
						this.$set(this.shop_list,i,list[j])
						break
					}
				}
			}
		},
		methods: {
			add_db(items) {
				/**
				  * 添加菜品
				  *	@param {object} 
				  * 检查购物车中是否有对应的菜品,
				  * 1).有。分发到'add_db',更新num
				  * 2).无。分发到'create_db',push到'cartList'数组

				  ** 注意:2)中修改num属性时$set数据赋值
				*/

				let id = items.id
				this.$store.dispatch('check_db',id)

				if(this.$store.state.cart.curIndex !== -1) {
					this.$store.dispatch('add_db')
				}else {
					this.$set(items,'num',1)
					this.$store.dispatch('create_db',items)
				}
			},
			reduce_db(items) {
				/**
				  * 减少菜品
				  *	@param {object} 
				*/

				let id = items.id
				this.$store.dispatch('check_db',id)

				this.$store.dispatch('reduce_db')
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
    .btn-warning{
    	padding: 6px 14px 6px 14.5px;
    }
</style>