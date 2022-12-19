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
import BottomNavigationBar from "./MainPage/BottomNavigationBar.vue";

export default {
    name: "MainPage",
    components: {
        BottomNavigationBar,
    },
    data() {
        return {
            scrollTop: 0,
            bottomNavigationDatas: [
                {
                    title: "首页",
                    selectedIconUrl: require("@/assets/icons/home_fill.svg"),
                    unselectedIconUrl: require("@/assets/icons/home_line.svg"),
                    routeName: "HomePage",
                },
                {
                    title: "论坛",
                    selectedIconUrl: require("@/assets/icons/comment_fill.svg"),
                    unselectedIconUrl: require("@/assets/icons/comment_line.svg"),
                    routeName: "ForumPage",
                },
                {
                    title: "发布需求",
                    selectedIconUrl: require("@/assets/icons/edit_fill.svg"),
                    unselectedIconUrl: require("@/assets/icons/edit_line.svg"),
                    routeName: "PublishPage",
                },
                {
                    title: "消息",
                    selectedIconUrl: require("@/assets/icons/mail_fill.svg"),
                    unselectedIconUrl: require("@/assets/icons/mail_line.svg"),
                    routeName: undefined,
                },
                {
                    title: "我的",
                    selectedIconUrl: require("@/assets/icons/user_fill.svg"),
                    unselectedIconUrl: require("@/assets/icons/user_line.svg"),
                    routeName: "UserPage",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.view {
    background-color: @background-color;
    flex-grow: 1;

    overflow-y: hidden;
}

.bt {
    width: 100%;
    height: max-content;
    padding: 0.3125rem 0;
}
</style>
