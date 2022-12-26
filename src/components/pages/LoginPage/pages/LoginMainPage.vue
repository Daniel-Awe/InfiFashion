<template>
  <div class="container">
    <TopBar class="topBar">
      <RoutePopButton />
    </TopBar>
    <img :src="require('@/assets/pictures/login_logo.png')" class="loginLogo" />
    <!-- 账号密码登录 -->
    <div class="loginInputDiv" v-if="loginMode == 0">
      <el-input
        v-model="userId"
        placeholder="请输入手机号/邮箱/用户名"
        class="loginInput"
      ></el-input>
      <el-input
        v-model="password"
        show-password
        placeholder="请输入您的密码"
        class="loginInput"
      ></el-input>
    </div>
    <!-- 验证码登录 -->
    <div class="loginInputDiv" v-if="loginMode == 1">
      <el-select v-model="region" placeholder="国家/地区" class="loginInput">
        <el-option
          v-for="region in regions"
          :key="region.code"
          :value="region.code"
          :label="region.country"
        >
        </el-option>
      </el-select>
      <el-input
        v-model="phoneNumber"
        placeholder="请输入手机号"
        class="loginInput"
      ></el-input>
    </div>
    <div class="ServiceAgreement">
      <!-- 下方input数值绑定通过点击事件实现,与serviceAgreement绑定，v-model只用于更改勾选状态  -->
      <input
        type="radio"
        v-model="serviceAgreement"
        value="0"
        @click="ServiceAgreementRadioClick"
        style="margin: 0px 11px 0px 0px"
      />
      <span class="text1">已阅读并同意</span>
      <span class="text2">服务协议</span>
    </div>
    <CrossButton
      class="loginButton"
      title="立即登录"
      v-if="loginMode === 0"
      @click="login"
    />
    <CrossButton
      class="loginButton"
      title="获取验证码"
      @click="handleGetCodeClick"
      v-if="loginMode === 1"
    />
    <div class="rowTextBox">
      <div class="rowText">新用户注册</div>
      <div
        class="rowText"
        @click="switchVerificationCodeLogin"
        v-if="loginMode === 0"
      >
        短信验证码登录
      </div>
      <div class="rowText" @click="switchPasswordLogin" v-if="loginMode === 1">
        账号密码登录
      </div>
      <div class="rowText" v-if="loginMode === 0" @click="handleFindPassword">
        忘记密码
      </div>
    </div>
    <div class="thirdPartyDivider">
      <div class="line"></div>
      <div class="thirdPartyText">第三方账号登录</div>
      <div class="line"></div>
    </div>
    <div class="thirdParty">
      <img :src="require('@/assets/svg/QQ.svg')" alt="" />
      <img :src="require('@/assets/svg/weixin.svg')" alt="" />
      <img :src="require('@/assets/pictures/alipay.png')" alt="" />
    </div>
  </div>
</template>

<script>
import CrossButton from "@/components/CrossButton.vue";
import RoutePopButton from "@/components/RoutePopButton.vue";
import TopBar from "@/components/TopBar.vue";
import { Loading } from 'element-ui';
export default {
  name: "LoginMainPage",
  components: { TopBar, RoutePopButton, CrossButton },
  data() {
    return {
      //用户输入数据
      userId: "",
      password: "",
      phoneNumber: "",
      region: "",
      //地区列表
      regions: [
        {
          country: "马来西亚(+60)",
          code: "60",
        },
        {
          country: "泰国(+66)",
          code: "66",
        },
        {
          country: "中国(+86)",
          code: "86",
        },
        {
          country: "台湾(+886)",
          code: "886",
        },
      ],
      //0选中，false没选中
      serviceAgreement: false,
      //登陆方式flag,0:密码登录,1:短信登录
      loginMode: 0,
    };
  },
  methods: {
    login() {
      const loadingInstance = Loading.service({fullscreen: true, lock: true});
      this.$store.dispatch("doLogin", {
        id: this.userId,
        password: this.password,
      }).then(response=>{
        loadingInstance.close();
        if (response)
          this.$router.push({name:"MainPage"})
        else
          this.$message.error("账号不存在或密码错误")
      }).catch(reason=>{
        loadingInstance.close();
        this.$message.error("登录失败，请重试")
      });
    },
    ServiceAgreementRadioClick(e) {
      if (e.target.value === "0") {
        e.target.value = "1";
        // e.target.checked = true;
        this.serviceAgreement = true; //最后会被默认事件覆盖成"0",这行无效
        // console.log(e.target.checked);
      } else {
        e.target.value = "0";
        // e.target.checked = false;
        this.serviceAgreement = false;
        // console.log(e.target.checked);
      }
    },
    switchVerificationCodeLogin() {
      //切换验证码登录
      this.loginMode = 1;
    },
    switchPasswordLogin() {
      //切换密码登录
      this.loginMode = 0;
    },
    handleGetCodeClick() {
      this.$router.push({
        name: "GetCodePage",
        params: {
          region: this.region,
          phoneNumber: this.phoneNumber,
        },
      });
    },
    handleFindPassword() {
      this.$router.push({
        name: "FindPasswordPage1",
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
.loginInputDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.125rem;
}
.loginInput {
  margin-bottom: 0.9375rem;
  width: 20.25rem;
  height: 2.75rem;
  opacity: 1;
  border-radius: 5px;
  background-color: rgba(249, 249, 249, 1);
  box-shadow: 8px 8px 15px 0px rgba(0, 0, 0, 0.06);
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
.ServiceAgreement {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.9375rem;
  width: 20.25rem;
}
.text1,
.text2 {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 0px;
  color: rgba(128, 128, 128, 1);
}
.text2 {
  color: rgba(42, 130, 228, 1);
}
.loginButton {
  margin-top: 1.875rem;
}
.rowTextBox {
  display: flex;
  flex-direction: row;
  width: 20.25rem;
  justify-content: space-evenly;
  margin-top: 0.625rem;
}
.rowText {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
.thirdPartyDivider {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 20.25rem;
  margin-top: 6.25rem;
}
.line {
  width: 76.51px;
  height: 0px;
  opacity: 1;
  border-bottom: 1px solid rgba(213, 221, 224, 1);
}
.thirdPartyText {
  font-size: 14px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.thirdParty {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 0.9375rem;
  width: 20.25rem;
}
</style>