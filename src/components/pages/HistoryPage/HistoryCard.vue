<template>
  <div class="container">
    <div class="service" v-if="tryGet(history, ['type']) == 'service'">
      <img :src="tryGet(history, ['service', 'cover'])" alt="" class="left" />
      <div class="right">
        <div class="title">{{ tryGet(history, ["service", "title"]) }}</div>
        <div class="price">{{ tryGet(history, ["service", "price"]) }}</div>
        <div class="info" v-if="tryGet(history, ['type']) == 'service'">
          <span class="text1"
            >销量 {{ tryGet(history, ["service", "buyCount"]) }}</span
          >
          <span class="text1"
            >评价 {{ tryGet(history, ["service", "comment"]) }}</span
          >
          <span class="text1"
            >好评率 {{ tryGet(history, ["service", "favorableRate"]) }}%</span
          >
        </div>
      </div>
    </div>
    <div class="team" v-if="tryGet(history, ['type']) == 'team'">
      <img :src="tryGet(history, ['team', 'avatar'])" alt="" class="left" />
      <div class="right">
        <div class="name">{{ tryGet(history, ["team", "name"]) }}</div>
        <div class="price">{{ tryGet(history, ["team", "price"]) }}</div>
        <div class="teamTitle">
          {{ tryGet(history, ["team", "title"]) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { helper } from "@/mixin";
export default {
  name: "HistoryCard",
  data() {
    return {
      test: "service",
    };
  },
  props: {
    history: Object,
  },
  mixins: [helper],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 360px;
  margin-top: 5px;
  padding: 10px 0px 10px 15px;
  background-color: white;
}
.service,
.team {
  display: flex;
  flex-direction: row;
}
.left {
  width: 120px;
  height: 90px;
  opacity: 1;
  border-radius: 5px;
}
.right {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.title {
  /** 文本1 */
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
}
.price {
  margin-top: 5px;
  /** 文本1 */
  font-size: 14px;
  font-weight: 700;
  color: $--color-primary;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: auto;
  width: 200px;
  height: 26px;
  opacity: 1;
  border-radius: 5px;
  background: rgba(245, 242, 250, 1);
}
.text1 {
  /** 文本1 */
  font-size: 10px;
  font-weight: 500;
  color: rgba(128, 128, 128, 1);
  transform: scale(0.8333);
}
.teamTitle {
  margin-top: auto;
  /** 文本1 */
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.name {
  /** 文本1 */
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
}
</style>