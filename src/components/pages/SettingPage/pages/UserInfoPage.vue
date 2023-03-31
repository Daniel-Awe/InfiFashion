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
      <UserInfoButton>
        <template #setting>昵称</template>
        <template #descripte>
          <p>{{ tryGet(user, 'name') }}</p>
        </template>
      </UserInfoButton>
      <UserInfoButton>
        <template #setting>性别</template>
        <template #descripte>
          <p>{{ tryGet(user, 'sex') }}</p>
        </template>
      </UserInfoButton>
      <UserInfoButton>
        <template #setting>自我介绍</template>
        <template #descripte>
          <p>{{ tryGet(user, 'name') }}</p>
        </template>
      </UserInfoButton>
      <UserInfoButton>
        <template #setting>我的收获地址</template>
      </UserInfoButton>
    </div>
  </div>
</template>

<script>
import SettingTopBar from '../SettingTopBar.vue'
import UserInfoButton from '../UserInfoButton.vue'
import { helper } from '@/mixin'

import { mapState } from 'vuex'
export default {
  name: 'UserInfoPage',
  components: { SettingTopBar, UserInfoButton },
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
  background-color: #fff;
  font-size: 14px;
  padding-left: 20px;
  border-bottom: 1px solid $--border-color-base;
  p {
    height: 20px;
  }
  .left {
    width: 70px;
    font-weight: 500;
  }
  .introduce {
    width: 250px;
    color: $--color-info;
    overflow: hidden;
  }
  .right {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
