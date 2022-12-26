<template>
  <div class="container">
    <div class="message">请设置新的登录密码</div>
    <el-input v-model="password" show-password class="passwordInput" placeholder="8到16位，不能与旧密码相同"></el-input>
    <CrossButton title="完成" class="button"/>
  </div>
</template>

<script>
import CrossButton from '@/components/CrossButton.vue';
export default {
  name: "FindPasswordPage4",
  components: { CrossButton },
  data() {
    return {
      password: null,
    };
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
.message {
  margin-right: auto;
  margin-left: 1.25rem;
  margin-top: 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
}
.passwordInput{
  width: 100%;
  margin-top: 0.625rem;
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
  background: rgba(255, 255, 255, 1)
}
/deep/.el-input__inner {
  &::placeholder {
    color: rgba(128, 128, 128, 1);
    font-size: 0.875rem;

    font-family: "PingFang";
    font-weight: 500;
    color: rgba(128, 128, 128, 1);
  }
  border: none;
  background-color: transparent;
}
.button{
  margin-top: 1.875rem;
}
</style>