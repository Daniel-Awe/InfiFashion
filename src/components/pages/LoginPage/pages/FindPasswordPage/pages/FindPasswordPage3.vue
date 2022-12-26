<template>
  <div class="container">
    <img
      :src="require('@/assets/pictures/identity_card.png')"
      alt=""
      class="identityCardImg"
    />
    <div class="message">请输入您本人身份证号码的前两位与后四位</div>
    <div class="numberInputBoxContainer" @click="inputFocus">
      <div class="numberInputBox">-</div>
      <div class="numberInputBox">-</div>
      <div class="mask">******</div>
      <div class="numberInputBox">-</div>
      <div class="numberInputBox">-</div>
      <div class="numberInputBox">-</div>
      <div class="numberInputBox">-</div>
      <input
        type="text"
        v-model="number"
        class="numberInput"
        ref="numberInput"
        @input="handleNumberInput"
        maxlength="6"
      />
    </div>
    <CrossButton title="下一步" class="button" @click="nextStep" />
  </div>
</template>

<script>
import CrossButton from "@/components/CrossButton.vue";
export default {
  name: "FindPasswordPage3",
  components: {  CrossButton },
  data() {
    return {
      number: null,
    };
  },
  methods: {
    nextStep() {
      this.$router.push({
        name: "FindPasswordPage4",
      });
    },
    inputFocus() {
      this.$refs.numberInput.focus();
    },
    handleNumberInput() {
      let numberInputBoxs = document.getElementsByClassName("numberInputBox");
      for (let i = 0; i < 6; i++) {
        numberInputBoxs[i].innerHTML = "-";
      }
      for (let i = 0; i < this.number.length; i++) {
        numberInputBoxs[i].innerHTML = this.number[i];
      }
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
.identityCardImg {
  width: 7.5rem;
  margin-top: 1.875rem;
}
.message {
  margin-top: 0.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.numberInputBoxContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 19.6875rem;
  margin-top: 1.625rem;
}
.numberInputBox {
  width: 1.875rem;
  height: 1.875rem;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
  border-bottom: 2px solid rgba(212, 210, 216, 1);
}
.numberInput {
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
.mask {
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 1.875rem;
  color: rgba(166, 166, 166, 1);
}
.button {
  margin-top: 1.875rem;
}
</style>