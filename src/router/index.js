import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

//登录
import login from '../components/login.vue'
//首页组件
import index from '../components/navmenu/index.vue'
import xhome from '../components/home/xhome.vue'
import xliuliang from '../components/analysis/xliuliang.vue'
import xjiaoyi from '../components/analysis/xjiaoyi.vue'
import xshangpin from '../components/analysis/xshangpin.vue'

//流量子组件
import xgeneral from '../components/analysis/liuliang/xgeneral.vue'
import xsource from '../components/analysis/liuliang/xsource.vue'
import xhomepage from '../components/analysis/liuliang/xhomepage.vue'
//交易子组件
import xjiaoyigeneral from '../components/analysis/jiaoyi/xjiaoyigeneral.vue'
import xcharacter from '../components/analysis/jiaoyi/xcharacter.vue'
import xdetail from '../components/analysis/jiaoyi/xdetail.vue'
//商品子组件
import xgoodsgeneral from '../components/analysis/shangpin/xgoodsgeneral.vue'
import xeffect from '../components/analysis/shangpin/xeffect.vue'

export default new Router({
	routes: [{
		path: '/login',
		name: 'Login',
		component: login
	}]
})

export const asyncRoutes = [{
	path: '/',
	name: 'index',
	redirect: '/xhome',
	component: index,
	hidden: false,
	children: [{
		path: '/xhome',
		name: '首页',
		id: 1,
		component: xhome,
		children: []
	}, {
		path: '/xliuliang',
		name: '流量分析',
		id: 2,
		redirect: '/xliuliang/xgeneral',
		component: xliuliang,
		meta: {
			role: 'B'
		},
		children: [{
			path: 'xgeneral',
			component: xgeneral
		}, {
			path: 'xsource',
			component: xsource
		}, {
			path: 'xhomepage',
			component: xhomepage
		}]
	}, {
		path: '/xjiaoyi',
		name: '交易分析',
		id: 3,
		redirect: '/xjiaoyi/xjiaoyigeneral',
		component: xjiaoyi,
		meta: {
			role: 'B'
		},
		children: [{
			path: 'xjiaoyigeneral',
			component: xjiaoyigeneral
		}, {
			path: 'xcharacter',
			component: xcharacter
		}, {
			path: 'xdetail',
			component: xdetail
		}]
	}, {
		path: '/xshangpin',
		name: '商品分析',
		id: 4,
		redirect: '/xshangpin/xgoodsgeneral',
		component: xshangpin,
		meta: {
			role: 'C'
		},
		children: [{
			path: 'xgoodsgeneral',
			component: xgoodsgeneral
		}, {
			path: 'xeffect',
			component: xeffect
		}]
	}]
}]

/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})*/