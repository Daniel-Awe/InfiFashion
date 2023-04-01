import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

import FirstLoadingPage from '@/components/pages/FirstLoadingPage.vue'
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
import FindPasswordPage1 from '@/components/pages/LoginPage/pages/FindPasswordPage/pages/FindPasswordPage1.vue'
import FindPasswordPage2 from '@/components/pages/LoginPage/pages/FindPasswordPage/pages/FindPasswordPage2.vue'
import FindPasswordPage3 from '@/components/pages/LoginPage/pages/FindPasswordPage/pages/FindPasswordPage3.vue'
import FindPasswordPage4 from '@/components/pages/LoginPage/pages/FindPasswordPage/pages/FindPasswordPage4.vue'
import FindPasswordPage from '@/components/pages/LoginPage/pages/FindPasswordPage.vue'
import TeamInformationPage from '@/components/pages/TeamInformationPage.vue'
import WorkbenchPage from '@/components/pages/MainPage/pages/WorkbenchPage.vue'
import CollectionPage from '@/components/pages/CollectionPage.vue'
import HistoryPage from '@/components/pages/HistoryPage.vue'
import ServicePage from '@/components/pages/HistoryPage/pages/ServicePage.vue'
import SettingPage from '@/components/pages/SettingPage.vue'
import CostumeDesigningPage from '@/components/pages/MainPage/pages/TalentHomePage/pages/CostumeDesigningPage.vue'
import IdentitySwitchPage from '@/components/pages/IdentitySwitchPage.vue'
import SendMessagePage from '@/components/pages/SendMessagePage.vue'
import OrderFormPage from '@/components/pages/OrderFormPage.vue'

import TestPage from '@/components/pages/TestPage.vue'

import UserInfoPage from '@/components/pages/SettingPage/pages/UserInfoPage.vue'
import CountSecurityPage from '@/components/pages/SettingPage/pages/CountSecurityPage.vue'
import SettingMainPage from '@/components/pages/SettingPage/pages/SettingMainPage.vue'
import PrivacyManagementPage from '@/components/pages/SettingPage/pages/PrivacyManagementPage.vue'
import MessageNotifyPage from '@/components/pages/SettingPage/pages/MessageNotifyPage.vue'
import AboutInfiFashionPage from '@/components/pages/SettingPage/pages/AboutInfiFashionPage.vue'
import FeedbackPage from '@/components/pages/FeedbackPage.vue'
import FollowingPage from '@/components/pages/FollowingPage.vue'
import DemandPage from '@/components/pages/DemandPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: '',
    component: FirstLoadingPage
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
        component: TalentHomePage,
        children: [
          {
            path: 'costume-designing',
            name: 'CostumeDesigningPage',
            component: CostumeDesigningPage
          }
        ]
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
        path: 'findpassword',
        name: 'FindPasswordPage',
        component: FindPasswordPage,
        children: [
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
  },
  {
    path: '/collection',
    name: 'CollectionPage',
    component: CollectionPage
  },
  {
    path: '/setting',
    name: 'SettingPage',
    redirect: '/settingmain',
    component: SettingPage,
    children: [
      {
        path: '/settingmain',
        name: 'SettingMainPage',
        component: SettingMainPage
      },
      {
        path: '/userinfo',
        name: 'UserInfoPage',
        component: UserInfoPage
      },
      {
        path: '/countsecurity',
        name: 'CountSecurityPage',
        component: CountSecurityPage
      },
      {
        path: '/privacymanagment',
        name: 'PrivacyManagementPage',
        component: PrivacyManagementPage
      },
      {
        path: '/messagenotify',
        name: 'MessageNotifyPage',
        component: MessageNotifyPage
      },
      {
        path: 'aboutinfifashion',
        name: 'AboutInfiFashionPage',
        component: AboutInfiFashionPage
      }
    ]
  },
  {
    path: '/history',
    name: 'HistoryPage',
    redirect: '/service',
    component: HistoryPage,
    children: [
      {
        path: '/service',
        name: 'ServicePage',
        component: ServicePage
      }
    ]
  },
  {
    path: '/order',
    name: 'OrderFormPage',
    component: OrderFormPage
  },
  {
    path: '/identity-switch',
    name: 'IdentitySwitchPage',
    component: IdentitySwitchPage
  },
  {
    path: '/send-message/:id',
    name: 'SendMessagePage',
    component: SendMessagePage
  },
  {
    path: '/feedback',
    name: 'FeedbackPage',
    component: FeedbackPage
  },
  {
    path: '/following',
    name: 'FollowingPage',
    component: FollowingPage
  },
  {
    path: '/demand',
    name: 'DemandPage',
    component: DemandPage
  }
]

export default new VueRouter({
  routes
})
