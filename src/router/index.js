import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/MainPage/pages/HomePage.vue'
import MainPage from '@/components/pages/MainPage.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import UserPage from '@/components/pages/MainPage/pages/UserPage.vue'
import ForumPage from '@/components/pages/MainPage/pages/ForumPage.vue'
import PublishPage from '@/components/pages/MainPage/pages/PublishPage.vue'
import MessagePage from '@/components/pages/MainPage/pages/MessagePage.vue'
import LoginMainPage from '@/components/pages/LoginPage/pages/LoginMainPage.vue'
import GetCodePage from '@/components/pages/LoginPage/pages/GetCodePage.vue'
import TeamInformationPage from '@/components/pages/TeamInformationPage.vue'

import TestPage from '@/components/pages/TestPage.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/test',
		name: 'TestPage',
		component: TestPage
	},
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
				path: 'forum',
				name: 'ForumPage',
				component: ForumPage
			},
			{
				path: 'publish',
				name: 'PublishPage',
				component: PublishPage
			},
			{
				path: 'message',
				name: 'MessagePage',
				component: MessagePage
			},
			{
				path: 'user',
				name: 'UserPage',
				component: UserPage
			}
		]
	},
	{
		path: '/team/:id',
		name: 'TeamInformationPage',
		component: TeamInformationPage
	},
	{
		path: '/login',
		name: 'LoginPage',
		redirect: '/login/loginmain',
		component: LoginPage,
		children: [
			{
				path: 'loginmain',
				name: 'LoginMainPage',
				component: LoginMainPage
			},
			{
				path: 'getcode',
				name: 'GetCodePage',
				component: GetCodePage
			}
		]
	}
]

export default new VueRouter({
	routes
})
