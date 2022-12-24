<template>
  <div class="box" @click="routePop">
    <img :src="require('@/assets/svg/route_pop_fill.svg')" alt="" />
  </div>
</template>

<script>
export default {
  name:'RoutePopButton',
  methods:{
    routePop(){
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  margin-left: 0.875rem;
  width: 1.125rem;
  height: 1.125rem;
}
</style>