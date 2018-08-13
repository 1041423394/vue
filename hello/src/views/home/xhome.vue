<template>
	<el-row class="home-container">
		<el-col :span="24" class="header-nav">
			<div class="all-left">
				
				<p class="headerNav">
					<i class="el-icon-time"></i>实时概况
				</p>
				<p class="headerNav">
					更新时间:<span>2017-12-21</span>
				</p>
				
			</div>

			<div class="all-right">
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
			</div>

		</el-col>
		<el-col :span="24" class="showChart" style="margin-top: 30px;">
			<el-col :span="12" style="height: 100%;  padding-left: 50px;">
				<div class="payShow">
					<p><i class="el-icon-time"></i>支付金额 (元)</p>
					<p>6666666</p>
					<p>昨天全天: <span> 666,677</span></p>
				</div>
				<div id="myEchart" style="width: 100%; height: 50%; margin-left: 0;">
					<div id="chart" style="width: 100%; height: 100%; margin-left: 0;"></div>
				</div>
			</el-col>
			<el-col :span="12" class="showData">
				<el-col :span="6">
					<div class="payShow ">
						<p><i class="el-icon-time"></i>成交金额</p>
						<p>6666666</p>
						<p>昨天全天: <span> 666,677</span></p>
					</div>
					<div class="payShow " style="margin-top: 50px;">
						<p><i class="el-icon-time"></i>访客数</p>
						<p>6666666</p>
						<p>昨天全天: <span> 666,677</span></p>
					</div>
				</el-col>

				<el-col :span="6">
					<div class="payShow ">
						<p><i class="el-icon-time"></i>成交金额</p>
						<p>6666666</p>
						<p>昨天全天: <span> 666,677</span></p>
					</div>
					<div class="payShow " style="margin-top: 50px;">
						<p><i class="el-icon-time"></i>访客数</p>
						<p>6666666</p>
						<p>昨天全天: <span> 666,677</span></p>
					</div>
				</el-col>
			</el-col>

		</el-col>
		<el-col :span="24" style="position: relative;">
			<el-col :span = "10">
				<div style="width: 96%;border-bottom: 1px solid darkgray;"></div>
			</el-col>
			<el-col :span = "4" style="position: absolute; top: -15px; left: 41.5%;">
				<div class = "select-day">
				<ul>
					<li class = "leftDay" style="width: 25%; height: 100%; border-right: 1px solid darkgray;"><i class = "el-icon-arrow-left"></i> 前一天 </li>
					<li class = "nowDay" style="width: 49%; height: 30px;">
						<el-date-picker style="width:100%; height: 100%; border: 0; color: black;" v-model="value8" size="small" type="date" placeholder="2010-10-01" default-value="2010-10-01">
						</el-date-picker>
					</li>
					<li class = "rightDay" style="width: 25%; height: 100%; border-left: 1px solid darkgray;">后一天 <i class = "el-icon-arrow-right"></i></li>
				</ul>
					
			</div>
			</el-col>
			
			<el-col :span = "10" style="text-align: right; float: right;">
				<div style="width: 96%;border-bottom: 1px solid darkgray;float: right;"></div>
			</el-col>
		</el-col>
		<el-col :span = "24" class = "core">
			<el-col :span = "24" style="border-bottom: 1px solid darkgray;">
				<div>
					<i class = "el-icon-time"></i> 核心指标
				</div>
			</el-col>
		</el-col>
		
	</el-row>
</template>

<script>
	import echarts from "echarts"
	export default {

		data() {
			return {
				value8: ''
				
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
					bottom: '12%'
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
	.home-container {
		width: 100%;
		height: 400px;
		background: #fff;
		border: 1px solid gainsboro;
	}
	.header-nav {
		height: 60px;
		line-height: 60px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid gray;
	}
	.all-left {
		float: left;
		margin-left: 15px;
		
	}
	.all-left p:nth-of-type(1){
		font-size: 16px;
		font-weight: 700;
	}
	
	.all-left p:nth-of-type(2){
		font-size: 12px;
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
		font-size: 12px;
		color: grey;
	}
	
	.headerNav i {
		font-size: 16px;
		font-weight: 500;
		margin-right: 10px;
		
		
	}
	
	.el-icon-time {
		font-size: 18px;
		font-weight: 500;
	}
	
	.showChart {
		height: 340px;
	}
	
	.payShow p {
		font-size: 14px;
	}
	
	.payShow p:nth-of-type(1) i {
		margin-right: 10px;
	}
	
	.payShow p:nth-of-type(2) {
		font-size: 18px;
		font-weight: 600;
		margin: 15px 0;
	}
	
	.payShow p:nth-of-type(3) span {
		margin-left: 5px;
	}
	
	.showData {
		display: flex;
		justify-content: space-around;
		/*border: 1px solid red;*/
		padding: 0 80px;
	}
	.select-day ul{
		width: 100%;
		height: 30px;
		line-height: 30px;
		background: #fff;
		font-size: 12px;
		border: 1px solid darkgray;
	}
	.select-day ul li{
		list-style: none;
		float: left;
		text-align: center;
	}
	.core{
		margin-top: 30px;
		border: 1px solid gainsboro; 
		background: #fff;
		clear: both;
	}
	.core div{
		height: 60px;
		line-height: 60px;
		font-size: 16px;
		font-weight: 700;
		
		
	}
	.core div i{
		margin-left: 20px;
	}
</style>