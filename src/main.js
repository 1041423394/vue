// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {asyncRoutes} from './router'
import store from './store'

import './assets/styles/reset.css'
import './assets/font/iconfont.css'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUi)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if (store.getters.role){ 
		if (store.getters.newrouter.length !== 0){
			next()
			console.log(asyncRoutes)
		} else {
			let newrouter;
			if(store.getters.role == 'A'){
				newrouter = asyncRoutes;
			} else {
				let newchildren = asyncRoutes[0].children.filter(route => {
					if (route.meta){
						if (route.meta.role == store.getters.role){
							return true;
						}
						return false;
					} else {
						return true;
					}
				});
				newrouter = asyncRoutes;
				newrouter[0].children = newchildren;
			}
			router.addRoutes(newrouter);
			store.dispatch('Roles',newrouter).then(res => {
				next({...to})
			}).catch(() => {
				
			})
		}
	} else {
		if(['/login'].indexOf(to.path) !== -1){
			next()
			
			console.log(asyncRoutes[0].children)
		} else {
			next('/login')
			
		}
	}
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
