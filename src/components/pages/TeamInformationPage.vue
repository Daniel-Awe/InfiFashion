<template>
    <div class="container">
        <TopBar class="topBar">
            <img
                style="margin-left: 15px"
                @click="$router.go(-1)"
                :src="require('@/assets/svg/back_arrow.svg')"
            />
            <div class="title">团队详情</div>
            <img
                style="margin-right: 13px"
                :src="require('@/assets/svg/page_share.svg')"
            />
        </TopBar>
        <div class="view" v-loading="!user">
            <!-- 基本信息 -->
            <div
                class="user column white"
                style="padding: 7px 15px 15px 15px; margin-top: 10px"
            >
                <!-- 用户信息 -->
                <div style="width: 100%" class="base row">
                    <img class="avatar" :src="tryGet(user, 'avatar')" />
                    <div class="column" style="flex-grow: 1; margin-left: 10px">
                        <div
                            class="row"
                            style="width: 100%; justify-content: space-between"
                        >
                            <div class="column">
                                <span class="name">
                                    {{ tryGet(user, "name") }}
                                </span>
                                <span class="sub">
                                    {{ tryGet(user, "region") }}
                                </span>
                            </div>
                            <div class="row" style="gap: 10px">
                                <RoundButton class="button" title="私信" />
                                <RoundButton class="button" title="关注" />
                            </div>
                        </div>
                        <TagBox
                            style="
                                gap: 10px;
                                align-self: flex-start;
                                margin-top: 5px;
                            "
                            :tags="tryGet(user, 'tags')"
                        />
                    </div>
                </div>

                <!-- 统计 -->
                <div
                    style="
                        justify-content: space-evenly;
                        width: 100%;
                        margin-top: 20px;
                    "
                    class="stat row"
                >
                    <span
                        class="column"
                        v-for="(value, key) in tryGet(user, 'stat')"
                        :key="key"
                    >
                        <div class="count">{{ value }}</div>
                        <div class="title">
                            {{
                                {
                                    example: "案例",
                                    comment: "评价",
                                    fans: "粉丝",
                                    attention: "关注",
                                }[key]
                            }}
                        </div>
                    </span>
                </div>

                <!-- 简介 -->
                <div
                    style="margin-top: 16px; width: 100%"
                    class="introduce column"
                >
                    <div class="title">基本简介</div>
                    <p class="content">{{ tryGet(user, "introduce") }}</p>
                </div>
            </div>

            <!-- 资源和服务 -->
            <div
                style="margin-top: 10px; padding: 10px 10px 10px 15px"
                class="white column"
            >
                <PageDivider :hasMore="true">
                    <template slot="title">
                        <span class="title">资源</span>
                    </template>
                </PageDivider>

                <div
                    class="resource row"
                    style="
                        margin-top: 10px;
                        width: 100%;
                        justify-content: space-around;
                    "
                >
                    <img
                        class="item"
                        v-for="(item, key) in tryGet(user, 'resources')"
                        :key="key"
                        :src="item.cover"
                    />
                </div>

                <PageDivider style="margin-top: 20px" :hasMore="true">
                    <template slot="title">
                        <span class="title">服务</span>
                    </template>
                </PageDivider>

                <div
                    class="services row"
                    style="width: 100%; justify-content: space-around"
                >
                    <div
                        style="margin-top: 10px; align-items: stretch"
                        class="item column"
                        v-for="(item, key) in services"
                        :key="key"
                    >
                        <img :src="item.cover" />
                        <p>{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { helper } from "@/mixin";
import TopBar from "../TopBar.vue";
import { getServices, getUserById } from "@/api";
import TagBox from "../TagBox.vue";
import RoundButton from "../RoundButton.vue";
import PageDivider from "../PageDivider.vue";
export default {
    components: { TopBar, TagBox, RoundButton, PageDivider },
    name: "TeamInformationPage",
    data() {
        return {
            user: null,
            services: null,
        };
    },
    activated() {
        this.user = null;
        this.services = null;

        getUserById(this.$route.params.id).then((response) => {
            this.user = response;
        });

        getServices(this.$route.params.id).then((response) => {
            this.services = response;
        });
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    @include flex-style(column);

    .topBar {
        @include flex-style(row);
        justify-content: space-between;

        .title {
            @include font-size-style(1);
            font-weight: 700;
            color: $--color-white;
        }
    }

    .view {
        width: 100%;
        height: 0;
        flex-grow: 1;
        overflow-y: scroll;

        background-color: $--background-color-base;

        .user {
            .base {
                .avatar {
                    width: 48px;
                    height: 48px;
                    opacity: 1;
                    border-radius: 5px;
                    object-fit: cover;
                }

                .name {
                    @include font-size-style(3);
                    font-weight: 700;
                    color: $--color-text-primary;
                }

                .sub {
                    @include font-size-style(4);
                    font-weight: 500;
                    color: $--color-text-secondary;
                }

                .button {
                    @include font-size-style(4);
                    font-weight: 700;
                    color: $--color-white;
                    background-color: $--color-primary;
                }
            }

            .stat {
                .count {
                    @include font-size-style(4);
                    font-weight: 400;
                    color: $--color-black;
                }
                .title {
                    @include font-size-style(4);
                    font-weight: 700;
                    color: $--color-text-secondary;
                }
            }

            .introduce {
                align-items: flex-start;

                .title {
                    @include font-size-style(3);
                    font-weight: 700;
                    color: $--color-text-primary;
                }
                .content {
                    margin: 3px;
                    @include font-size-style(3);
                    font-weight: 500;
                    color: $--color-text-primary;
                }
            }
        }

        .title {
            @include font-size-style(3);
            font-weight: 700;
            color: $--color-text-primary;
        }

        .resource {
            .item {
                width: 160px;
                border-radius: 5px;
                overflow: hidden;
                background-color: $--color-white;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
            }
        }
        .services {
            .item {
                width: 160px;
                height: 120px;
                border-radius: 5px;
                overflow: hidden;
                background-color: $--color-white;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

                img {
                    width: 160px;
                    height: 75px;
                    border-radius: 5px 5px, 0px, 0px;

                    object-fit: cover;
                }

                p {
                    margin: 5px 6px 6px 6px;

                    @include font-size-style(4);
                    font-weight: 500;
                    color: $--color-text-primary;

                    @include font-ellipsis(2);
                }
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
.white {
    background-color: $--color-white;
}
</style>