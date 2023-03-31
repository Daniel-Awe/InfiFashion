<template>
  <div class="settingmain">
    <SettingTopBar>
      <template #default>设置</template>
    </SettingTopBar>
    <div class="main">
      <SettingButton v-for="(item, key) in setting" :key="key" :points="item" @click="$router.push({ name: item.routeName })"></SettingButton>
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
          setting: '个人信息',
          detail: '头像、昵称、收获地址',
          routeName: 'UserInfoPage'
        },
        {
          setting: '账号与安全',
          detail: '修改密码、修改手机号、实名认证',
          routeName: 'CountSecurityPage',
          gap: true
        },
        {
          setting: '消息通知设置',
          detail: '',
          routeName: 'MessageNotifyPage'
        },
        {
          setting: '隐私管理',
          detail: '',
          routeName: 'PrivacyManagementPage'
        },
        {
          setting: '身份切换',
          detail: '',
          routeName: 'IdentitySwitchPage',
          gap: true
        },
        {
          setting: '个人信息收集清单',
          detail: '',
          routeName: ''
        },
        {
          setting: '第三方共享个人信息清单',
          detail: '',
          routeName: ''
        },
        {
          setting: '了解我们',
          detail: '',
          routeName: ''
        },
        {
          setting: '关于infiFashion',
          detail: '',
          routeName: 'AboutInfiFashionPage'
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
