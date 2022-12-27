<template>
  <div class="container">
    <div class="head">
      <div class="title">{{ tryGet(order, ["author", "name"]) }}</div>
      <div class="state">{{ tryGet(order, ["state"]) }}</div>
    </div>
    <div class="body">
      <img :src="tryGet(order, ['service', 'cover'])" alt="" class="img" />
      <div class="right">
        <div class="name">{{ tryGet(order, ["service", "title"]) }}</div>
        <div class="price">{{ tryGet(order, ["service", "price"]) }}</div>
        <div class="date">{{ tryGet(order, ["date"]) }}</div>
      </div>
    </div>
    <div class="foot">
      <div class="payment">{{tryGet(order, ["payment"])}}</div>
    </div>
  </div>
</template>

<script>
import { helper } from "@/mixin";
export default {
  name: "OrderFormCard",
  data() {
    return {};
  },
  props: {
    order: Object,
  },
  mixins: [helper],
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background: rgb(255, 255, 255);
}
.head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.img {
  width: 120px;
  height: 90px;
  border-radius: 5px;
}
.body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>