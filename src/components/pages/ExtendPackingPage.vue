<template>
  <div class="container" style="padding-bottom: 1.25rem">
    <div class="top">
      <TopBar class="topBar">
        <RoutePopButton style="margin-right: 12px" :white="true" />
        <SearchBox class="searchBox" placeholder="输入关键词搜索">
          <div class="button">搜索</div>
        </SearchBox>
        <div class="placeholder"></div>
      </TopBar>
    </div>
    <div class="gap" style="height: 75px"></div>
    <div class="view" v-loading="!extendDatas">
      <ExtendFormCard v-for="(item, key) in extendDatas" :key="key" :detailsCard="item" style="margin-bottom: 0.625rem" />
    </div>
  </div>
</template>

<script>
import { getExtendDatas } from '@/api'
import TopBar from '../TopBar.vue'
import RoutePopButton from '../RoutePopButton.vue'
import SearchBox from '../SearchBox.vue'
import ExtendFormCard from './DesignExtendAgencyPage/ExtendFormCard.vue'
export default {
  name: 'ExtendPackingPage',
  components: { TopBar, RoutePopButton, SearchBox, ExtendFormCard },
  data() {
    return {
      extendDatas: null
    }
  },
  created() {
    getExtendDatas().then(response => {
      this.extendDatas = response.extendTeam
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: $--background-color-base;
}
.top {
  position: fixed;
  top: 0;
  z-index: 1;
}
.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: $--color-primary;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  .placeholder {
    width: 2rem;
  }
  .searchBox {
    width: 300px;
    border: 1px solid rgba(172, 142, 227, 1);
    .button {
      position: relative;
      left: 1px;
      //   position：用于右侧贴合
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 60px;
      border: none;
      background-color: rgba(172, 142, 227, 1);
      /** 文本1 */
      font-size: 12px;
      font-weight: 700;
      color: rgba(255, 255, 255, 1);
    }
  }
}
.gap {
  background-color: $--background-color-base;
}
.view {
  width: 100%;
  min-height: 100%;
  background-color: $--background-color-base;
}
</style>
