<template>
  <div class="main">
    <SettingTopBar>
      <template #default>消息通知设置</template>
    </SettingTopBar>
    <div class="title">当infiFashion未打开时</div>
    <SettingButton :points="notify"></SettingButton>
    <div class="title gap">当infiFashion打开时</div>
    <SettingSwitch v-for="(item, key) in points" :key="key" :points="item" @update-value="updateValue"></SettingSwitch>
  </div>
</template>

<script>
import SettingTopBar from '../SettingTopBar.vue'
import SettingSwitch from '../SettingSwitch.vue'
import SettingButton from '../SettingButton.vue'
export default {
  name: 'MessageNotifyPage',
  components: { SettingTopBar, SettingSwitch, SettingButton },
  data() {
    return {
      points: [
        { id: '1', setting: 'APP内横幅提醒', value: true },
        { id: '2', setting: '声音提醒', value: false },
        { id: '3', setting: '震动提醒', value: true }
      ],
      notify: { setting: '新消息通知', detail: '可在[设置-通知-InfiFashion]中修改', notifyswitch: true }
    }
  },
  methods: {
    updateValue(targetId, newValue) {
      const index = this.points.findIndex(item => item.id === targetId)
      this.points[index].value = newValue
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background-color: $--background-color-base;
}
.title {
  height: 22px;
  font-size: 12px;
  color: rgba(51, 51, 51, 1);
  padding-left: 20px;
}
.gap {
  padding-top: 10px;
}
</style>
