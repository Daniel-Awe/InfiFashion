<template>
    <div class="container">
        <TopBar class="topBar row" style="justify-content: space-between">
            <RoutePopButton :white="true" />
            <div class="title">{{ tryGet(dialogue, ["other()", "name"]) }}</div>
            <img
                style="margin-right: 13px"
                :src="require('@/assets/svg/person_line.svg')"
                alt=""
            />
        </TopBar>

        <div class="view" v-loading="!dialogue">
            <MessageBubble
                v-for="(item, key) in tryGet(dialogue, 'messages')"
                :key="key"
                :dir="item.sender.id === $route.params.id ? 'left' : 'right'"
                :text="item.text"
                :user="item.sender"
            />
        </div>

        <div class="bottomBar">
            <input type="text" v-model="input" placeholder="发送消息" />
            <el-button
                style="margin-left: 10px"
                type="primary"
                @click="handleSend"
                >发送</el-button
            >
        </div>
    </div>
</template>

<script>
import { getDialogues, sendMessage } from "@/api";
import RoutePopButton from "../RoutePopButton.vue";
import TopBar from "../TopBar.vue";
import { helper } from "@/mixin";
import MessageBubble from "./SendMessagePage/MessageBubble.vue";
export default {
    name: "SendMessagePage",
    data() {
        return {
            dialogue: null,
            input: "",
        };
    },
    components: { TopBar, RoutePopButton, MessageBubble },
    methods: {
        handleSend() {
            if (this.input.length === 0) return;

            const oldInput = this.input;
            sendMessage(this.$route.params.id, this.input).then((response) => {
                if (response) {
                    // 发送成功
                } else {
                    this.$message.error("发送失败，请重新尝试");
                    this.input = oldInput;
                }
            });
            this.input = "";
        },
    },
    created() {
        setInterval(() => {
            getDialogues(this.$route.params.id).then((response) => {
                this.dialogue = response[0];
            });
        }, 1000);
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
.container {
    @include flex-style(column);
    align-items: stretch;
    width: 100%;
    height: 100%;

    background-color: $--background-color-base;

    .topBar {
        .title {
            @include font-size-style(1);
            font-weight: 700;
            color: $--color-white;
        }
    }

    .view {
        height: 0;
        flex-grow: 1;
        overflow-y: scroll;

        padding: 10px 15px;

        @include flex-style(column);
        gap: 20px;
        align-items: stretch;
    }

    .bottomBar {
        height: 55px;
        background: $--color-white;

        @include flex-style(row);
        padding: 0 15px;

        input {
            width: 260px;
            height: 38px;
            border-radius: 5px;
            background: $--color-white;

            box-sizing: border-box;
            border: 1px solid rgba(229, 229, 229, 1);
            outline: none;
        }
    }
}
.row {
    @include flex-style(row);
}
.column {
    @include flex-style(column);
}
</style>