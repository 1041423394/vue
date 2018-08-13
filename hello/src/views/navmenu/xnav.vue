<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="4">{{logo}}</el-col>
			<el-col :span="16">
					
					<a  class = "a-item" v-for="a in arr" :id = "a.id+ '=='+id" @click="changeBar(a.id)" :class="{'active' :id ==a.id}" :href="'#/index/' + a.sign + a.second">{{a.title}}</a>
					<!--<a href="#/index/xhome" class = "a-item active">首页</a>
					<a href="#/index/xanalysis" class = "a-item">流量分析</a>
					<a href="#/index/xhome" class = "a-item">数据分析</a>
					<a href="#/index/xhome" class = "a-item">商品分析</a>-->
					
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img  /> {{user}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>

		</el-col>
		<el-col :span="24" class="main">
			<router-view></router-view>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				logo: "logo",
				user: "admin",
				arr: [{
					id: 1,
					sign: "xhome",
					second: '',
					title: "首页"
				}, {
					id: 2,
					sign: "xliuliang",
					second: '/xgeneral',
					title: "流量分析"
				}, {
					id: 3,
					sign: "xjiaoyi",
					second: '/xjiaoyigeneral',
					title: "交易分析"
				}, {
					id: 4,
					sign: "xshangpin",
					second: '/xgoodsgeneral',
					title: "商品分析"
				}],
				id: 1
			};
		},
		methods: {
			changeBar: function(id) {
				this.id = id;
//				console.log(id)
				
			},
			
				
			}
		
	}
</script>

<style scoped="scoped">
	.container{
		background: #F2F2F2;
	}
	.header {
		height: 60px;
		line-height: 60px;
		background: #fff;
		color: #000;
	}
	.header .a-item{
		text-decoration: none;
		color: #000;
		font-size: 18px;
		font-weight: 800;
		line-height: 60px;
		display: inline-block;
		margin: 0 25px;
		
		
	}
	.header .active{
		color: #990000;
		border-bottom: 2px solid #990000;
	}
	.userinfo {
		text-align: right;
		padding-right: 35px;
		float: right;
	}
	
	.userinfo-inner {
		cursor: pointer;
		color: #000;
	}
	
	.userinfo-inner img {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
		float: right;
	}
	.main{
		margin-top: 40px;
		/*width: 100%;
		height: 600px;
		border: 1px solid black;*/
	}
</style>