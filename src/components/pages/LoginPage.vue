<template>
  <div class="container">
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.view {
  background-color: $--background-color-base;
  flex-grow: 1;

  overflow-y: hidden;
}
</style>