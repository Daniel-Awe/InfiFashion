<template>
  <div class="main">
    <SettingTopBar><template #default>关于InfiFashion</template></SettingTopBar>
    <div class="logo"><img src="@/assets/pictures/login_logo.png" alt="" /></div>
    <div class="reviewbox">
      <div class="positive review">好评</div>
      <div class="negative review">差评</div>
    </div>
    <div class="setting">
      <SettingButton v-for="(item, key) in points" :key="key" :points="item"></SettingButton>
    </div>
  </div>
</template>

<script>
import SettingButton from '../SettingButton.vue'
import SettingTopBar from '../SettingTopBar.vue'
export default {
  name: 'AboutInfiFashionPage',
  components: { SettingButton, SettingTopBar },
  data() {
    return {
      points: [{ setting: '版本更新', prompt: 'V1.0.0' }, { setting: '功能介绍' }, { setting: '举报信息' }, { setting: '版权信息' }]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .logo {
    width: 6.25rem;
    margin: 0 auto;
    margin-top: 1.875rem;
    margin-bottom: 2.5rem;
    img {
      flex: 1;
      width: 6.25rem;
    }
  }
  .reviewbox {
    display: flex;
    width: 100%;
    background-color: #fff;
    height: 44px;
    font-size: 14px;
    margin-bottom: 16px;
    div {
      width: 50%;
      padding: 7px 63px;
    }
  }
}
</style>
