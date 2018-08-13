<template>
	<el-container>
		<el-aside width="200px">
			<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
				
				<el-menu-item index="1">
					<i class="el-icon-menu"></i>
					<span slot="title"><router-link to = "/index/xshangpin/xgoodsgeneral">商品概况</router-link></span>
				</el-menu-item>
				<el-menu-item index="2">
					<i class="el-icon-menu"></i>
					<span slot="title"><router-link to = "/index/xshangpin/xeffect">商品效果</router-link></span>
				</el-menu-item>
				
			</el-menu>
		</el-aside>
		<!--<el-container>
			<el-header>Header</el-header>
			<el-main>Main</el-main>
			
		</el-container>-->
		<router-view></router-view>
	</el-container>
	<!--<div>hello world</div>-->
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped="scoped">
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>