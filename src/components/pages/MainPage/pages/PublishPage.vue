<template>
    <div class="container">
        <TopBar class="topBar">
            <span class="title">发布需求</span>
        </TopBar>
        <div class="view">
            <UploadBox class="uploadBox">
                <template slot="head">
                    <div class="tip">点击添加附件/长按排序</div>
                </template>
            </UploadBox>
        </div>
    </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import UploadBox from "@/components/UploadBox.vue";

export default {
    components: { TopBar, UploadBox },
    name: "PublishPage",
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .topBar {
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
            .font-size-style(1);
            font-weight: bold;
            width: max-content;
            height: max-content;
            color: @light-color;
        }
    }

    .view {
        flex-grow: 1;
        overflow-y: scroll;
    }
}

.uploadBox {
    .tip {
        padding: 0.375rem 0.9375rem 0.3125rem 0.9375rem;
        .font-size-style(4);
        color: rgb(176, 176, 176);
        background-color: rgba(231, 217, 255, 0.2);
    }
}
</style>