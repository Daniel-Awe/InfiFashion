<template>
  <div class="box" @click="routePop">
    <img :src="white ? require('@/assets/svg/route_pop_fill_white.svg') : require('@/assets/svg/route_pop_fill_black.svg')" alt="" />
  </div>
</template>

<script>
export default {
  name:'RoutePopButton',
  methods:{
    routePop(){
      this.$router.back();
    }
  },
  props:{
    white:Boolean,
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.875rem;
  width: 1.125rem;
  height: 1.125rem;
}
</style>