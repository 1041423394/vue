<template>
	<el-container>
		<el-header>
			<div class="header-left">
				流量分析
				<el-select v-model="value" placeholder="全部">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" style="top: 0;">
					</el-option>
				</el-select>

			</div>
			<div class="header-right">
				<el-select v-model="value" placeholder="今天">
					<el-option label="今天" value="1"></el-option>
					<el-option label="昨天" value="2"></el-option>
					<el-option label="自然周" value="3"></el-option>
					<el-option label="自然月" value="4"></el-option>
					<el-option label="自定义" value="5"></el-option>
				</el-select>
				<el-date-picker unlink-panels v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
				</el-date-picker>
			</div>
		</el-header>
		<el-main>
			<div class="assume">
				流量总揽
			</div>
			<div class="assume-data">
				<div v-for="a in arrData" class="">
					<p>{{a.name}}</p>
					<p>{{a.num}}</p>
					<p>较前日<span><i class = "el-icon-sort"></i>{{a.per}}</span></p>
				</div>
			</div>
			<div class="assume">
				流量趋势
				<div class="tablist">
					<span @click="changeBool">趋势</span>丨
					<span @click="changeBool">列表</span>
				</div>
			</div>
			<div class="list tendency">
				<div>
					<div>
						终端:
						<el-checkbox-group v-model="checkList">
							<el-checkbox label="所有端"></el-checkbox>
							<el-checkbox label="PC端"></el-checkbox>
							<el-checkbox label="移动端"></el-checkbox>
							<el-checkbox label="APP-Andriod"></el-checkbox>
							<el-checkbox label="APP-IOS"></el-checkbox>
							<el-checkbox label="WAP"></el-checkbox>
							<el-checkbox label="微商城"></el-checkbox>
						</el-checkbox-group>
					</div>
					<div class="norm">
						指标:
						<el-checkbox-group v-model="checkList">
							<el-checkbox label="访客数"></el-checkbox>
							<el-checkbox label="浏览量"></el-checkbox>
							<el-checkbox label="跳失率"></el-checkbox>
							<el-checkbox label="人均浏览量"></el-checkbox>
							<el-checkbox label="平均停留时长"></el-checkbox>
						</el-checkbox-group>
					</div>
					<div>
						已选:
						<el-checkbox-group v-model="checkList">
							<el-checkbox label="PC端"></el-checkbox>
							<el-checkbox label="复选框 B"></el-checkbox>
							<el-checkbox label="复选框 C"></el-checkbox>
						</el-checkbox-group>
					</div>

				</div>
				<div class="chart" v-show="bool">
					<div id="myChart" style="width: 100%; height: 100%;"></div>
				</div>
			</div>
			<div class="list listTable" v-show="!bool">
				<el-table :data="tableData" border style="width: 100%; text-align: center; color: black;">
					<el-table-column prop="date" label="日期" width="" style="color: black;">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="">
					</el-table-column>
					<el-table-column prop="address" label="地址">
					</el-table-column>
					
				</el-table>
				<el-pagination background layout="prev, pager, next" :total="1000" style="margin-top: 5px; text-align: right;">
					</el-pagination>
			</div>
		</el-main>

	</el-container>
	<!--<div>hello world</div>-->
</template>

<script>
	import echarts from "echarts"
	export default {
		data() {
			return {
				options: [
					/*{
					          value: '选项1',
					          label: '移动端'
					        },*/
					{
						value: '选项1',
						label: '移动端'
					}, {
						value: '选项2',
						label: 'PC端'
					}, {
						value: '选项3',
						label: 'APP-Andriod'
					}, {
						value: '选项4',
						label: 'APP-IOS'
					}, {
						value: '选项5',
						label: 'WAP'
					}
				],
				value: '',
				value6: '',
				checked: false,
				bool: true,
				arrData: [{
					name: '访客数',
					num: '666666',
					per: '20%'
				}, {
					name: '浏览量',
					num: '666666',
					per: '20%'
				}, {
					name: '跳失率',
					num: '70.22%',
					per: '20%'
				}, {
					name: '人均浏览量',
					num: '4.00',
					per: '20%'
				}, {
					name: '平均停留时长',
					num: '120S',
					per: '20%'
				}],
				checkList: ['选中且禁用', '复选框 A'], 
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods: {
			changeBool: function(){
				this.bool = !this.bool
			}
		},
		mounted() {
			var chart = echarts.init(document.getElementById("myChart"));
			var option = {
				title: {
					text: ''
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
						name: '邮件营销',
						type: 'line',
						stack: '总量',
						data: [120, 132, 101, 134, 90, 230, 210]
					},
					{
						name: '联盟广告',
						type: 'line',
						stack: '总量',
						data: [220, 182, 191, 234, 290, 330, 310]
					},
					{
						name: '视频广告',
						type: 'line',
						stack: '总量',
						data: [150, 232, 201, 154, 190, 330, 410]
					},
					{
						name: '直接访问',
						type: 'line',
						stack: '总量',
						data: [320, 332, 301, 334, 390, 330, 320]
					},
					{
						name: '搜索引擎',
						type: 'line',
						stack: '总量',
						data: [820, 932, 901, 934, 1290, 1330, 1320]
					}
				]
			};
			chart.setOption(option);
		}
	}
</script>

<style scoped="scoped">
	.el-main {
		/*border: 1px solid red;*/
		color: #333;
		padding: 0;
		/*text-align: center;*/
		/*line-height: 160px;*/
	}
	
	.el-header {
		background-color: #fff;
		color: #333;
		/*text-align: center;*/
		line-height: 60px;
	}
	
	.el-select {
		width: 100px;
		margin-left: 5px;
		/*height: 40px;*/
		/*margin-top: 10px;*/
		/*border: 1px solid grey;*/
	}
	
	.header-left {
		float: left;
	}
	
	.header-right {
		float: right;
	}
	
	.assume {
		font-size: 16px;
		font-weight: 600;
		border-left: 3px solid darkgray;
		margin: 10px;
		padding-left: 10px;
	}
	
	.assume .tablist {
		float: right;
		font-size: 14px;
		font-weight: 400;
	}
	
	.assume .tablist span {
		cursor: pointer;
	}
	
	.assume-data {
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		padding: 30px 0;
		/*margin-top: 10px;*/
	}
	
	.assume-data p:nth-of-type(1) {
		font-size: 18px;
	}
	
	.assume-data p:nth-of-type(2) {
		font-size: 36px;
		margin: 10px 0;
	}
	
	.assume-data p:nth-of-type(3) {
		font-size: 12px;
		color: darkgrey;
	}
	
	.assume-data p:nth-of-type(3) span {
		font-size: 12px;
		color: red;
		margin-left: 5px;
	}
	
	.list {
		padding: 20px 30px;
		background: #fff;
	}
	
	.el-checkbox-group {
		display: inline-block;
		margin-left: 15px;
	}
	
	.norm {
		margin: 15px 0;
	}
	
	.chart {
		height: 360px;
		margin-top: 35px;
	}
</style>