import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

import MerchantHomePage from '@/components/pages/MainPage/pages/MerchantHomePage.vue'
import TalentHomePage from '@/components/pages/MainPage/pages/TalentHomePage.vue'
import MainPage from '@/components/pages/MainPage.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import UserPage from '@/components/pages/MainPage/pages/UserPage.vue'
import ForumPage from '@/components/pages/MainPage/pages/ForumPage.vue'
import PublishPage from '@/components/pages/MainPage/pages/PublishPage.vue'
import MessagePage from '@/components/pages/MainPage/pages/MessagePage.vue'
import LoginMainPage from '@/components/pages/LoginPage/pages/LoginMainPage.vue'
import GetCodePage from '@/components/pages/LoginPage/pages/GetCodePage.vue'
import FindPasswordPage1 from '@/components/pages/LoginPage/pages/FindPasswordPage1.vue'
import FindPasswordPage2 from '@/components/pages/LoginPage/pages/FindPasswordPage2.vue'
import FindPasswordPage3 from '@/components/pages/LoginPage/pages/FindPasswordPage3.vue'
import FindPasswordPage4 from '@/components/pages/LoginPage/pages/FindPasswordPage4.vue'
import TeamInformationPage from '@/components/pages/TeamInformationPage.vue'
import WorkbenchPage from '@/components/pages/MainPage/pages/WorkbenchPage.vue'

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
		redirect: () => {
			switch (store.getters['loginInfo/type']) {
				case 'merchant':
					return { name: 'MerchantHomePage' }

				case 'talent':
					return { name: 'TalentHomePage' }

				default:
					return { name: 'LoginPage' }
			}
		},
		component: MainPage,
		children: [
			{
				path: 'merchant-home',
				name: 'MerchantHomePage',
				component: MerchantHomePage
			},
			{
				path: 'talent-home',
				name: 'TalentHomePage',
				component: TalentHomePage
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
			},
			{
				path: 'workbench',
				name: 'WorkbenchPage',
				component: WorkbenchPage
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
			},
			{
				path: 'findpassword1',
				name: 'FindPasswordPage1',
				component: FindPasswordPage1
			},
			{
				path: 'findpassword2',
				name: 'FindPasswordPage2',
				component: FindPasswordPage2
			},
			{
				path: 'findpassword3',
				name: 'FindPasswordPage3',
				component: FindPasswordPage3
			},
			{
				path: 'findpassword4',
				name: 'FindPasswordPage4',
				component: FindPasswordPage4
			}
		]
	}
]

export default new VueRouter({
	routes
})
