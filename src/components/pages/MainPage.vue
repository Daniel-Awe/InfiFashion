<template>
    <div class="container">
        <div class="view">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <BottomNavigationBar class="bt" :datas="bottomNavigationDatas" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import BottomNavigationBar from "./MainPage/BottomNavigationBar.vue";

export default {
    name: "MainPage",
    components: {
        BottomNavigationBar,
    },
    data() {
        return {
            scrollTop: 0,
            bottomNavigationDatas: null,
            merchantDatas: [
                {
                    title: "首页",
                    selectedIconUrl: require("@/assets/svg/home_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/home_line.svg"),
                    routeName: "HomePage",
                },
                {
                    title: "论坛",
                    selectedIconUrl: require("@/assets/svg/comment_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/comment_line.svg"),
                    routeName: "ForumPage",
                },
                {
                    title: "发布需求",
                    selectedIconUrl: require("@/assets/svg/edit_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/edit_line.svg"),
                    routeName: "PublishPage",
                },
                {
                    title: "消息",
                    selectedIconUrl: require("@/assets/svg/mail_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/mail_line.svg"),
                    routeName: "MessagePage",
                },
                {
                    title: "我的",
                    selectedIconUrl: require("@/assets/svg/user_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/user_line.svg"),
                    routeName: "UserPage",
                },
            ],
            talentDatas: [
                {
                    title: "首页",
                    selectedIconUrl: require("@/assets/svg/home_talent_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/home_line.svg"),
                    routeName: "HomePage",
                },
                {
                    title: "论坛",
                    selectedIconUrl: require("@/assets/svg/comment_talent_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/comment_line.svg"),
                    routeName: "ForumPage",
                },
                {
                    title: "工作台",
                    selectedIconUrl: require("@/assets/svg/workbench_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/workbench_line.svg"),
                    routeName: "WorkbenchPage",
                },
                {
                    title: "消息",
                    selectedIconUrl: require("@/assets/svg/mail_talent_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/mail_line.svg"),
                    routeName: "MessagePage",
                },
                {
                    title: "我的",
                    selectedIconUrl: require("@/assets/svg/user_talent_fill.svg"),
                    unselectedIconUrl: require("@/assets/svg/user_line.svg"),
                    routeName: "UserPage",
                },
            ],
        };
    },
    activated() {
        switch (this.type) {
            case "merchant":
                this.bottomNavigationDatas = this.merchantDatas;
                break;

            case "talent":
                this.bottomNavigationDatas = this.talentDatas;
                break;
        }
    },
    computed: {
        ...mapGetters("loginInfo", ["type"]),
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.view {
    background-color: $--background-color-base;
    flex-grow: 1;

    overflow-y: hidden;
}

.bt {
    width: 100%;
    height: max-content;
    padding: 0.3125rem 0;
}
</style>
