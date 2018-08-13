<template>
	<el-container>
		<el-header>
			交易概况
			<p style="display:inline-block ; font-size: 14px;font-weight: 400; color: #333; margin-left: 10px;">
				<i class="el-icon-question"></i> 未支付订单
				<span style="color: red; font-size: 12px; margin-right: 7px;">666666</span>, 未支付客户数
				<span style="color: red; font-size: 12px; margin-right: 7px;">666666</span>, 未支付金额
				<span style="color: red; font-size: 12px;">666666</span>
			</p>
		</el-header>
		<el-main>
			<div class="jy-assume">
				<div class="jy-assume-top">
					<div class="jy-assume-top1">
						交易总览
						<el-select v-model="value" placeholder="全部" size="mini">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" style="top: 0;">
							</el-option>
						</el-select>
					</div>
					<div class="jy-assume-top2">
						<el-select v-model="value2" placeholder="今天" style="width: 80px;" size="mini">
							<el-option label="今天" value="1"></el-option>
							<el-option label="昨天" value="2"></el-option>
							<el-option label="自然周" value="3"></el-option>
							<el-option label="自然月" value="4"></el-option>
							<el-option label="自定义" value="5"></el-option>
						</el-select>
						<el-date-picker size="mini" style="width: 200px;" unlink-panels v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
					</div>
				</div>
				<div class="jy-assume-mid">
					<div class="jy-assume-mid1">
						<div>
							<i class="el-icon-info"></i>
							<p>销售相关</p>
						</div>
						<div>
							<p>成交金额</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
						<div>
							<p>成交金额</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
						<div>
							<p>成交金额</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
						<div>
							<p>成交金额</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
					</div>
					<div class="jy-assume-mid1 jy-assume-mid2">
						<div>
							<i class="el-icon-info"></i>
							<p>订单相关</p>
						</div>
						<div>
							<p>成交订单数</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
						<div>
							<p>支付订单数</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
						<div>
							<p>下单订单数</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
						<div>
							<p>成交金额</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
					</div>
					<div class="jy-assume-mid1 ">
						<div>
							<i class="el-icon-info"></i>
							<p>浏览相关</p>
						</div>
						<div>
							<p>访客数</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
						<div>
							<p>浏览量</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
						<div>
							<p>平均访问时长</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
						<div>
							<p>成交金额</p>
							<p>888,888</p>
							<p>较<span>12-26</span> <i class="el-icon-sort"></i><span>50%</span></p>
						</div>
					</div>

				</div>
			</div>
			<div class="jy-tedency">
				<div class="jy-assume-top">
					<div class="jy-assume-top1">
						交易趋势
					</div>
					<div class="jy-assume-top2">
						<el-select v-model="value2" placeholder="今天" style="width: 80px;" size="mini">
							<el-option label="今天" value="1"></el-option>
							<el-option label="昨天" value="2"></el-option>
							<el-option label="自然周" value="3"></el-option>
							<el-option label="自然月" value="4"></el-option>
							<el-option label="自定义" value="5"></el-option>
						</el-select>
						<el-date-picker size="mini" style="width: 200px;" unlink-panels v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
						<span class="select-ted" @click="changeBool">趋势</span>丨<span class="select-ted" @click="changeBool">列表</span>
					</div>
				</div>
				<div class="jy-tedency-mid">
					<div class="jy-tedency-mid1">
						<p>选择指标：</p>
						<p @click="changeShoww">切换指标</p>
						<div class="ted-chart" style="height: 360px; margin-top: 30px;" v-show="bool">
							<div id="tedChart" style="width: 100%; height: 100%;"></div>
						</div>
						<div v-show="!bool">
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
					</div>

				</div>
			</div>
			<div class="jy-tedency">
				<div class="jy-assume-top">
					<div class="jy-assume-top1">
						交易趋势
					</div>
					<div class="jy-assume-top2">
						<el-select v-model="value2" placeholder="今天" style="width: 80px;" size="mini">
							<el-option label="今天" value="1"></el-option>
							<el-option label="昨天" value="2"></el-option>
							<el-option label="自然周" value="3"></el-option>
							<el-option label="自然月" value="4"></el-option>
							<el-option label="自定义" value="5"></el-option>
						</el-select>
						<el-date-picker size="mini" style="width: 200px;" unlink-panels v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
						<span class="select-ted" @click="changeBo">趋势</span>丨<span class="select-ted" @click="changeBo">列表</span>
					</div>
				</div>
				<div class="jy-tedency-mid">
					<div class="jy-tedency-mid1">
						<p>选择指标：</p>
						<p>切换指标</p>
						<div class="ted-chart" style="height: 360px;" v-show="bo">
							<div id="tedChart" style="width: 100%; height: 100%;"></div>
						</div>
						<div v-show="!bo">
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
					</div>

				</div>
			</div>
			<!--<drag>-->
				<div class="tabNorm" v-show="showw" v-drag="greet" id = "drag">
					<div class="norm-header">
						<p>切换指标</p>
						<p @click="changeShoww">
							<i class="el-icon-close"></i>
						</p>
					</div>
					<div class="norm-main">
						<div class="norm-main-top">
							<p class="top-title">选择终端</p>
							<p>
								<el-checkbox-group v-model="checkList">
									<el-checkbox label="所有端"></el-checkbox>
									<el-checkbox label="PC端"></el-checkbox>
									<el-checkbox label="移动端"></el-checkbox>
									<el-checkbox label="APP-Andriod"></el-checkbox>
									<el-checkbox label="APP-IOS"></el-checkbox>
									<el-checkbox label="WAP"></el-checkbox>
									<el-checkbox label="微商城"></el-checkbox>
									<el-checkbox label="触屏机"></el-checkbox>
								</el-checkbox-group>
							</p>
						</div>
						<div class="norm-main-mid">
							<p class="top-title " style="margin-top: 10px;">选择指标</p>
							<div class="about">
								<p>销售相关</p>
								<p>
									<el-checkbox-group v-model="checkList">
										<el-checkbox label="所有端"></el-checkbox>
										<el-checkbox label="PC端"></el-checkbox>
										<el-checkbox label="移动端"></el-checkbox>
										<el-checkbox label="APP-Andriod"></el-checkbox>
										<el-checkbox label="APP-IOS"></el-checkbox>
										<el-checkbox label="WAP"></el-checkbox>
										<el-checkbox label="微商城"></el-checkbox>
										<el-checkbox label="触屏机"></el-checkbox>
									</el-checkbox-group>
								</p>
							</div>
							<div class="about">
								<p>下单相关</p>
								<p>
									<el-checkbox-group v-model="checkList">
										<el-checkbox label="所有端"></el-checkbox>
										<el-checkbox label="PC端"></el-checkbox>
										<el-checkbox label="移动端"></el-checkbox>
										<el-checkbox label="APP-Andriod"></el-checkbox>
										<el-checkbox label="APP-IOS"></el-checkbox>
										<el-checkbox label="WAP"></el-checkbox>
										<el-checkbox label="微商城"></el-checkbox>
										<el-checkbox label="触屏机"></el-checkbox>
									</el-checkbox-group>
								</p>
							</div>
							<div class="about">
								<p>转化相关</p>
								<p>
									<el-checkbox-group v-model="checkList">
										<el-checkbox label="所有端"></el-checkbox>
										<el-checkbox label="PC端"></el-checkbox>
										<el-checkbox label="移动端"></el-checkbox>
										<el-checkbox label="APP-Andriod"></el-checkbox>
										<el-checkbox label="APP-IOS"></el-checkbox>
										<el-checkbox label="WAP"></el-checkbox>
										<el-checkbox label="微商城"></el-checkbox>
										<el-checkbox label="触屏机"></el-checkbox>
									</el-checkbox-group>
								</p>
								<p>

									已选<span>1</span>项，终端和指标最多可选择<span>4</span>项，=终端数*指标数
								</p>
							</div>
						</div>

					</div>
					<div class="norm-foot">
						<el-button size="small">确定</el-button>
						<el-button size="small" @click="changeShoww">取消</el-button>
					</div>
				</div>
			<!--</drag>-->
		</el-main>

	</el-container>
