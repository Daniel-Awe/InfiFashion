<template>
  <div class="main">
    <SettingTopBar><template #default>隐私管理</template></SettingTopBar>
    <div class="box">
      <div class="topic">权限管理</div>
      <SettingButton v-for="(item, id) in permissions" :key="id" :points="item" @click="$router.push({ name: item.routeName })"></SettingButton>
    </div>
    <div class="box">
      <div class="topic gap">隐私说明</div>
      <SettingButton v-for="(item, id) in privacy" :key="id" :points="item" @click="$router.push({ name: item.routeName })"></SettingButton>
    </div>
  </div>
</template>

<script>
import SettingButton from '@/components/pages/SettingPage/SettingButton.vue'
import SettingTopBar from '../SettingTopBar.vue'
export default {
  name: 'PrivacyManagementPage',
  components: { SettingButton, SettingTopBar },
  data() {
    return {
      permissions: [
        {
          setting: '推荐管理',
          detail: '管理个性化推荐内容展示',
          routeName: ''
        },
        {
          setting: '营销类电话管理',
          detail: '开启后，将为你推荐更符合你需求的优质服务',
          routeName: ''
        }
      ],
      privacy: [
        {
          setting: '个人信息保护政策',
          routeName: ''
        },
        {
          setting: '个人信息下载',
          routeName: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
  background-color: $--background-color-base;
}
.topic {
  height: 22px;
  width: 100%;
  font-size: 12px;
  color: rgba(51, 51, 51, 1);
  text-align: left;
  padding: 0 0 2px 20px;
}
.gap {
  padding-top: 10px;
}
</style>
