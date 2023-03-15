<template>
  <div class="settingmain">
    <SettingTopBar>
      <template #default>设置</template>
    </SettingTopBar>
    <div class="main">
      <SettingButton v-for="(item, id) in setting" :key="id" :points="item" @click="$router.push({ name: item.routeName })"></SettingButton>
    </div>
    <CrossButton title="切换账号" class="button" />
    <CrossButton title="退出登录" class="button" @click="logout" />
  </div>
</template>

<script>
import SettingButton from '../SettingButton.vue'
import CrossButton from '@/components/CrossButton.vue'
import SettingTopBar from '../SettingTopBar.vue'
export default {
  name: 'SettingMainPage',
  components: { SettingButton, CrossButton, SettingTopBar },
  methods: {
    logout() {
      this.$store.dispatch('doLogout').then(() => this.$router.push('/'))
    }
  },
  data() {
    return {
      setting: [
        {
          id: '1',
          title: '个人信息',
          detail: '头像、昵称、收获地址',
          routeName: 'UserInfoPage'
        },
        {
          id: '2',
          title: '账号与安全',
          detail: '修改密码、修改手机号、实名认证',
          routeName: 'CountSecurityPage',
          gap: true
        },
        {
          id: '3',
          title: '消息通知设置',
          detail: '',
          routeName: ''
        },
        {
          id: '4',
          title: '隐私管理',
          detail: '',
          routeName: 'PrivacyManagementPage'
        },
        {
          id: '5',
          title: '身份切换',
          detail: '',
          routeName: 'IdentitySwitchPage',
          gap: true
        },
        {
          id: '6',
          title: '个人信息收集清单',
          detail: '',
          routeName: ''
        },
        {
          id: '7',
          title: '第三方共享个人信息清单',
          detail: '',
          routeName: ''
        },
        {
          id: '8',
          title: '了解我们',
          detail: '',
          routeName: ''
        },
        {
          id: '9',
          title: '关于infiFashion',
          detail: '',
          routeName: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.settingmain {
  width: 100%;
  background-color: $--background-color-base;
}
.main {
  width: 100%;
  background-color: white;
  margin-bottom: 15px;
}
.button {
  margin: 5px auto;
}
</style>
