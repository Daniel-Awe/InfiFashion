<template>
  <div class="container">
    <TopBar class="topbar">
      <RoutePopButton />
      <div class="title">设置</div>
      <div class="placeholder"></div>
    </TopBar>
    <div class="debug"></div>
    <CrossButton title="切换账号" class="button" />
    <CrossButton title="退出登录" class="button" @click="logout" />
  </div>
</template>

<script>
import CrossButton from "../CrossButton.vue";
import RoutePopButton from "../RoutePopButton.vue";
import TopBar from "../TopBar.vue";
export default {
  components: { TopBar, RoutePopButton, CrossButton },
  name: "SettingPage",
  methods: {
    logout() {
      this.$store
        .dispatch("doLogout")
        .then(()=>this.$router.push("/"));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $--background-color-base;
}

.topbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
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
.debug {
  margin-top: 10px;
  width: 100%;
  height: 300px;
  background-color: white;
}
.button {
  margin-top: 20px;
}
</style>