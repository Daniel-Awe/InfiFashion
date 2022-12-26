<template>
  <div class="container">
    <img
      :src="require('@/assets/svg/mine_line.svg')"
      alt=""
      style="margin-top: 1.25rem"
    />
    <div class="userName">
      {{ userName | maskString(1, 3, 1) }}
    </div>
    <div class="message">
      <div>验证码将发送到绑定手机号</div>
      <div>
        {{
          $route.params.phoneNumber === undefined
            ? "88888888888"
            : $route.params.phoneNumber | maskString(3, 4, 4)
        }}
      </div>
    </div>
    <div class="inputAndButton">
      <input type="text" class="input" placeholder="请输入验证码" />
      <div class="getCodeButton">获取验证码</div>
    </div>
    <CrossButton title="下一步" class="button" @click="nextStep" />
  </div>
</template>

<script>
import CrossButton from "@/components/CrossButton.vue";
export default {
  name: "FindPasswordPage1",
  components: { CrossButton },
  data() {
    return {
      userName: "衣啦啦啦饰",
    };
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "FindPasswordPage3" });
    },
  },
  mounted() {
    // console.log(
    //   this.$route.params.phoneNumber === undefined
    //     ? "88888888888"
    //     : this.$route.params.phoneNumber
    // );
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
.userName,
.message {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.9375rem;
}
.inputAndButton {
  width: 100%;
  height: 2.75rem;
  margin-top: 1.25rem;
  background: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.input {
  margin-left: 1.25rem;
  padding: 0 0 0 2px;
  border: none;
  outline: none;
  line-height: 2.75rem;
}
.input::placeholder {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(128, 128, 128, 1);
}
.getCodeButton {
  float: right;
  margin-right: 1.25rem;
  line-height: 2.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(128, 128, 128, 1);
}
.button {
  margin-top: 1.875rem;
}
</style>