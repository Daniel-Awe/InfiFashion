<template>
  <div>
    <div class="container" @click="$router.push({ name: points.routeName })" style="margin-top: 0" :class="points.detail ? 'detailyes' : 'detailno'">
      <div>
        <div class="setting">{{ points.setting }}</div>
        <div class="detail" v-if="points.detail">{{ points.detail }}</div>
      </div>
      <div class="right">
        <!-- 软件版本 -->
        <div v-if="points.prompt" class="prompt">{{ points.prompt }}</div>
        <!-- 新消息通知 -->
        <div v-else-if="points.notifyswitch" class="notify">
          {{ points.notifyswitch ? '已开启' : '已关闭' }}
        </div>
        <!-- 右箭头 -->
        <img :src="require('@/assets/svg/arrow_right.svg')" v-else />
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

.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid $--border-color-base;
  box-sizing: border-box;
  .setting {
    height: 20px;
    font-size: 14px;
    text-align: left;
    font-weight: 500;
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
    .prompt {
      color: rgba(128, 128, 128, 1);
    }
    .notify {
      color: rgba(128, 128, 128, 1);
      font-size: 14px;
    }
  }
}
.detailyes {
  padding: 9px 16px 7.5px 20px;
}
.detailno {
  padding: 12px 16px 12px 20px;
}
</style>
