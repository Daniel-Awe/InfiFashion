<template>
    <div>
        <TopBar ref="topBar" class="topBar">
            <img
                class="locationIcon"
                style="margin-left: 0.625rem"
                :src="require('@/assets/icons/location_line.svg')"
                alt=""
            />
            <SearchBox
                class="searchBox"
                style="margin-left: 0.75rem; margin-right: 1.81rem"
                v-model="searchContent"
            />
        </TopBar>
        <img
            width="100%"
            :src="require('@/assets/pictures/home_top_bg.png')"
            alt=""
        />
        <div class="container">
            <PageDivider title="提供服务" />
            <div class="row unitBox">
                <ProminentButton
                    v-for="(item, key) in provideServices"
                    :key="key"
                    :title="item.title"
                    :iconUrl="item.iconUrl"
                    :subtitle="item.subtitle"
                    @click="
                        $router.push(item.routeName, undefined, (reason) => {
                            console.log(reason);
                        })
                    "
                />
            </div>
            <PageDivider title="金牌团队" :hasMore="true" />
            <LoadingView class="row unitBox" :isLoading="!goldTeams">
                <GroupInfoBox
                    v-for="(item, key) in goldTeams"
                    :key="key"
                    :team="item"
                />
            </LoadingView>
            <PageDivider title="行业资讯" :hasMore="true" />
            <LoadingView class="unitBox" :isLoading="!latestArticle">
                <ArticleCard v-if="latestArticle" :article="latestArticle" />
            </LoadingView>
        </div>
    </div>
</template>

<script>
import { getAllTeams, getNewArticles } from "@/api/index.js";
import SearchBox from "./HomePage/SearchBox.vue";
import PageDivider from "./HomePage/PageDivider.vue";
import ProminentButton from "./HomePage/ProminentButton.vue";
import GroupInfoBox from "./HomePage/GroupInfoBox.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import TopBar from "@/components/TopBar.vue";
import LoadingView from "@/components/LoadingView.vue";

export default {
    components: {
        SearchBox,
        PageDivider,
        ProminentButton,
        GroupInfoBox,
        ArticleCard,
        TopBar,
        LoadingView,
    },
    name: "HomePage",
    data() {
        return {
            searchContent: "",
            provideServices: [
                {
                    title: "设计团队",
                    subtitle: "Design",
                    iconUrl: require("@/assets/icons/services/group.svg"),
                    routeName: undefined,
                },
                {
                    title: "包装推广",
                    subtitle: "Extend",
                    iconUrl: require("@/assets/icons/services/design_work.svg"),
                    routeName: undefined,
                },
                {
                    title: "代理顾问",
                    subtitle: "Agent",
                    iconUrl: require("@/assets/icons/services/asking.svg"),
                    routeName: undefined,
                },
            ],
            goldTeams: undefined,
            latestArticle: undefined,
        };
    },
    methods: {
        scrollEvent() {
            /** @type Element */
            const topBar = this.$refs.topBar.$el;
            const scrollTop = this.$parent.scrollTop;
            if (scrollTop > 140) {
                topBar.classList.add("notop");
            } else {
                topBar.classList.remove("notop");
            }
        },
    },
    watch: {
        "$parent.scrollTop"() {
            this.scrollEvent();
        },
    },
    mounted() {
        this.scrollEvent();

        getAllTeams().then((response) => {
            this.goldTeams = response.slice(0, 2);
        });

        getNewArticles(1).then((response) => {
            this.latestArticle = response[0];
        });
    },
};
</script>

<style lang="less" scoped>
.topBar {
    position: fixed;
    z-index: 1;
    top: 0;

    display: flex;
    align-items: center;

    background-color: transparent;
    transition: background-color 0.2s;
}

.topBar.notop {
    background-color: @primary-color;
}

.locationIcon {
    width: 1.5rem;
    height: 1.5rem;
}

.searchBox {
    flex-grow: 1;
}

.container {
    padding: 0.625rem;

    /deep/ .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    /deep/ .col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /deep/ .unitBox {
        margin: 0.625rem auto 1.25rem auto;
    }
}
</style>
