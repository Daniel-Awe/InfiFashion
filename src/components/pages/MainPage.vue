<template>
    <div class="container">
        <div class="bg">
            <keep-alive>
                <router-view class="view"></router-view>
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
                    routeName: undefined,
                },
                {
                    title: "发布需求",
                    selectedIconUrl: require("@/assets/icons/edit_fill.svg"),
                    unselectedIconUrl: require("@/assets/icons/edit_line.svg"),
                    routeName: undefined,
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
    methods: {},
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
}

.bg {
    width: 100%;
    min-height: 100%;
    background: @background-color;
    box-sizing: border-box;

    padding-bottom: 3.5rem;
}

.view {
    width: 100%;
    height: 100%;
}

.bt {
    position: fixed;
    bottom: 0;
}
</style>
