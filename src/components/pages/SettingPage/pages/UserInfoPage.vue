<template>
  <div class="main">
    <SettingTopBar><template #default>个人信息</template></SettingTopBar>
    <div class="avatarbox">
      <img :src="tryGet(user, 'avatar')" alt="" class="avatar" />
      <p class="avatarchange" @click="handleAddBoxClick">更换头像</p>
      <input ref="avatarinput" type="file" style="display: none" />
      <!-- 只做了按钮，还没做上传头像-上传后端 -->
    </div>
    <div>
      <div class="info">
        <p class="left">昵称</p>
        <p>{{ tryGet(user, 'name') }}</p>
        <div class="right">
          <img :src="require('@/assets/svg/arrow_right.svg')" />
        </div>
      </div>
      <div class="info">
        <p class="left">性别</p>
        <p v-if="tryGet(user, 'sex')">{{ tryGet(user, 'sex') }}</p>
        <p v-else>男</p>
        <div class="right">
          <img :src="require('@/assets/svg/arrow_right.svg')" />
        </div>
      </div>
      <div class="info">
        <p class="left">自我介绍</p>
        <p class="introduce" v-if="tryGet(user, 'introduce')">{{ tryGet(user, 'introduce') }}</p>
        <p class="introduce" v-else>填写企业介绍，让人才更好的发现我</p>
        <div class="right">
          <img :src="require('@/assets/svg/arrow_right.svg')" />
        </div>
      </div>
      <div class="info">
        <p style="width: 120px" class="left">我的收货地址</p>
        <div class="right">
          <img :src="require('@/assets/svg/arrow_right.svg')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingTopBar from '../SettingTopBar.vue'
import { helper } from '@/mixin'

import { mapState } from 'vuex'
export default {
  name: 'UserInfoPage',
  components: { SettingTopBar },
  data() {
    return {}
  },
  methods: {
    handleAddBoxClick() {
      const avatarinput = this.$refs.avatarinput
      avatarinput.click()
    }
  },
  computed: {
    ...mapState('loginInfo', ['user'])
  },
  mixins: [helper]
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
}

.avatarbox {
  position: relative;
  width: 100%;
  height: 123px;
  background-color: #fff;
  .avatar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 3.625rem;
    height: 3.625rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .avatarchange {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translateX(-50%);
    border: 0;
    background-color: #fff;
    color: rgba(128, 128, 128, 1);
    font-size: 14px;
  }
}
.info {
  display: flex;
  position: relative;
  height: 44px;
  background-color: #fff;
  font-size: 14px;
  padding-left: 20px;
  border-bottom: 1px solid $--border-color-base;
  p {
    height: 20px;
  }
  .left {
    width: 70px;
  }
  .introduce {
    color: $--color-info;
  }

  .right {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
