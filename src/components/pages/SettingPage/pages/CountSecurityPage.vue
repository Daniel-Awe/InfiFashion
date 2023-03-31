<template>
  <div class="main">
    <SettingTopBar><template #default>账号与安全</template></SettingTopBar>
    <SettingButton v-for="(item, id) in points" :key="id" :points="item"></SettingButton>
    <!-- 实名认证还没做 -->
  </div>
</template>

<script>
import SettingButton from '@/components/pages/SettingPage/SettingButton.vue'
import SettingTopBar from '../SettingTopBar.vue'
export default {
  name: 'CountSecurityPage',
  components: { SettingButton, SettingTopBar },
  data() {
    return {
      points: [
        {
          id: '1',
          setting: '修改绑定收集号码',
          routeName: null
        },
        {
          id: '2',
          setting: '修改登录密码',
          routeName: null
        },
        {
          id: '3',
          setting: '修改绑定邮箱',
          routeName: null
        },
        {
          id: '4',
          setting: '第三方账号解绑',
          routeName: null
        },
        {
          id: '5',
          setting: '注销账户',
          routeName: null,
          gap: true
        },
        {
          id: '6',
          setting: '实名认证',
          routeName: null
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background-color: white;
}
</style>
