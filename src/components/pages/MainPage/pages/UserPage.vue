<template>
    <div class="container column" style="position: relative">
        <TopBar class="topBar" style="position: relative">
            <div
                class="row"
                style="
                    margin: 0.9375rem 1.25rem;
                    justify-content: space-between;
                "
            >
                <div class="switchButton row">
                    <img :src="require('@/assets/svg/switch_line.svg')" />
                    <span>切换为人才</span>
                </div>
                <img
                    :src="require('@/assets/svg/setting_line.svg')"
                    @click="setting"
                />
            </div>
        </TopBar>
        <div class="view column" style="position: absolute; top: 6.75rem">
            <!-- 用户信息框 -->
            <div
                v-loading="!user"
                class="userInfoBox column"
                style="
                    padding: 2.5rem 0.625rem 0.625rem 0.625rem;
                    position: relative;
                "
            >
                <img
                    style="position: absolute; top: -1.75rem"
                    class="avatar"
                    :src="tryGet(user, 'avatar')"
                    alt=""
                />
                <div class="primary">{{ tryGet(user, "name") }}</div>
                <TagBox
                    style="margin-top: 0.3125rem"
                    :tags="tryGet(user, 'tags')"
                    :editable="true"
                />
                <div style="margin-top: 0.625rem" class="row">
                    <span class="secondary">综合评分：</span>
                    <ScoreBox :score="tryGet(user, 'score')" />
                </div>
            </div>
            <OperationBar
                style="width: 100%; margin-top: 15px"
                :datas="tryGet(datas, 'rowButtons')"
            />
            <div style="width: 100%; margin-top: 15px">
                <OperationItem
                    v-for="(item, key) in tryGet(datas, 'options')"
                    :key="key"
                    :data="item"
                    @click="$router.push({ name: item.routeName })"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import { mapGetters, mapState } from "vuex";
import { helper } from "@/mixin";
import TagBox from "@/components/TagBox.vue";
import ScoreBox from "./UserPage/ScoreBox.vue";
import OperationBar from "./UserPage/OperationBar.vue";
import OperationItem from "./UserPage/OperationItem.vue";
export default {
    name: "UserPage",
    components: { TopBar, TagBox, ScoreBox, OperationBar, OperationItem },
    data() {
        return {
            merchant: {
                rowButtons: [
                    {
                        title: "历史记录",
                        iconUrl: require("@/assets/svg/user/merchant_histroy.svg"),
                        routeName: undefined,
                    },
                    {
                        title: "我的订单",
                        iconUrl: require("@/assets/svg/user/merchant_trade_list.svg"),
                        routeName: undefined,
                    },
                    {
                        title: "我的关注",
                        iconUrl: require("@/assets/svg/user/merchant_attention.svg"),
                        routeName: undefined,
                    },
                ],
                options: [
                    {
                        title: "我的需求",
                        iconUrl: require("@/assets/svg/user/merchant_protocol.svg"),
                        routeName: undefined,
                    },
                    {
                        title: "我的收藏",
                        iconUrl: require("@/assets/svg/user/merchant_collect.svg"),
                        routeName: "CollectionPage",
                    },
                    {
                        title: "我的客服",
                        iconUrl: require("@/assets/svg/user/merchant_headset.svg"),
                        routeName: undefined,
                    },
                    {
                        title: "意见与反馈",
                        iconUrl: require("@/assets/svg/user/merchant_notepad.svg"),
                        routeName: undefined,
                    },
                ],
            },
            talent: {
                rowButtons: [
                    {
                        title: "历史记录",
                        iconUrl: require("@/assets/svg/user/talent_histroy.svg"),
                        routeName: undefined,
                    },
                    {
                        title: "我的发布",
                        iconUrl: require("@/assets/svg/user/talent_post.svg"),
                        routeName: undefined,
                    },
                    {
                        title: "我的关注",
                        iconUrl: require("@/assets/svg/user/talent_attention.svg"),
                        routeName: undefined,
                    },
                ],
                options: [
                    {
                        title: "我的收藏",
                        iconUrl: require("@/assets/svg/user/talent_collect.svg"),
                        routeName: "CollectionPage",
                    },
                    {
                        title: "订单详情",
                        iconUrl: require("@/assets/svg/user/talent_trade_list.svg"),
                        routeName: undefined,
                    },
                    {
                        title: "团队介绍",
                        iconUrl: require("@/assets/svg/user/talent_group.svg"),
                        routeName: undefined,
                    },
                    {
                        title: "我的客服",
                        iconUrl: require("@/assets/svg/user/talent_headset.svg"),
                        routeName: undefined,
                    },
                    {
                        title: "意见与反馈",
                        iconUrl: require("@/assets/svg/user/talent_notepad.svg"),
                        routeName: undefined,
                    },
                ],
            },
        };
    },
    methods: {
        setting() {
            this.$router.push({
                name: "SettingPage",
            });
        },
    },
    computed: {
        datas() {
            switch (this.type) {
                case "merchant":
                    return this.merchant;

                case "talent":
                    return this.talent;

                default:
                    return null;
            }
        },
        ...mapGetters("loginInfo", ["isLogin", "type"]),
        ...mapState("loginInfo", ["user"]),
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;

    overflow-y: scroll;

    .topBar {
        height: 11.25rem;

        .switchButton {
            padding: 0.0625rem 0.6875rem 0.0625rem 0.3125rem;
            width: max-content;

            border-radius: 1.25rem;
            background: rgba(249, 249, 249, 0.6);

            @include font-size-style(4);
            font-weight: 500;
            color: $--color-black;
        }
    }

    .view {
        width: 100%;

        .userInfoBox {
            box-sizing: border-box;
            width: 20rem;
            border-radius: 0.3125rem;
            background-color: $--color-white;

            .avatar {
                width: 3.625rem;
                height: 3.625rem;
                border-radius: 50%;
                object-fit: cover;
            }

            .primary {
                @include font-size-style(3);
                font-weight: 700;
                color: $--color-black;
            }

            .secondary {
                @include font-size-style(4);
                font-weight: 500;
                color: $--color-black;
            }
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