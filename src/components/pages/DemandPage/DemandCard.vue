<template>
  <div>
    <div class="container" v-show="menustate === '全部' || menustate === demand.state">
      <div class="title">{{ tryGet(demand, ['service', 'title']) }}</div>
      <div class="state">{{ tryGet(demand, 'state') }}</div>
      <div class="content">
        <div class="detail">你公开了需求</div>
        <div class="date">{{ tryGet(demand, 'date') }}</div>
      </div>
      <div class="foot">查看详情</div>
    </div>
  </div>
</template>

<script>
import { helper } from '@/mixin'
export default {
  name: 'DemandCard',
  props: {
    demand: Object,
    menustate: String
  },
  mixins: [helper]
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  box-sizing: border-box;
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0.625rem;
  border-radius: 5px;
  background-color: #fff;
  .title {
    width: 17.5rem;
    font: {
      size: 0.875rem;
      weight: 700;
    }
  }
  .state {
    position: absolute;
    right: 0.625rem;
    top: 0.625rem;
    color: $--color-primary;
    font-size: 0.875rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
    margin: 0.625rem 0;
    padding: 0 0.75rem;
    line-height: 1.875rem;
    height: 1.875rem;
    border-radius: 5px;
    background-color: rgba(245, 242, 250, 1);
    .detail {
      font-size: 0.75rem;
    }
    .date {
      font-size: 0.625rem;
      color: rgba(128, 128, 128, 1);
    }
  }
  .foot {
    margin-left: auto;
    width: 6.25rem;
    height: 1.75rem;
    border-radius: 0.875rem;
    border: 1px solid rgba(128, 128, 128, 1);
    text-align: center;
    line-height: 1.75rem;
    font-size: 0.875rem;
  }
}
</style>
