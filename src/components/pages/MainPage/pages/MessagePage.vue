<template>
    <div>
        <TopBar class="topBar row">
            <span style="margin-left: 25px" class="row">
                <span class="title">消息</span>
                <span
                    style="margin-left: 10px; transform: translateY(1px)"
                    class="clearButton row"
                >
                    <span>全部已读</span>
                    <img
                        style="margin-left: 5px"
                        src="@/assets/svg/sweep_line.svg"
                    />
                </span>
            </span>
            <img
                style="margin-right: 20px"
                src="@/assets/svg/people_line.svg"
            />
        </TopBar>
    </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
export default {
    components: { TopBar },
    name: "MessagePage",
};
</script>

<style lang="scss" scoped>
.topBar {
    color: $--color-white;
    .title {
        @include font-size-style(1);
        font-weight: bold;
    }

    .clearButton {
        @include font-size-style(4);
    }
}
.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>