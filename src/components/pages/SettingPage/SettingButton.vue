<template>
  <div>
    <div class="button" @click="$router.push({ name: points.routeName })" style="margin-top: 0" :class="points.detail ? 'detailnoexist' : 'detailexist'">
      <div>
        <div class="title">{{ points.title }}</div>
        <div class="detail" v-if="points.detail">{{ points.detail }}</div>
      </div>
      <div class="right">
        <img :src="require('@/assets/svg/arrow_right.svg')" />
      </div>
    </div>
    <div class="gap" v-if="points.gap == true"></div>
  </div>
</template>

<script>
export default {
  name: 'SettingButton',
  props: {
    points: Object
  }
}
</script>

<style lang="scss" scoped>
.gap {
  width: 100%;
  height: 10px;
  background-color: $--background-color-base;
}

.button {
  position: relative;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid $--border-color-base;
  box-sizing: border-box;
  .title {
    height: 20px;
    font-size: 14px;
    text-align: left;
  }
  .detail {
    height: 17px;
    font-size: 12px;
    text-align: left;
    color: rgba(128, 128, 128, 1);
  }
  .right {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.detailnoexist {
  padding: 9px 16px 7.5px 20px;
}
.detailexist {
  padding: 12px 16px 12px 20px;
}
</style>
