<template>
  <div>
    <TopBar class="topbar">
      <RoutePopButton />
      <div class="title"><slot name="default">设置</slot></div>
      <div class="placeholder"></div>
    </TopBar>
  </div>
</template>

<script>
import RoutePopButton from '@/components/RoutePopButton.vue'
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'SettingTopBar',
  components: { TopBar, RoutePopButton }
}
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}
.title {
  font-size: 1.125rem;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
  align-self: center;
}
.placeholder {
  width: 2rem;
}
</style>
