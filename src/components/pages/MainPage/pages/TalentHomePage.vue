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
    </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import SearchBox from "./HomePage/SearchBox.vue";

export default {
    components: { TopBar, SearchBox },
    name: "TalentHomePage",
};
</script>

<style lang="scss" scoped>
</style>