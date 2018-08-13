<template>
	<div class="home-container">
		<div style="border: 1px solid #eee; border-radius: 8px; height: 384px; background: #fff; ">
			<div class="header-nav">
				<div class="all-left">

					<p class="headerNav">
						<i class="el-icon-time"></i> 实时概况
					</p>
					<p class="headerNav">
						更新时间：
						<span>2017-12-21</span>
						<span>14:26:39</span>
					</p>

				</div>

				<!--<div class="all-right">
				<el-dropdown class="select-menu" trigger="click">
					<span class="el-dropdown-link">
        			全部<i class="el-icon-arrow-down el-icon--right"></i>
  					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>PC端</el-dropdown-item>
						<el-dropdown-item>移动端</el-dropdown-item>
						<el-dropdown-item>APP-Android</el-dropdown-item>
						<el-dropdown-item>APP-IOS</el-dropdown-item>
						<el-dropdown-item>微商城</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>-->

			</div>
			<div class="showChart">
				<div style="height: 100%; width: 60%; position: relative; float: left;">
					<div class="payShow">
						<p><i class="iconfont icon-renminbi"></i>支付金额 (元)</p>
						<p>6666666</p>
						<p>昨天全天: <span> 666,677</span></p>
					</div>
					<div id="myEchart" style="width: 100%; height: 100%;position: absolute; top: 20px; left: -35px;">
						<div id="chart" style="width: 100%; height: 100%; "></div>
					</div>
				</div>
				<div class="showData">
					<div>
						<div class="payShow payData">
							<p><i class="el-icon-circle-check-outline"></i>成交金额</p>
							<p>6666666</p>
							<p>昨天全天: <span> 666,677</span></p>
						</div>
						<div class="payShow " style="margin-top: 50px;">
							<p><i class="iconfont icon-shuju-copy"></i>浏览量</p>
							<p>6666666</p>
							<p>昨天全天: <span> 666,677</span></p>
						</div>
					</div>

					<div>
						<div class="payShow payData">
							<p><i class="iconfont icon-renshu"></i>访客数</p>
							<p>6666666</p>
							<p>昨天全天: <span> 666,677</span></p>
						</div>
						<div class="payShow " style="margin-top: 50px;">
							<p><i class="iconfont icon-zhibiao08"></i>支付转化率</p>
							<p>6666666</p>
							<p>昨天全天: <span> 666,677</span></p>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div style="clear: both; height: 74px; box-sizing: border-box;">

			<div class="select-pickday">
				<div class = "line left-line"></div>
				<ul>
					<li class="to-day left-day" @click="subDay"><i class="el-icon-arrow-left"></i> 前一天 </li>
					<li class="now-day">
						<el-date-picker style="width: 130px; height: 30px;" v-model="value8" size="small" align="center" type="date" placeholder="value8" :default-value="this.nowDay">
						</el-date-picker>
					</li>
					<li class="to-day right-day" @click="addDay">后一天 <i class="el-icon-arrow-right"></i></li>
				</ul>
				<div class = "line right-line"></div>
			</div>

		</div>
		<div class="core">
			<div style="border-bottom: 1px solid darkgray;">
				<div>
					<i class="el-icon-time"></i> 核心指标
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import echarts from "echarts"
	
	export default {

		data() {
			return {
				value8: ''

			}
		},
		computed: {
			nowDay: function(){
				let d = new Date();
				let year = d.getFullYear();
				let month = d.getMonth() + 1;
				let day = d.getDate();
				
				let nowday = year + '-' + month + '-' + day
				this.value8 = nowday
				console.log(nowday)
			}
		},
		methods: {
			addDay: function(){
				let d = new Date(this.value8);
				let year = d.getFullYear();
				let month = d.getMonth() + 1;
				let day = d.getDate();
				day += 1;
//				if()
				let newday = year + '-' + month + '-' + day;
				this.value8 = newday;
				console.log(newday)
			},
			subDay: function(){
				let d = new Date(this.value8);
				let year = d.getFullYear();
				let month = d.getMonth() + 1;
				let day = d.getDate();
				day -= 1;
//				if()
				let newday = year + '-' + month + '-' + day;
				this.value8 = newday;
				console.log(newday)
			}
			
		},
		mounted() {
			var myChart = echarts.init(document.getElementById("chart"));
			/*myChart.setOption({
				title: {text: "echartsDemo"},
				tooltip: {},
				xAxis: {
					data: [0, 6, 12, 18, 23]
				},
				yAxis: {},
				serise: [{
					name: "支付金额",
					type: "line",
					data: [0, 20,30,50,60]
				}]
			});*/
			var data = [
				[0, 0],
				[6, 10],
				[12, 20],
				[18, 35],
				[23, 50]

			];

			var dateList = data.map(function(item) {
				return item[0];
			});
			var valueList = data.map(function(item) {
				return item[1];
			});

			var option = {
				title: [{
					right: '10',
				}],
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ["今天", "昨天"],
					x: 'right'
				},
				xAxis: [{
					//show: false,
					data: dateList
				}],
				yAxis: [{
					show: false,
					splitLine: {
						show: false
					}
				}],
				grid: [{
					bottom: '20%'
				}, {
					left: 0
				}],

				series: [{
					name: "今天",
					type: 'line',
					//					showSymbol: false,
					data: [5, 15, 30, 50, 65]
				}, {
					name: "昨天",
					type: 'line',
					//					showSymbol: false,
					data: valueList,
				}]
			};
			myChart.setOption(option)
		}
	}
