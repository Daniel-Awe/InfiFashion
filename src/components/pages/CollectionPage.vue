<template>
  <div class="container">
    <TopBar class="topbar">
      <RoutePopButton style="margin-right: 12px" />
      <div class="title">我的收藏</div>
      <div class="edit">编辑</div>
    </TopBar>
    <div class="view">
      <CollectionCard
        v-for="(collection, index) in collections"
        :key="index"
        :collection="collection"
      />
      <div class="noMore">暂无更多</div>
    </div>
  </div>
</template>

<script>
import { getCollectionDatas } from "@/api/index.js";
import RoutePopButton from "../RoutePopButton.vue";
import TopBar from "../TopBar.vue";
import CollectionCard from "./CollectionPage/CollectionCard.vue";

export default {
  name: "CollectionPage",
  components: { TopBar, RoutePopButton, CollectionCard },
  data() {
    return {
      collections: null,
    };
  },
  created() {
    getCollectionDatas().then((response) => {
      this.collections = response;
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: $--background-color-base;
  overflow-y: hidden;
}
.topbar {
  position: absolute;
  top: 0;
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
.edit {
  margin-right: 16px;
  /** 文本1 */
  font-size: 12px;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);

  width: 2rem;
}
.view {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.noMore {
  margin-top: 10px;
  /** 文本1 */
  font-size: 12px;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
</style>