<template>
    <div>
        <TopBar class="topBar">
            <RoutePopButton />
            <div class="title">设置</div>
            <div class="placeholder"></div>
        </TopBar>

        <div
            class="view column"
            style="align-items: stretch; padding: 20px 12px 0 12px; gap: 15px"
        >
            <div
                class="box row"
                :class="item.value === type ? 'select' : ''"
                v-for="(item, key) in datas"
                :key="key"
                @click="$store.dispatch('switchIdentity', item.value)"
            >
                <img
                    style="margin-left: 25px"
                    class="picture"
                    :src="item.pictureUrl"
                />
                <span
                    class="row"
                    style="margin-left: 30px; align-items: flex-start"
                >
                    <img
                        :src="
                            item.value === type
                                ? require('@/assets/svg/radio_select.svg')
                                : require('@/assets/svg/radio_unselect.svg')
                        "
                        alt=""
                    />
                    <span class="column" style="align-items: flex-start">
                        <div class="title">{{ item.title }}</div>
                        <div class="subtitle">{{ item.subtitle }}</div>
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import RoutePopButton from "../RoutePopButton.vue";
import TopBar from "../TopBar.vue";
export default {
    components: { TopBar, RoutePopButton },
    name: "IdentitySwitchPage",
    data() {
        return {
            datas: [
                {
                    title: "我是人才",
                    subtitle: "我要赚钱/找工作",
                    pictureUrl: require("@/assets/pictures/talent_picture.png"),
                    value: "talent",
                },
                {
                    title: "我是雇主",
                    subtitle: "我要找人办事",
                    pictureUrl: require("@/assets/pictures/merchant_picture.png"),
                    value: "merchant",
                },
            ],
        };
    },
    computed: {
        ...mapGetters("loginInfo", ["type"]),
    },
};
</script>

<style lang="scss" scoped>
.topBar {
    @include flex-style(row);
    justify-content: space-between;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);

    .title {
        font-size: 1.125rem;
        font-weight: 700;
        color: rgba(51, 51, 51, 1);
        align-self: center;
    }

    .placeholder {
        width: 2rem;
    }
}

.view {
    .box {
        border-radius: 5px;
        background: $--color-white;

        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

        &.select {
            border: 2px solid rgba(216, 191, 255, 1);
        }

        .picture {
            width: 120px;
            height: 120px;
        }

        .title {
            @include font-size-style(2);
            font-weight: 700;
            color: $--color-text-primary;
        }

        .subtitle {
            @include font-size-style(3);
            font-weight: 500;
            color: $--color-text-secondary;
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