<template>
  <div class="button">{{ title }}</div>
</template>

<script>
export default {
  name: 'LongButton',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.button {
  @include title-size-weight;
  width: 6.25rem;
  height: 1.75rem;
  border-radius: 0.875rem;
  background-color: $--color-primary;
  color: #fff;
  line-height: 1.75rem;
  text-align: center;
}
</style>
