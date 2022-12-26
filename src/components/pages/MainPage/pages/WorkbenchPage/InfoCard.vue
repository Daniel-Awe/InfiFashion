<template>
  <div class="container">
    <div class="header">
      <div class="title">{{ title }}</div>
      <el-select class="select" v-model="selected">
        <el-option
          v-for="(item, index) in selections"
          :key="index"
          :value="item.label"
        >
        </el-option>
      </el-select>
    </div>
    <div class="divideLine"></div>
    <div class="infoList">
      <InfoItem
        v-for="(item, index) in infoItems"
        :key="index"
        :value="item.value"
        :title="item.title"
      />
    </div>
    <div class="viewMore">
      <div style="margin-right: 5px">查看更多数据</div>
      <img :src="require('@/assets/svg/icon_arrow_right.svg')" alt="" />
    </div>
  </div>
</template>

<script>
import InfoItem from "./InfoItem.vue";
export default {
  components: { InfoItem },
  name: "InfoCard",
  props: ["title", "infoItems"],
  data() {
    return {
      selected: "本月",
      selections: [{ label: "本月" }, { label: "上月" }],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 13px 5px 13px;
  width: 324px !important;
  opacity: 1;
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 14px;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
}
.select {
  width: 100px;
}
/deep/.el-input {
  width: 65px;
  //   height: 25px !important;
}
/deep/ .el-input__inner {
  height: 25px;
  border: none;
  border-color: none;
  border-radius: 1000px;
  background-color: rgba(229, 229, 229, 1);
  padding: 0;
  padding-left: 7px;
  /** 文本1 */
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
/deep/ .el-input__icon {
  line-height: 25px !important;
}
.divideLine {
  margin: 8px 0px 15px 0px;
  width: 325px;
  height: 0.47px;
  opacity: 1;
  background: rgba(216, 216, 216, 1);
}
.infoList {
  padding-left: 35px;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 20px;
}
.viewMore {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 13px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
</style>