</template>

<script>
	import echarts from 'echarts'
	import Vue from 'vue'
//	import draggable from 'vuedraggable'
	Vue.directive("drag",{
		bind: function(el, binding){
			let oDiv = el;
			let self = this;
			oDiv.onmousedown = function(e){
				let disX = e.clientX - oDiv.offsetLeft;
				let disY = e.clientY - oDiv.offsetTop;
				document.onmousemove = function(e){
					let l = e.clientX - disX;
					let t = e.clientY - disY;
					oDiv.style.left = l + "px";
					oDiv.style.top = t + "px";
				};
				document.onmouseup = function(){
					document.onmousemove = null
				}
			}
		}
	})
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
				}],
				checkList: [],
				value: '',
				value2: '',
				value6: '',
				bool: true,
				bo: true,
				showw: false,
				cancel: true,
				val: '123'

			}
		},
		/*components: {
			drag
		},*/
		methods: {
			changeBool: function() {
				this.bool = !this.bool
			},
			changeBo: function() {
				this.bo = !this.bo
			},
			
			changeShoww: function() {
				this.showw = !this.showw
				console.log(this.showw)
			},
			greet: function(val){
				this.val = val
			}
		},
		mounted() {
			var tedChart = echarts.init(document.getElementById('tedChart'));
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
			tedChart.setOption(option)
		}
	}
