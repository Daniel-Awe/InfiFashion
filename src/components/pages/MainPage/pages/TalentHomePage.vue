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
                placeholder="请输入关键词搜索"
            />
        </TopBar>
        <el-menu
            mode="horizontal"
            :default-active="menuActiveIndex.toString()"
            @select="handleSelect"
        >
            <el-menu-item
                v-for="(item, key) in menuItems"
                :key="key"
                :index="key.toString()"
            >
                <p>{{ item.title }}</p>
            </el-menu-item>
        </el-menu>
        <div class="view">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SearchBox from "../../../SearchBox.vue";

export default {
    components: { TopBar, SearchBox },
    name: "TalentHomePage",
    data() {
        return {
            searchContent: "",
            menuActiveIndex: "0",
            menuItems: [
                {
                    title: "服装设计",
                    routeName: "CostumeDesigningPage",
                },
                {
                    title: "其他配饰设计",
                    routeName: undefined,
                },
                {
                    title: "包装推广服务",
                    routeName: undefined,
                },
            ],
        };
    },
    methods: {
        handleSelect(index) {
            this.menuActiveIndex = index;
            this.$router.push(
                { name: this.menuItems[index].routeName },
                null,
                () => {}
            );
        },
    },
    watch: {
        menuActiveIndex() {
            this.handleSelect(this.menuActiveIndex);
        },
    },
    activated() {
        this.handleSelect(this.menuActiveIndex);
    },
};
</script>

<style lang="scss" scoped>
.container {
    @include flex-style(column);

    .topBar {
        @include flex-style(row);
        .searchBox {
            flex-grow: 1;
        }
    }

    .el-menu {
        width: 100%;
        background: $--color-white;

        @include flex-style(row);
        justify-content: space-around;

        .el-menu-item {
            padding: 0;

            height: max-content;

            text-align: center;

            @include font-size-style(4);
            color: $--color-black;

            p {
                line-height: 100%;
                margin: 5px;
                font-weight: 400;
            }

            &.is-active {
                p {
                    font-weight: 700;
                }
            }
        }
    }

    .view {
        width: 100%;
        height: 0;
        flex-grow: 1;
        overflow-y: scroll;
    }
}
</style>