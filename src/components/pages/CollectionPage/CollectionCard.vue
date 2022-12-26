<template>
  <div class="root">
    <div class="left">
      <div class="articleInfo" v-if="tryGet(collection, ['type']) == 'article'">
        <RoundAvatar
          :src="tryGet(collection, ['author', 'avatar'])"
          class="avatar"
        />
        <div class="nameAndDate">
          <div class="name">{{ tryGet(collection, ["name"]) }}</div>
          <div class="date">{{ tryGet(collection, ["date"]) }}</div>
        </div>
      </div>
      <div class="teamInfo" v-if="tryGet(collection, ['type']) == 'team'">
        <div class="name">{{ tryGet(collection, ["name"]) }}</div>
        <div class="price">￥{{ tryGet(collection, ["price"]) }}/起</div>
      </div>
      <div class="title">{{ tryGet(collection, ["title"]) }}</div>
      <div class="agreeAndComment">
        <div class="agree">{{ tryGet(collection, ["agree"]) }}点赞</div>
        <div class="comment">{{ tryGet(collection, ["comment"]) }}评论</div>
      </div>
    </div>
    <img :src="tryGet(collection, ['picture'])" alt="" class="right" />
  </div>
</template>

<script>
import RoundAvatar from "@/components/RoundAvatar.vue";
import { helper } from "@/mixin";
export default {
  name: "CollectionCard",
  components: { RoundAvatar },
  props: {
    collection: Object,
  },
  mixins: [helper],
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  padding: 10px 0px 10px 0px;
  width: 100%;
  // height: 90px;
  background-color: white;
}
.articleInfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 196px;
}
.teamInfo {
  display: flex;
  flex-direction: column;
  align-items: left;
  .name {
    font-size: 14px;
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
  }
}
.nameAndDate {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 8px;
}
.name,
.price {
  /** 文本1 */
  font-size: 14px;
  font-weight: 700;
  color: $--color-primary;
}
.price{
  margin-top: 5px;
}
.date {
  font-size: 12px;
  font-weight: 700;
  color: rgba(128, 128, 128, 1);
}
.title {
  margin-top: 10px;
  margin-left: 5px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
}
.agreeAndComment {
  margin-left: 2px;
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: 500;
  color: rgba(128, 128, 128, 1);
}
.agree,
.comment {
  margin-right: 5px;
  transform: scale(0.8333);
}
.right {
  width: 120px;
  height: 90px;
  border-radius: 5px;
}
</style>