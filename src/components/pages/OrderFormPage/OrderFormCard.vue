<template>
  <div class="root">
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
      <div class="payment">实付款：{{ tryGet(order, ["payment"]) }}</div>
      <div class="button"><div class="text">删除订单</div></div>
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
.root {
  margin-top: 10px;
  width: 100%;
  background: rgb(255, 255, 255);
}
.head {
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .title {
    /** 文本1 */
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
  }
  .state {
    margin-right: 10px;
    /** 文本1 */
    font-size: 14px;
    font-weight: 500;
    color: $--color-primary;
  }
}
.img {
  width: 120px;
  height: 90px;
  border-radius: 5px;
}
.body {
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  .name {
    /** 文本1 */
    font-size: 14px;
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
  }
  .price {
    /** 文本1 */
    font-size: 14px;
    font-weight: 700;
    color: rgba(143, 121, 212, 1);
  }
  .date {
    font-size: 10px;
    font-weight: 500;
    color: rgba(128, 128, 128, 1);
  }
  .right{
    margin-right: 10px;
    margin-left: 15px;
  }
}
.foot {
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: right;
  .payment {
    margin-right: 10px;
    margin-left: auto;
    font-size: 14px;
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
  }
}
.button {
  margin-right: 10px !important;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 28px;
  border-radius: 16px;

  border: 1px solid rgba(128, 128, 128, 1);
  .text {
  }
}
</style>