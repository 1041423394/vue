

export default [{
	path: '/',
	name: '首页',
	component: (resolve) => rquire(['../views/navmenu/xnav.vue'], resolve),
	children: [{
		path: 'xhome',
		meta: {
			name: '首页导航'
		},
		component: (resolve) => require(['../views/home/xhome.vue'], resolve)
	}, {
		path: 'xliuliang',
		meta: {
			name: '流量分析'
		},
		component: (resolve) => require(['../views/analysis/xliuliang.vue'], resolve)
	}, {
		path: 'xjiaoyi',
		meta: {
			name: '交易分析'
		},
		component: (resolve) => require(['../views/analysis/xjiaoyi.vue'], resolve)
	}, {
		path: 'xshangpin',
		meta: {
			name: '商品分析'
		},
		component: (resolve) => require(['../views/analysis/xshangpin.vue'], resolve)
	},]
}]
