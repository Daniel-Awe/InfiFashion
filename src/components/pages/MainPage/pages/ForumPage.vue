<template>
    <div class="container">
        <TopBar class="topBar">
            <span class="title">论坛</span>
        </TopBar>
        <div class="view">
            <div v-loading="!forumDatas">
                <SlideshowBox
                    class="slideshowBox"
                    :datas="tryGet(forumDatas, ['slideshow', 'pictures'])"
                >
                    <template slot-scope="{ data }">
                        <img class="slideshowImage" :src="data" alt="" />
                    </template>
                </SlideshowBox>
            </div>
            <div style="margin-top: 1.25rem" class="imageButtonContainer">
                <ImageButton
                    v-for="(item, key) in sortDatas"
                    :key="key"
                    :iconUrl="item.iconUrl"
                    :title="item.title"
                    @click="$router.push({ name: item.routeName })"
                />
            </div>
            <div style="margin-top: 1rem" v-loading="!articles">
                <ArticleCard
                    v-for="(item, key) in articles"
                    :key="key"
                    :article="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { getAllArticles, getForumDatas } from "@/api";
import TopBar from "@/components/TopBar.vue";
import SlideshowBox from "@/components/SlideshowBox.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import ImageButton from "../../../ImageButton.vue";
import { helper } from "@/mixin";

export default {
    name: "ForumPage",
    components: {
        TopBar,
        SlideshowBox,
        ArticleCard,
        ImageButton,
    },
    data() {
        return {
            forumDatas: undefined,
            articles: undefined,
            sortDatas: [
                {
                    title: "流行趋势",
                    iconUrl: require("@/assets/svg/articles/trend.svg"),
                    routeName: undefined,
                },
                {
                    title: "服饰文化",
                    iconUrl: require("@/assets/svg/articles/culture.svg"),
                    routeName: undefined,
                },
                {
                    title: "经验分享",
                    iconUrl: require("@/assets/svg/articles/communicate.svg"),
                    routeName: undefined,
                },
                {
                    title: "成功案例",
                    iconUrl: require("@/assets/svg/articles/achievement.svg"),
                    routeName: undefined,
                },
            ],
        };
    },
    created() {
        getForumDatas().then((response) => {
            this.forumDatas = response;
        });

        getAllArticles().then((response) => {
            this.articles = response;
        });
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .topBar {
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
            @include font-size-style(1);
            font-weight: 700;
            width: max-content;
            height: max-content;
            color: $--color-white;
        }
    }

    .view {
        flex-grow: 1;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.3125rem;
    }
}

.slideshowBox {
    border-radius: 0.3125rem;
    overflow: hidden;

    width: 21.875rem;
    height: 8.75rem;
}
.slideshowImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.imageButtonContainer {
    display: flex;
    flex-direction: row;
    gap: 1.5625rem;

    /deep/ .title {
        @include font-size-style(3);
        font-weight: 700;
        color: $--color-text-primary;
    }
}
</style>