</script>

<style scoped="scoped">
	
	
	.header-nav {
		height: 54px;
		line-height: 54px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #f2f2f2;
		
	}
	
	.all-left {
		float: left;
		margin-left: 15px;
	}
	
	.all-left p:nth-of-type(1) {
		font-size: 20px;
		font-weight: 700;
	}
	
	.all-left p:nth-of-type(2) {
		font-size: 16px;
		color: #7b8390;
	}
	
	.all-right {
		float: right;
		margin-right: 30px;
	}
	
	.select-menu {
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		margin-top: 10px;
		border: 1px solid gray;
	}
	
	.headerNav {
		margin: 0 10px;
		float: left;
	}
	
	.headerNav span {
		line-height: 60px;
		font-size: 16px;
		color: #7b8390;
	}
	
	.headerNav i {
		font-size: 24px;
		/*font-weight: 500;*/
		margin-right: 5px;
		color: #4f9af7;
	}
	
	.el-icon-time {
		font-size: 18px;
		font-weight: 500;
	}
	
	.showChart {
		/*border: 1px solid #000;*/
		height: 330px;
		/*border-radius: 10px;*/
	}
	
	.payShow {
		margin-top: 20px;
		margin-left: 25px;
	}
	
	.payShow p {
		font-size: 14px;
		color: #6d7583;
	}
	
	.payShow p:nth-of-type(1) i {
		margin-right: 10px;
		font-size: 24px;
		color: #8492a6;
	}
	
	.payShow p:nth-of-type(2) {
		font-size: 26px;
		font-weight: 600;
		margin: 15px 0;
		color: #4898fe;
	}
	
	.payShow p:nth-of-type(3) span {
		margin-left: 5px;
	}
	
	.showData {
		/*float: left;*/
		height: 330px;
		display: flex;
		justify-content: space-between;
		border-left: 1px solid #EDEDED;
		/*border: 1px solid red;*/
		padding: 0 32px;
		/*padding: 0;*/
	}
	
	.showData .payData p:nth-of-type(1) {
		font-size: 15px;
		color: #3d3f4e;
	}
	
	.showData .payData p:nth-of-type(1) i {
		font-size: 25px;
		font-weight: 400;
	}
	
	.select-pickday {
		clear: both;
	}
	
	.select-pickday ul {
		/*clear: both;*/
		float: left;
		width: 290px;
		height: 30px;
		line-height: 30px;
		background: #fff;
		font-size: 12px;
		margin:22px 15px;
		border: 1px solid #efefef;
	}
	
	.select-pickday ul .now-day {}
	
	.select-pickday ul li {
		list-style: none;
		float: left;
		text-align: center;
		cursor: pointer;
	}
	.line {
		width: 450px;
		margin: 36px 0;
		border-bottom: 1px solid red;
		float: left;
	}
	.to-day{
		width: 78px;
	}
	.core {
		/*margin-top: 30px;*/
		border: 1px solid gainsboro;
		background: #fff;
		clear: both;
	}
	
	.core div {
		height: 60px;
		line-height: 60px;
		font-size: 16px;
		font-weight: 700;
	}
	
	.core div i {
		margin-left: 20px;
	}
</style>