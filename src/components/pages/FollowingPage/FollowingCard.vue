<template>
  <div>
    <div class="container">
      <RoundAvatar class="avatar" :src="following.avatar"></RoundAvatar>
      <div style="margin-left: 0.5rem">
        <div class="name">{{ following.name }}</div>
        <div class="introduce">{{ following.introduce }}</div>
      </div>
      <div class="followed">已关注</div>
    </div>
  </div>
</template>

<script>
import RoundAvatar from '@/components/RoundAvatar.vue'
import { helper } from '@/mixin'
export default {
  name: 'FollowingCard',
  components: { RoundAvatar },
  props: {
    following: Object
  },
  mixin: [helper]
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  padding: 0.5625rem 0.8125rem;
  background-color: $--background-color-base;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #fff;
  .avatar {
    width: 2.375rem;
    height: 2.375rem;
  }
  .name {
    font-size: 16px;
    font-weight: 700;
  }
  .introduce {
    width: 15.625rem;
    height: 1.25rem;
    font-size: 12px;
    color: rgba(56, 56, 56, 1);
    overflow: hidden;
  }
  .followed {
    width: 2.8125rem;
    font-weight: 500;
    margin: auto 0;
  }
}
</style>
