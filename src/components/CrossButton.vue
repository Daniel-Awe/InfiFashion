<template>
  <div class="button" @click="$emit('click')">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "CrossButton",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 20.25rem;
  height: 2.75rem;
  opacity: 1;
  border-radius: 10px;
  background: rgba(216, 191, 255, 1);
  font-size: 14px;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
}
</style>