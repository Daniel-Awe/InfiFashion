<template>
  <div class="root">
    <div class="text1">{{ title }}</div>
    <div class="text2">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "InfoItem",
  props: ["title", "value"],
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  /* background-color: red; */
  width: 110px;
}
.text1 {
  font-size: 12px;
  font-weight: 500;
  color: rgba(128, 128, 128, 1);
}
.text2 {
  font-size: 12px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
}
</style>