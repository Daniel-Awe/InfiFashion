<template>
  <div class="container">
      <img :src="require()" alt="">
  </div>
</template>

<script>
export default {
  name: "HistoryCard",
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 10px 0px 10px 15px;
}
</style>