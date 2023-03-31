<template>
  <div>
    <div class="container" style="margin-top: 0.625rem">
      <textarea class="text" :value="value" :placeholder="placeholder" @input="handleInput" :maxlength="maxlength"></textarea>

      <div class="counter">{{ value.length }}/{{ maxlength }}</div>
    </div>
  </div>
</template>

<script>
// import UploadBox from '@/components/UploadBox.vue'
export default {
  name: 'TextInputArea',
  //   components: { UploadBox },
  methods: {
    handleInput(ev) {
      /** @type HTMLTextAreaElement */
      const textarea = ev.target
      this.$emit('input', textarea.value)
      //   this.valueLength = textarea.value.length
      textarea.style.height = '0'
      textarea.style.height = `${textarea.offsetHeight - textarea.clientHeight + textarea.scrollHeight}px`
    }
  },
  data() {
    return {
      //   valueLength: 0
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    maxlength: Number,
    placeholder: String
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  @include font-size-style(3);
  .text {
    width: 100%;
    min-height: 140px;
    border: 1px solid rgba(229, 229, 229, 1);
    box-sizing: border-box;
    outline: none;
    color: $--color-text-primary;
    border-radius: 5px;
    padding: 0.625rem;
    background: rgba(245, 242, 250, 1);
    resize: none;
  }
  .filebox {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(10px, -10px);
  }
  .counter {
    position: absolute;
    bottom: 0;
    right: 0;
    @include font-size-style(4);

    color: $--color-text-secondary;
    font-weight: 500;

    transform: translate(-10px, -10px);
  }
}
</style>
