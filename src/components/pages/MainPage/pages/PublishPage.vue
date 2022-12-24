<template>
    <div class="container">
        <TopBar class="topBar">
            <span class="title">发布需求</span>
        </TopBar>
        <div class="view">
            <div class="tip">点击添加附件/长按排序</div>
            <div style="padding: 0.9375rem">
                <UploadBox ref="uploadBox" class="uploadBox">
                    <template slot="fileBox" slot-scope="{ file }">
                        <div class="file box">
                            <img
                                class="background"
                                v-if="file.type.indexOf('image') === 0"
                                :src="file.url"
                                alt=""
                                @click="imagePreviewUrl = file.url"
                            />
                            <div class="cover">
                                {{ file.name }}
                            </div>
                        </div>
                    </template>
                    <template slot="addBox">
                        <div class="add box">
                            <img
                                class="plus"
                                :src="require('@/assets/svg/plus.svg')"
                                alt=""
                            />
                        </div>
                    </template>
                </UploadBox>
                <TextInputRow
                    style="margin-top: 1.25rem"
                    type="text"
                    placeholder="请输入标题"
                    :maxlength="50"
                    v-model="title"
                />
                <TextInputRow
                    type="number"
                    placeholder="请输入联系手机号"
                    v-model="phone"
                />
                <TextInputRow
                    type="text"
                    placeholder="需求分类"
                    v-model="type"
                />
                <TextInputArea
                    style="margin-top: 1.25rem"
                    title="请输入作品说明"
                    v-model="description"
                    :maxlength="2000"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import UploadBox from "@/components/UploadBox.vue";
import TextInputRow from "./PublishPage/TextInputRow.vue";
import TextInputArea from "./PublishPage/TextInputArea.vue";

export default {
    components: { TopBar, UploadBox, TextInputRow, TextInputArea },
    name: "PublishPage",
    data() {
        return {
            imagePreviewUrl: undefined,
            title: "",
            phone: "",
            type: "",
            description: "",
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
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
            @include font-size-style(1);
            font-weight: bold;
            width: max-content;
            height: max-content;
            color: $--color-white;
        }
    }

    .view {
        flex-grow: 1;
        overflow-y: scroll;

        .tip {
            padding: 0.375rem 0.9375rem 0.3125rem 0.9375rem;
            @include font-size-style(4);
            color: rgb(176, 176, 176);
            background-color: rgba(231, 217, 255, 0.2);
        }
        .uploadBox {
            display: flex;
            justify-content: center;

            /deep/ .box {
                position: relative;
                width: 5.5rem;
                height: 5.5rem;

                border: 0.0625rem dashed rgba(216, 216, 216, 1);

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                &.file {
                    .background {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                    }
                    .cover {
                        position: absolute;
                    }
                }

                &.add .plus {
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
    }
}
</style>