</script>

<style scoped="scoped">
	.el-main {
		background-color: #fff;
		color: #333;
		padding: 0;
		position: relative;
		/*text-align: center;*/
		/*line-height: 160px;*/
	}
	
	.el-header {
		background-color: #fff;
		font-size: 18px;
		font-weight: 600;
		color: #000;
		line-height: 80px;
	}
	
	.jy-assume {
		/*padding: 10px;*/
	}
	
	.jy-assume-top {
		height: 45px;
		background: #F2F2F2;
		padding: 10px;
		box-sizing: border-box;
		border: 1px solid gainsboro;
	}
	
	.jy-assume-top .jy-assume-top1 {
		float: left;
		font-size: 16px;
		font-weight: 600;
		padding-left: 10px;
		border-left: 3px solid grey;
	}
	
	.jy-assume-top .jy-assume-top2 {
		float: right;
		/*line-height: 10px;*/
	}
	
	.el-select {
		width: 80px;
		height: 20px;
		margin-left: 15px;
	}
	
	.jy-assume-mid1 div {
		float: left;
		margin: 0 30px;
		padding: 30px 0;
		text-align: center;
	}
	
	.jy-assume-mid1 div:nth-of-type(1) i {
		font-size: 42px;
		margin-bottom: 18px;
	}
	
	.jy-assume-mid1 div p:nth-of-type(2) {
		margin: 10px 0;
		font-size: 18px;
		color: black;
	}
	
	.jy-assume-mid1 div p:nth-of-type(3) {
		font-size: 14px;
		/*color: black;*/
	}
	
	.jy-assume-mid1 div p span:nth-of-type(1) {
		margin-right: 15px;
	}
	
	.jy-assume-mid2 {
		clear: both;
		overflow: hidden;
		border-top: 1px solid gainsboro;
		border-bottom: 1px solid gainsboro;
	}
	
	.jy-tedency {
		clear: both;
	}
	
	.select-ted {
		font-size: 12px;
		cursor: pointer;
	}
	
	.jy-tedency-mid1 {
		padding: 15px 20px;
	}
	
	.jy-tedency-mid1 p {
		font-size: 14px;
		color: black;
	}
	
	.jy-tedency-mid1 p:nth-of-type(1) {
		float: left;
	}
	
	.jy-tedency-mid1 p:nth-of-type(2) {
		float: right;
		color: deepskyblue;
		cursor: pointer;
	}
	
	.tabNorm {
		width: 550px;
		position: absolute;
		top: 600px;
		left: 25%;
		z-index: 9999999;
		border: 1px solid darkgray;
		background: #fff;
	}
	
	.norm-header {
		height: 45px;
		background: #f2f2f2;
		line-height: 45px;
		padding: 0 10px;
		border-bottom: 1px solid darkgray;
	}
	
	.norm-header p:nth-of-type(1) {
		float: left;
		font-size: 14px;
		font-weight: 600;
		color: black;
	}
	
	.norm-header p:nth-of-type(2) {
		float: right;
		font-size: 24px;
	}
	
	.norm-main {
		padding: 20px 15px;
	}
	
	.top-title {
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 10px;
		color: black;
	}
	
	.about p:nth-of-type(1) {
		font-size: 14px;
		color: grey;
		font-weight: 600;
		margin: 10px 0;
	}
	
	.about p:nth-of-type(3) {
		margin: 15px 0;
	}
	
	.about p:nth-of-type(3) span {
		color: red;
		margin: 0 5px;
	}
	
	.norm-foot {
		text-align: center;
		margin-bottom: 15px;
	}
</style>