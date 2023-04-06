<template>
  <div class="container">
    <TopBar class="topBar" style="margin-bottom: 0.625rem">
      <RoutePopButton style="margin-right: 12px" />
      <SearchBox class="searchBox" placeholder="搜索已关注的人">
        <div class="button">搜索</div>
      </SearchBox>
      <div class="placeholder"></div>
    </TopBar>
    <div class="gap" style="height: 75px"></div>
    <div class="view" v-loading="!followingDatas">
      <FollowingCard v-for="(item, key) in followingDatas" :key="key" :following="item"></FollowingCard>
    </div>
  </div>
</template>

<script>
import { getFollowingDatas } from '@/api/index.js'
import RoutePopButton from '../RoutePopButton.vue'
import SearchBox from '../SearchBox.vue'
import TopBar from '../TopBar.vue'
import FollowingCard from './FollowingPage/FollowingCard.vue'
export default {
  name: 'FollowingPage',
  components: { RoutePopButton, SearchBox, TopBar, FollowingCard },
  data() {
    return {
      followingDatas: null
    }
  },
  created() {
    getFollowingDatas().then(response => {
      this.followingDatas = response.myFollowing
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
.topBar {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
  .placeholder {
    width: 2rem;
  }
  .searchBox {
    width: 300px;
    .button {
      position: relative;
      left: 1px;
      //   position：用于右侧贴合
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 60px;
      background-color: $--color-primary;
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
  background-color: $--background-color-base !important;
}
</style>
