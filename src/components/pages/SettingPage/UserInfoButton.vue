<template>
  <div>
    <div class="info">
      <p class="left"><slot name="setting"></slot></p>
      <slot name="descripte"></slot>
      <div class="right">
        <img :src="require('@/assets/svg/arrow_right.svg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoButton',
  props: ['setting', 'descripte']
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  position: relative;
  background-color: #fff;
  font-size: 14px;
  padding-left: 20px;
  border-bottom: 1px solid $--border-color-base;
  p {
    height: 20px;
  }
  .left {
    width: 85px;
    font-weight: 500;
  }
  .introduce {
    width: 250px;
    color: $--color-info;
    overflow: hidden;
  }
  .right {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
