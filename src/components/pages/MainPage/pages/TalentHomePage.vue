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
        <el-menu mode="horizontal">
            <el-menu-item
                v-for="(item, key) in menuItems"
                :key="key"
                :index="key"
            >
                {{ item.title }}
            </el-menu-item>
        </el-menu>
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
            menuActiveIndex: 0,
            menuItems: [
                {
                    title: "服装设计",
                    routeName: undefined,
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
};
</script>

<style lang="scss" scoped>
.container {
    .topBar {
        @include flex-style(row);
        .searchBox {
            flex-grow: 1;
        }
    }
}
</style>