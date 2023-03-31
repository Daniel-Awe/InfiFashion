<template>
  <div class="container">
    <TopBar class="topbar">
      <RoutePopButton style="margin-right: 12px" />
      <div class="title">意见与反馈</div>
      <div class="edit">编辑</div>
    </TopBar>
    <div class="question" style="margin-top: 20px">
      <div class="title">常见问题</div>
      <div>
        <FeedbackButton class="bgc" v-for="(item, key) in question" :key="key" :text="item.text"><template>InfiFashion使用指南</template></FeedbackButton>
      </div>
    </div>
    <div class="feedback" style="margin-top: 1.25rem; padding: 0.625rem 1.25rem">
      <div class="title" style="margin: 0">意见与反馈</div>
      <TextInputArea :maxlength="100" v-model="description" placeholder="请填写详细问题，问题越详细越有可能解决哦！"></TextInputArea>
      <UploadBox class="uploadBox">
        <template slot="fileBox" slot-scope="{ file }">
          <div class="file box">
            <img class="background" v-if="file.type.indexOf('image') === 0" :src="file.url" alt="" @click="imagePreviewUrl = file.url" />
          </div>
        </template>
        <template slot="addBox">
          <div class="add box">
            <img class="plus" :src="require('@/assets/svg/plus.svg')" alt="" />
          </div>
        </template>
      </UploadBox>
      <!-- 有bug，控制手机号最多输入13位，在input=number时maxlength会失效 -->
      <TextInputRow :maxlength="13" v-model="phone" placeholder="请输入手机号（必填）" style="margin-top: 0.3125rem"></TextInputRow>
    </div>
    <CrossButton :title="'提交反馈'" style="margin: 0 auto; margin-top: 2.5rem"></CrossButton>
  </div>
</template>

<script>
import RoutePopButton from '../RoutePopButton.vue'
import TopBar from '../TopBar.vue'
import FeedbackButton from './FeedbackPage/FeedbackButton.vue'
import UploadBox from '../UploadBox.vue'
import TextInputArea from './FeedbackPage/TextInputArea.vue'
import TextInputRow from './FeedbackPage/TextInputRow.vue'
import CrossButton from '../CrossButton.vue'
export default {
  name: 'FeedbackPage',
  components: { TopBar, RoutePopButton, FeedbackButton, TextInputArea, TextInputRow, CrossButton, UploadBox },
  data() {
    return {
      description: '',
      phone: '',
      question: [{ text: 'InfiFashion使用指南' }, { text: '如何注销InfiFashion账号？' }, { text: '如何更换绑定？如何解绑手机号？' }, { text: '更多功能、售后及服务问题' }]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: $--background-color-base;
}
.topbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  .title {
    font-size: 1.125rem;
    font-weight: 700;
    color: rgba(51, 51, 51, 1);
    align-self: center;
  }
  .edit {
    margin-right: 16px;
    /** 文本1 */
    font-size: 12px;
    font-weight: 700;
    color: rgba(51, 51, 51, 1);

    width: 2rem;
  }
}
.question,
.feedback {
  width: 100%;
  background-color: #fff;
  padding-top: 10px;
  box-sizing: border-box;
  .title {
    margin-left: 20px;
    font-size: 15px;
    font-weight: 700;
  }
}
.feedback {
  position: relative;
  .uploadBox {
    display: flex;
    position: absolute;
    bottom: 4.375rem;
    left: 1.875rem;
    /deep/ .box {
      position: relative;
      width: 2.5rem;
      height: 2.5rem;

      border: 0.0625rem dashed rgba(216, 216, 216, 1);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.file {
        .background {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .cover {
          position: absolute;
        }
      }

      &.add .plus {
        width: 1.25rem;
        height: 20px;
      }
    }
  }
}
.bgc {
  background-color: #fff;
}
</style>
