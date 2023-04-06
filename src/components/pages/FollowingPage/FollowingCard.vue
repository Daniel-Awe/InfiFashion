<template>
  <div>
    <div class="container">
      <RoundAvatar class="avatar" :src="tryGet(following, 'avatar')"></RoundAvatar>
      <div class="content">
        <div class="name">{{ tryGet(following, 'name') }}</div>
        <div class="intro">{{ tryGet(following, 'introduce') }}</div>
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
  mixins: [helper]
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  position: relative;
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
  .content {
    margin-left: 0.9375rem;
    .name {
      font-size: 16px;
      font-weight: 700;
    }
    .intro {
      height: 1.25rem;
      font-size: 12px;
      color: rgba(56, 56, 56, 1);
      width: 18em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .followed {
    position: absolute;
    right: 0.9375rem;
    top: 50%;
    transform: translateY(-50%);
    margin: auto 0;
    outline: none;

    width: 2.8125rem;
    font-weight: 500;
    margin: auto 0;
  }
}
</style>
