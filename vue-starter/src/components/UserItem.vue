<template>
	<ul>
		<li class="list-item clearfix" @click="show = !show">
			<span class="list-id">{{ item.id }}</span>
			<span class="list-title">{{ item.name }}</span>
			<transition name="slide-fade">
				<div class="user-detail" v-show="show">
					<p class="phone">{{ item.phone }}</p>
					<p class="email">{{ item.email }}</p>
					<p class="address">{{ item.address.city }}
						<span class="read-more" @click.stop="getUserDetail(item.id)">查看更多</span>
					</p>
				</div>
			</transition>
		</li>
	</ul>
</template>

<script>
	export default {
	  name: 'userItem',
	  props: ['item'],
	  data () {
	    return {
	    	show: false
	    }
	  },
	  methods: {
	  	getUserDetail(id) {
	  		this.$router.push({
	  			name: 'user-detail',
	  			params: {
	  				userId: id
	  			}
	  		})
	  	}
	  }
	}
</script>

<style>
  .user-detail {
    margin-top: 1em;
    text-align: left;
  }
  .user-detail p {
    padding-bottom: .4em;
  }
  .phone, .address, .email {
    padding-left: 1.8em;
    background-size: 1.6em 1.4em;
    background-repeat: no-repeat;
    vertical-align: middle; 
  }
  .phone {
    background-image: url('../assets/img/mobilephone.png');
  }
  .address {
    background-image: url('../assets/img/coordinates.png');
  }
  .email {
    background-image: url('../assets/img/mail.png');
  }
  .read-more {
    float: right;
    padding: .2em .6em;
    font-weight: 500;
    background: #00b4ff;
    border-radius: 4px;
    color: #fff;
  }


  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(0.3, 0.3, 0.3, 0.3);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
