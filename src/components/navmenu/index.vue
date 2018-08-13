<template>
	<div style="width: 100%; background: #f4f4f4;">

		<el-row class="container">
			<div style="width: 1236px; margin: 0 auto; ">
				<el-col :span="24" class="header">
					<el-col :span="4" class="logo">
						<img src="../../assets/images/logo.jpg" />
					</el-col>
					<el-col :span="16" class="navmenu" >
						<!--<el-menu :default-active="$route.path" mode="horizontal">
							<template v-for="item in newrouter[0].children" v-if="!item.hidden">
								<router-link v-if="!item.hidden&&!item.children" :to="item.path">
									<el-menu-item :index="item.path">
										{{ item.name}}
									</el-menu-item>
								</router-link>
							</template>
						</el-menu>-->
						
						<template v-for="item in newrouter[0].children"  :default-active="$route.path" >
								<router-link class="a-item" @click.native="changeBar(item.id)"  :to="item.path" :index = "item.path" :class="{'active' :id ==item.id}">{{item.name}}</router-link>
						</template>
						<!--<a class="a-item" v-for="a in arr" :id="a.id+ '=='+id" @click="changeBar(a.id)" :class="{'active' :id ==a.id}" :href="'#/' + a.sign + a.second">{{a.title}}</a>-->
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
								<el-dropdown-item  @click.native="logout">退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>

				</el-col>

			</div>
		</el-row>
		<div style="width: 1236px; margin: 0 auto; ">
			<el-row>
				<el-col :span="24" class="main">
					<router-view></router-view>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'index',
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
		computed: {
			...mapGetters([
				'newrouter'
			])
		},
		methods: {
			changeBar: function(id) {
				this.id = id;
				//				console.log(id)

			},
			logout: function() {
				console.log(this.$store)
				this.$store.dispatch('Logout').then(() => {
					this.$router.push({
						path: '/login'
					});
				}).catch(err => {
					this.$message.error(err);
				});
			}

		}

	}
</script>

<style scoped="scoped">
	.container {
		background: #5377df;
		width: 100%;
	}
	
	.container .header {
		width: 1236px;
		height: 60px;
		line-height: 60px;
		color: #b5c4ef;
	}
	
	.header .logo img {
		display: block;
		margin: 6px 0;
	}
	
	.header .a-item {
		text-decoration: none;
		color: #b5c4ef;
		font-size: 22px;
		font-weight: 600;
		line-height: 60px;
		display: inline-block;
		margin: 0 25px;
	}
	
	.header .active {
		color: #fff;
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
	.navmenu{
		margin-left: -120px;
	}
	.main {
		margin-top: 30px;
		/*width: 1236px;*/
	}
</style>