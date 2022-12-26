import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import * as filters from './plugin/filters.js'

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])//插入过滤器名和对应方法
})

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
