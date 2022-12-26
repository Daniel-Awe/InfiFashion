<template>
  <div class="container">
    <TopBar class="topbar">
      <RoutePopButton />
      <div class="title">忘记密码</div>
      <div class="placeholder"></div>
    </TopBar>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import RoutePopButton from "@/components/RoutePopButton.vue";
export default {
  components: { TopBar, RoutePopButton },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.view {
  background-color: $--background-color-base;
  flex-grow: 1;

  overflow-y: hidden;
}

.topbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1); //不知道为啥失效了，在更改路由结构前有用的
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