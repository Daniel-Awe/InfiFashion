<template>
    <div class="container">
        <TopBar ref="topBar" class="topBar">
            <img
                style="margin-left: 0.625rem"
                :src="require('@/assets/svg/location_line.svg')"
                alt=""
            />
            <SearchBox
                class="searchBox"
                style="margin-left: 0.75rem; margin-right: 1.81rem"
                v-model="searchContent"
            />
        </TopBar>
        <div ref="view" class="view" @scroll="topBarUpdate()">
            <img
                ref="backgroundPicture"
                width="100%"
                :src="require('@/assets/pictures/home_top_background.png')"
                alt=""
                @load="topBarUpdate()"
            />
            <div style="padding: 0.625rem">
                <PageDivider title="提供服务" />
                <div class="row unitBox">
                    <ProminentButton
                        v-for="(item, key) in provideServices"
                        :key="key"
                        :title="item.title"
                        :iconUrl="item.iconUrl"
                        :subtitle="item.subtitle"
                        @click="$router.push({ name: item.routeName })"
                    />
                </div>
                <PageDivider
                    title="金牌团队"
                    :hasMore="true"
                    @clickMore="$router.push({ name: undefined })"
                />
                <div class="row unitBox" v-loading="!goldTeams">
                    <GroupInfoBox
                        v-for="(item, key) in goldTeams"
                        :key="key"
                        :team="item"
                        @click="
                            $router.push({
                                name: 'TeamInformationPage',
                                params: {
                                    id: item.id,
                                },
                            })
                        "
                    />
                </div>
                <PageDivider
                    title="行业资讯"
                    :hasMore="true"
                    @clickMore="$router.push({ name: undefined })"
                />
                <div class="col unitBox" v-loading="!latestArticle">
                    <ArticleCard :article="latestArticle" />
                </div>
            </div>
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
import { helper } from "@/mixin";

export default {
    components: {
        SearchBox,
        PageDivider,
        ProminentButton,
        GroupInfoBox,
        ArticleCard,
        TopBar,
    },
    name: "HomePage",
    data() {
        return {
            searchContent: "",
            provideServices: [
                {
                    title: "设计团队",
                    subtitle: "Design",
                    iconUrl: require("@/assets/svg/services/group.svg"),
                    routeName: undefined,
                },
                {
                    title: "包装推广",
                    subtitle: "Extend",
                    iconUrl: require("@/assets/svg/services/design_work.svg"),
                    routeName: undefined,
                },
                {
                    title: "代理顾问",
                    subtitle: "Agent",
                    iconUrl: require("@/assets/svg/services/asking.svg"),
                    routeName: undefined,
                },
            ],
            goldTeams: undefined,
            latestArticle: undefined,
        };
    },
    methods: {
        topBarUpdate() {
            /** @type Element */
            const topBar = this.$refs.topBar.$el;
            const scrollTop = this.$refs.view.scrollTop;
            const backgroundPicture = this.$refs.backgroundPicture;
            if (
                backgroundPicture.clientHeight !== 0 &&
                scrollTop > backgroundPicture.clientHeight - topBar.clientHeight
            ) {
                topBar.classList.add("notop");
            } else {
                topBar.classList.remove("notop");
            }
        },
    },
    mounted() {
        this.topBarUpdate();
    },
    created() {
        getAllTeams().then((response) => {
            this.goldTeams = response.slice(0, 2);
        });

        getNewArticles(1).then((response) => {
            this.latestArticle = response[0];
        });
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;

    .topBar {
        position: absolute;
        top: 0;

        display: flex;
        align-items: center;

        background-color: transparent;
        transition: background-color 0.2s;

        &.notop {
            background-color: $--color-primary;
        }
    }

    .view {
        // flex-grow: 1;
        overflow-y: scroll;
    }
}

.searchBox {
    flex-grow: 1;
}

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
</style>
