<template>
    <div class="column" style="padding: 10px 12px; gap: 10px">
        <div class="box column" v-for="(item, key) in datas" :key="key">
            <div class="title">{{ item.title }}</div>
            <div style="margin-top: 5px" class="price">{{ item.reward }}</div>
            <div style="margin-top: 5px" class="row center">
                <img class="avatar" :src="item.owner.avatar || defaultAvatar" />
                <span style="margin-left: 10px" class="name">{{
                    item.owner.name
                }}</span>
            </div>
            <div
                style="margin-top: 8px; gap: 10px; flex-wrap: wrap"
                class="row"
            >
                <el-tag :type="tag.type" v-for="(tag, k) in item.tags" :key="k">
                    {{ tag.value }}
                </el-tag>
            </div>
            <hr style="margin-top: 15px" class="hr" />
            <div
                class="row"
                style="
                    margin-top: 16px;
                    justify-content: space-between;
                    align-items: flex-end;
                "
            >
                <span class="row center">
                    <img :src="require('@/assets/svg/clock_line.svg')" alt="" />
                    <span style="margin-left: 16px" class="expiration">
                        {{ item.expiration }}
                    </span>
                </span>
                <RoundButton class="button" title="抢需求" />
            </div>
        </div>
    </div>
</template>

<script>
import { getRequirements } from "@/api";
import RoundButton from "@/components/RoundButton.vue";
export default {
    components: { RoundButton },
    name: "CostumeDesigningPage",
    data() {
        return {
            datas: [],
            defaultAvatar: require("@/assets/svg/default_talent_avatar.svg"),
        };
    },
    methods: {
        async refresh() {
            this.datas = await getRequirements("costumeDesigning");
        },
    },
    mounted() {
        this.refresh();
    },
};
</script>

<style lang="scss" scoped>
.box {
    border-radius: 5px;
    background: $--color-white;

    padding: 10px 13px 11px 12px;

    .title {
        @include font-size-style(3);
        font-weight: 700;
        color: $--color-black;
    }

    .price {
        @include font-size-style(3);
        font-weight: 700;
        color: $--color-primary;
    }

    .avatar {
        width: 24px;
        height: 24px;
        object-fit: cover;
    }

    .name {
        @include font-size-style(4);
        font-weight: 500;
        color: $--color-black;
    }

    .expiration {
        @include font-size-style(5);
        font-weight: 500;
        color: $--color-text-secondary;
    }

    .button {
        color: $--color-white;
        background-color: $--color-primary;
    }

    .hr {
        border: none;
        border-bottom: 1px solid $--border-color-base;
        margin: 0;
    }

    .el-tag {
        margin: 0;
        padding: 5px;
        line-height: 100%;
        height: max-content;
        border: none;
    }
}

.row {
    @include flex-style(row);
    align-items: stretch;

    &.center {
        align-items: center;
    }
}
.column {
    @include flex-style(column);
    align-items: stretch;
}
</style>