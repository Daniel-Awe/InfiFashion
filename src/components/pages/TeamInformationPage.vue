<template>
    <div class="container">
        <TopBar class="topBar">
            <img
                @click="$router.go(-1)"
                :src="require('@/assets/svg/back_arrow.svg')"
            />
            <div>团队详情</div>
            <img :src="require('@/assets/svg/page_share.svg')" />
        </TopBar>
    </div>
</template>

<script>
import TopBar from "../TopBar.vue";
export default {
    components: { TopBar },
    name: "TeamInformationPage",
};
</script>

<style lang="scss" scoped>
.container {
    .topBar {
        @include flex-style(row);
    }
}
</style>