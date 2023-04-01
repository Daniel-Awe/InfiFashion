<template>
  <div>
    <div class="container">
      <TopBar class="topBar">
        <RoutePopButton style="margin-right: 12px" />
        <SearchBox class="searchBox" placeholder="搜索已关注的人">
          <div class="button">搜索</div>
        </SearchBox>
        <div class="placeholder"></div>
      </TopBar>
    </div>
  </div>
</template>

<script>
import RoutePopButton from '../RoutePopButton.vue'
import SearchBox from '../SearchBox.vue'
import TopBar from '../TopBar.vue'
export default {
  name: 'FollowingPage',
  components: { RoutePopButton, SearchBox, TopBar },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.topBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
}
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
</style>
