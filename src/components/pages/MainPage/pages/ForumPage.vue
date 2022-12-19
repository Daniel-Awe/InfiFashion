<template>
    <div>
        <TopBar class="topBar">
            <div class="title">{{ "论坛" }}</div>
        </TopBar>
        <div class="container">
            <LoadingView :isLoading="!forumDatas">
                <SlideshowBox
                    class="slideshowBox"
                    v-if="forumDatas"
                    :datas="forumDatas.slideshow.pictures"
                >
                    <template slot-scope="{ data }">
                        <img class="slideshowImage" :src="data" alt="" />
                    </template>
                </SlideshowBox>
            </LoadingView>
            <div style="margin-top: 1.25rem" class="imageButtonContainer">
                <ImageButton
                    v-for="(item, key) in sortDatas"
                    :key="key"
                    :iconUrl="item.iconUrl"
                    :title="item.title"
                />
            </div>
            <LoadingView style="margin-top: 1rem" :isLoading="!articles">
                <ArticleCard
                    v-for="(item, key) in articles"
                    :key="key"
                    :article="item"
                />
            </LoadingView>
        </div>
    </div>
</template>

<script>
import { getAllArticles, getForumDatas } from "@/api";
import TopBar from "@/components/TopBar.vue";
import SlideshowBox from "@/components/SlideshowBox.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import LoadingView from "@/components/LoadingView.vue";
import ImageButton from "./ForumPage/ImageButton.vue";

export default {
    name: "ForumPage",
    components: {
        TopBar,
        SlideshowBox,
        ArticleCard,
        LoadingView,
        ImageButton,
    },
    data() {
        return {
            forumDatas: undefined,
            articles: undefined,
            sortDatas: [
                {
                    title: "流行趋势",
                    iconUrl: require("@/assets/icons/articles/trend.svg"),
                    routeName: undefined,
                },
                {
                    title: "服饰文化",
                    iconUrl: require("@/assets/icons/articles/culture.svg"),
                    routeName: undefined,
                },
                {
                    title: "经验分享",
                    iconUrl: require("@/assets/icons/articles/communicate.svg"),
                    routeName: undefined,
                },
                {
                    title: "成功案例",
                    iconUrl: require("@/assets/icons/articles/achievement.svg"),
                    routeName: undefined,
                },
            ],
        };
    },
    methods: {},
    mounted() {
        getForumDatas().then((response) => {
            this.forumDatas = response;
        });

        getAllArticles().then((response) => {
            this.articles = response;
        });
    },
};
</script>

<style lang="less" scoped>
.topBar {
    position: fixed;
    top: 0;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    .title {
        .font-size-style(1);
        width: max-content;
        height: max-content;
        color: @light-color;
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.3125rem;
    padding-top: 4.06rem;
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
}
</style>