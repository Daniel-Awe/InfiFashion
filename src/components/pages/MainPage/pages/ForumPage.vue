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
            <div>
                <LoadingView :isLoading="!articles">
                    <ArticleCard
                        v-for="(item, key) in articles"
                        :key="key"
                        :article="item"
                    />
                </LoadingView>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllArticles, getForumDatas } from "@/api";
import TopBar from "@/components/TopBar.vue";
import SlideshowBox from "@/components/SlideshowBox.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import LoadingView from "@/components/LoadingView.vue";

export default {
    name: "ForumPage",
    components: { TopBar, SlideshowBox, ArticleCard, LoadingView },
    data() {
        return {
            forumDatas: undefined,
            articles: undefined,
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
</style>