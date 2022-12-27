<template>
    <div class="container">
        <TopBar class="topBar row" style="justify-content: space-between">
            <span style="margin-left: 1.5625rem" class="row">
                <span class="title">消息</span>
                <span
                    style="
                        margin-left: 0.625rem;
                        transform: translateY(0.0625rem);
                    "
                    class="clearButton row"
                >
                    <span>全部已读</span>
                    <img
                        style="margin-left: 0.3125rem"
                        src="@/assets/svg/sweep_line.svg"
                    />
                </span>
            </span>
            <img
                style="margin-right: 1.25rem"
                src="@/assets/svg/people_line.svg"
            />
        </TopBar>
        <div class="view" v-loading="!dialogues">
            <div class="tip" v-if="!dialogues || dialogues.length === 0">
                暂无消息
            </div>
            <MessageItem
                style="width: 100%"
                v-else
                v-for="(item, key) in dialogues"
                :key="key"
                :data="item"
            ></MessageItem>
        </div>
    </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import MessageItem from "./MessagePage/MessageItem.vue";
import { getDialogues } from "@/api";
import { mapGetters, mapState } from "vuex";
import { helper } from "@/mixin";
export default {
    components: { TopBar, MessageItem },
    name: "MessagePage",
    data() {
        return {
            dialogues: undefined,
        };
    },
    async activated() {
        if (this.isLogin) {
            await this.waitUntil(() => this.user !== null);
            this.dialogues = await getDialogues();
        } else {
            this.dialogues = [];
        }
    },
    computed: {
        ...mapState("loginInfo", ["user"]),
        ...mapGetters("loginInfo", ["isLogin"]),
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
.topBar {
    color: $--color-white;
    .title {
        @include font-size-style(1);
        font-weight: 700;
    }

    .clearButton {
        @include font-size-style(4);
        font-weight: 500;
    }
}
.row {
    @include flex-style(row);
}
.container {
    display: flex;
    flex-direction: column;

    .view {
        height: 0;
        overflow-y: scroll;
        flex-grow: 1;

        @include flex-style(column);

        .tip {
            margin: 10px;
            @include font-size-style(3);
            color: $--color-text-secondary;
        }
    }
}
</style>