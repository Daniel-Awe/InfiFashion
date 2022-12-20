<template>
    <div class="articleCardContainer">
        <div style="margin-top: 4px" class="head">
            <RoundAvatar :src="tryGet(article, ['author', 'avatar'])" />
            <span style="margin-left: 8px" class="text">
                <div class="name">
                    {{ tryGet(article, ["author", "name"]) }}
                </div>
                <div class="date">{{ tryGet(article, "date") }}</div>
            </span>
            <RoundButton class="button" title="关注" />
        </div>
        <div style="margin-top: 9px" class="title">
            {{ tryGet(article, "title") }}
        </div>
        <img
            style="margin: 10px auto"
            class="picture"
            :src="tryGet(article, 'picture')"
            alt=""
        />
        <div class="operation">
            <span class="item" v-for="(item, key) in operations" :key="key">
                <img :src="item.iconUrl" alt="" />
                <p style="margin-left: 4px">
                    {{ tryGet(article, item.key) }}
                </p>
            </span>
        </div>
    </div>
</template>

<script>
import RoundAvatar from "@/components/RoundAvatar.vue";
import RoundButton from "@/components/RoundButton.vue";
import { helper } from "@/mixin";

export default {
    name: "ArticleCard",
    components: { RoundAvatar, RoundButton },
    data() {
        return {
            operations: [
                {
                    key: "agree",
                    iconUrl: require("@/assets/svg/thumb_up_line.svg"),
                },
                {
                    key: "collect",
                    iconUrl: require("@/assets/svg/star_line.svg"),
                },
                {
                    key: "comment",
                    iconUrl: require("@/assets/svg/message_line.svg"),
                },
                {
                    key: "share",
                    iconUrl: require("@/assets/svg/share_line.svg"),
                },
            ],
        };
    },
    props: {
        article: Object,
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
.articleCardContainer {
    width: 21.875rem;
    border-radius: 0.3125rem;
    background-color: $light-color;

    box-sizing: border-box;
    padding: 5px 10px;

    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.head {
    display: flex;
    align-items: center;
}
.text {
    flex-grow: 1;
}
.button {
    background-color: $primary-color;
    color: $light-color;
}
.name {
    @include font-size-style(3);
    font-weight: bold;
    color: $primary-color;
}
.date {
    @include font-size-style(4);
    font-weight: bold;
    color: $font-color3;
}
.title {
    @include font-size-style(4);
    color: $font-color1;

    @include font-ellipsis();
}
.picture {
    width: 19.375rem;
    border-radius: 0.125rem;
}
.operation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
        display: flex;
        align-items: center;
        p {
            @include font-size-style(4);
            color: $font-color2;

            margin: 0;
        }
    }
}
</style>