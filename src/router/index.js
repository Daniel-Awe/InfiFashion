import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/MainPage/pages/HomePage.vue'
import MainPage from '@/components/pages/MainPage.vue'
import UserPage from '@/components/pages/MainPage/pages/UserPage.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '*', redirect: '/'
	},
	{
		path: '/',
		name: 'index',
		redirect: '/main'
	},
	{
		path: '/main',
		name: 'MainPage',
		component: MainPage,
		redirect: '/main/home',
		children: [
			{
				path: 'home',
				name: 'HomePage',
				component: HomePage
			},
			{
				path: 'user',
				name: 'UserPage',
				component: UserPage
			}
		]
	}
]

export default new VueRouter({
	routes
})
