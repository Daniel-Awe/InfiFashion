<template>
  <div class="container">
    <div class="text">{{ text }}</div>
    <div class="arrow"><img :src="require('@/assets/svg/arrow_right.svg')" /></div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackButton',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 44px;
  margin-left: 1.25rem;
  padding: 12px 20px 12px 0;
  border-bottom: 1px solid $--border-color-base;
  background-color: red;
  .text {
    @include font-size-style(3);
    font-weight: 500;
  }
  .arrow {
    height: 20px;
  }
}
</style>
