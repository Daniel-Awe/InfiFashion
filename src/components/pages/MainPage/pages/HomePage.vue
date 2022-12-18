<template>
    <div>
        <div class="topBar" style="padding-top: 1.125rem" ref="topBar">
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
        </div>
        <img
            width="100%"
            :src="require('@/assets/pictures/home_top_bg.png')"
            alt=""
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
                />
            </div>
            <PageDivider title="金牌团队" :hasMore="true" />
            <div class="row unitBox">
                <GroupInfoBox
                    v-for="(item, key) in goldTeams"
                    :key="key"
                    :team="item"
                />
            </div>
            <PageDivider title="行业资讯" :hasMore="true" />
            <ArticleCard
                class="unitBox"
                v-if="latestArticle"
                :article="latestArticle"
            />
        </div>
    </div>
</template>

<script>
import SearchBox from "./Home/SearchBox.vue";
import PageDivider from "./Home/PageDivider.vue";
import ProminentButton from "./Home/ProminentButton.vue";
import GroupInfoBox from "./Home/GroupInfoBox.vue";
import ArticleCard from "@/components/ArticleCard.vue";

import { getAllTeams, getNewArticles } from "@/api/index.js";

export default {
    components: {
        SearchBox,
        PageDivider,
        ProminentButton,
        GroupInfoBox,
        ArticleCard,
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
                    route: "Design__blankRoute",
                },
                {
                    title: "包装推广",
                    subtitle: "Extend",
                    iconUrl: require("@/assets/icons/services/design_work.svg"),
                    route: "Extend__blankRoute",
                },
                {
                    title: "代理顾问",
                    subtitle: "Agent",
                    iconUrl: require("@/assets/icons/services/asking.svg"),
                    route: "Agent__blankRoute",
                },
            ],
            goldTeams: [],
            latestArticle: undefined,
        };
    },
    methods: {
        scrollEvent() {
            /** @type Element */
            let topBar = this.$refs.topBar;
            if (window.scrollY > 140) {
                topBar.classList.add("notop");
            } else {
                topBar.classList.remove("notop");
            }
        },
    },
    async created() {
        window.addEventListener("scroll", this.scrollEvent);

        {
            const response = await getAllTeams();
            this.goldTeams = response.slice(0, 2);
        }

        {
            const response = await getNewArticles(1);
            this.latestArticle = response[0];
        }
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollEvent);
    },
};
</script>

<style lang="less" scoped>
.topBar {
    position: fixed;
    top: 0;

    width: 100%;
    height: 2.88rem;

    display: flex;
    align-items: center;

    transition: background-color 0.2s;
}

.topBar.notop {
    background: @primary-color;
}

.locationIcon {
    width: 1.5rem;
    height: 1.5rem;
}

.searchBox {
    flex-grow: 1;
}

.row {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.col {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.unitBox {
    margin: 0.625rem auto 1.25rem auto;
}
</style>
