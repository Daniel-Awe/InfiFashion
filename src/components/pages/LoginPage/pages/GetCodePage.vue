<template>
  <div class="container">
    <TopBar class="topBar">
      <RoutePopButton />
    </TopBar>
    <img :src="require('@/assets/pictures/login_logo.png')" class="loginLogo" />
    <div class="text1">请输入验证码</div>
    <div class="numberShow">
      <div class="text2">已发送至</div>
      <div>{{ "+" + $route.params.region }}</div>
      <div>{{ $route.params.phoneNumber | maskNumber }}</div>
    </div>
    <div class="codeInputBoxContainer" @click="inputFocus">
      <div class="codeInputBox">-</div>
      <div class="codeInputBox">-</div>
      <div class="codeInputBox">-</div>
      <div class="codeInputBox">-</div>
      <div class="codeInputBox">-</div>
      <div class="codeInputBox">-</div>
      <input
        type="text"
        v-model="code"
        class="codeInput"
        ref="codeInput"
        @input="codeInputInput"
        maxlength="6"
      />
    </div>
    <div class="countDown">重新发送(57)</div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import RoutePopButton from "@/components/RoutePopButton.vue";
export default {
  name: "GetCodePage",
  components: { TopBar, RoutePopButton },
  data() {
    return {
      code: null,
    };
  },
  methods: {
    inputFocus() {
      this.$refs.codeInput.focus();
    },
    codeInputInput() {
      let codeInputBoxs = document.getElementsByClassName("codeInputBox");
      for (let i = 0; i < 6; i++) {
        codeInputBoxs[i].innerHTML = '-';
      }
      for (let i = 0; i < this.code.length; i++) {
        codeInputBoxs[i].innerHTML = this.code[i];
      }
    },
  },
  filters: {
    maskNumber(number) {
      return number.slice(0, 3) + "****" + number.slice(7);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("@/assets/pictures/login_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.topBar {
  display: flex;
  align-items: center;
  background-color: transparent;
}
.loginLogo {
  margin-top: 0.9375rem;
  width: 6.25rem;
  height: 6rem;
  opacity: 1;
}
.text1 {
  margin-top: 1.875rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
}
.text2,
.text3 {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(128, 128, 128, 1);
}
.text3 {
  color: rgba(51, 51, 51, 1);
}
.numberShow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 12.75rem;
}
.codeInputBoxContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 19.6875rem;
  margin-top: 1.625rem;
}
.codeInputBox {
  width: 2.25rem;
  height: 2.25rem;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
  border-bottom: 1px solid rgba(212, 210, 216, 1);
}
.codeInput {
  width: 100%;
  height: 50px;
  position: absolute;
  left: -500px;
  top: -500px;
  box-sizing: border-box;
  color: transparent;
  background-color: transparent;
  opacity: 0;
}
.countDown {
  margin-top: 0.9375rem;
  width: 19.6875rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
</style>