<template>
  <div class="container">
    <div class="labelAndInput">
      <div class="label">账号</div>
      <input
        type="text"
        class="input"
        placeholder="请输入手机号"
        v-model="phoneNumber"
      />
    </div>
    <CrossButton class="button" title="下一步" @click="nextStep" />
  </div>
</template>

<script>
import CrossButton from "@/components/CrossButton.vue";
export default {
  name: "FindPasswordPage1",
  components: {  CrossButton },
  data() {
    return {
      phoneNumber: "",
    };
  },
  methods: {
    nextStep() {
      this.$router.push({
        name: "FindPasswordPage2",
        params: {
          phoneNumber: this.phoneNumber,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.labelAndInput {
  width: 100%;
  height: 2.75rem;
  opacity: 1;
  margin-top: 0.625rem;
  background: rgba(255, 255, 255, 1);
  border-bottom: solid 1px rgba(216, 216, 216, 1);
}
.label {
  float: left;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 2.75rem;
  margin: 0 1.25rem 0 1.25rem;
}
.input {
  height: 2.75rem;
  border: 0px;
  padding: 0px;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  outline: none;
}
.input::placeholder {
  color: rgba(128, 128, 128, 1);
}
.button {
  margin-top: 1.875rem;
}
</style>