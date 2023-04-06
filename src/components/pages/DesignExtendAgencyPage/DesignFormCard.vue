<template>
  <!-- 代理顾问-->
  <div>
    <div class="container">
      <div class="main">
        <img :src="tryGet(detailsCard, 'cover')" alt="" class="left" />
        <div class="right">
          <div class="design-title">{{ tryGet(detailsCard, 'title') }}</div>
          <div class="price">{{ tryGet(detailsCard, 'price') }}</div>
          <div class="info">
            <span class="text">销量 {{ tryGet(detailsCard, 'buyCount') }}</span>
            <span class="text">评价 {{ tryGet(detailsCard, 'comment') }}</span>
            <span class="text">好评率 {{ tryGet(detailsCard, 'favorableRate') }}</span>
          </div>
        </div>
      </div>
      <div class="designer">{{ tryGet(detailsCard, ['author', 'name']) }}</div>
      <TagBox :tags="tryGet(detailsCard, ['author', 'tags'])" class="tagbox" />
      <LongButton title="立即咨询" class="longbutton"></LongButton>
    </div>
  </div>
</template>

<script>
import TagBox from '@/components/TagBox.vue'
import { helper } from '@/mixin'
import LongButton from '@/components/LongButton.vue'
export default {
  name: 'DesignFormCard',
  components: { LongButton, TagBox },
  props: {
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
        top: 70px;
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
  .designer {
    @include title-size-weight;
    margin: 0.3125rem 0 0 0.125rem;
  }
  .tagbox {
    margin: 0.3125rem 0 0 0.125rem;
  }
  .longbutton {
    margin-left: auto;
    margin-top: 0.625rem;
  }
}
</style>
