<template>
    <div id="app">
        <h3>Vuex购物车demo</h3>
        <List></List>
        <Cart></Cart>
        <Info></Info>
    </div>
</template>

<script>
	import List from './components/shop/List'
    import Cart from './components/shop/Cart'
    import Info from './components/shop/Info'
	export default {
		components: {
			List,Cart,Info
		}
	}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>