<template>
  <div class="container">
    <div class="view">
      <div class="dateDivide">今天</div>
      <HistoryCard
        v-for="(item, index) in history"
        :key="index"
        :history="item"
      />
      <div class="dateDivide">更早</div>
    </div>
  </div>
</template>

<script>
import { getHistoryDatas } from "@/api/index.js";
import HistoryCard from "../HistoryCard.vue";
export default {
  name: "ServicePage",
  components: { HistoryCard },
  data() {
    return {
      history: null,
    };
  },
  created() {
    getHistoryDatas().then((response) => {
      this.history = response;
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  overflow-y: hidden;
}
.view {
  height: 85%;
  overflow-y: scroll;
}
.dateDivide {
  margin-top: 10px;
  margin-left: 20px;
  /** 文本1 */
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
</style>