<template>
  <div>
    <div class="container">
      <div>手机号：</div>
      <input type="number" :placeholder="placeholder" :value="value" @input="handleInput" maxlength="maxlength" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInputRow',
  methods: {
    handleInput(ev) {
      this.$emit('input', ev.target.value)
    }
  },
  props: {
    placeholder: String,
    maxlength: Number,
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  display: flex;
  padding: 0.625rem;
  border-radius: 5px;
  background-color: rgba(245, 242, 250, 1);
  border: 1px solid rgba(229, 229, 229, 1);
  letter-spacing: 0px;

  @include font-size-style(3);
  div {
    font-weight: 500;
  }
  input {
    @include font-size-style(3);
    padding: 0;
    outline: none;
    border: none;
    background: transparent;
  }
}
</style>
