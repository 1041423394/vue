<template>
	<el-container>
		<el-aside width="200px">
			<div class = "flow-rate">
				<i class= "el-icon-info"></i>
				<p>流量分析</p>
			</div>
			<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
				
				<el-menu-item index="1">
					<!--<i class="el-icon-menu"></i>-->
					<span slot="title"><router-link to = "/xliuliang/xgeneral">流量概况</router-link></span>
				</el-menu-item>
				<el-menu-item index="2">
					<!--<i class="el-icon-menu"></i>-->
					<span slot="title"><router-link to = "/xliuliang/xsource">来源分析</router-link></span>
				</el-menu-item>
				<el-menu-item index="3">
					<!--<i class="el-icon-setting"></i>-->
					<span slot="title"><router-link to = "/xliuliang/xhomepage">首页分析</router-link></span>
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
		background-color: #fff;
		color: #333;
		text-align: center;
		/*line-height: 200px;*/
		border: 1px solid gainsboro;
		margin:0 10px;
		
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
	.flow-rate{
		height: 110px;
	}
	.flow-rate i{
		margin: 20px 0;
		font-size: 24px;
	}
	.flow-rate p{
		font-size: 18px;
		font-weight: 500;
	}
</style>