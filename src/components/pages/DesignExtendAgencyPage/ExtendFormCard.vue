<template>
  <!-- 包装推广 -->
  <div>
    <div class="container">
      <div class="main">
        <img :src="tryGet(detailsCard, 'avatar')" alt="" class="left" />
        <div class="right">
          <div class="design-title">{{ tryGet(detailsCard, 'name') }}</div>
          <div class="price">{{ tryGet(detailsCard, 'price') }}</div>
          <div class="info">
            <span class="text">分数 {{ tryGet(detailsCard, 'score') }}</span>
            <span class="text">评价 {{ tryGet(detailsCard, 'comment') }}</span>
            <span class="text">点赞 {{ tryGet(detailsCard, 'agree') }}</span>
          </div>
        </div>
      </div>
      <div class="intro">{{ tryGet(detailsCard, 'introduce') }}</div>
      <LongButton title="立即咨询" class="longbutton"></LongButton>
    </div>
  </div>
</template>

<script>
import { helper } from '@/mixin'
import LongButton from '@/components/LongButton.vue'
export default {
  name: 'ExtendFormCard',
  components: { LongButton },
  props: {
    menuType: String,
    detailsCard: Object
  },
  mixins: [helper]
}
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  width: 90%;
  margin: 0 auto;
  padding: 0.625rem;
  .main {
    display: flex;
    justify-content: space-between;
    .left {
      width: 120px;
      height: 90px;
      border-radius: 5px;
    }
    .right {
      position: relative;
      @include title-size-weight;
      .design-title {
        width: 12.5rem;
        max-height: 2.3125rem;
        overflow: scroll;
      }
      .price {
        color: $--color-primary;
        margin-top: 0.375rem;
      }
      .info {
        position: absolute;
        top: 65px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin-top: auto;
        margin-bottom: 0;
        width: 200px;
        height: 1.625rem;
        opacity: 1;
        border-radius: 5px;
        background: rgba(245, 242, 250, 1);
        .text {
          /** 文本1 */
          font-size: 10px;
          font-weight: 500;
          color: rgba(128, 128, 128, 1);
          transform: scale(0.8333);
        }
      }
    }
  }
  .intro {
    margin-top: 0.4375rem;
    width: 20.3125rem;
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
    //超出部分，文末出现省略号
    width: 28em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .longbutton {
    margin-left: auto;
    margin-top: 0.625rem;
  }
}
</style>
