<template>
    <div class="box row" @click="$emit('click')">
        <img style="margin-left: 15px" :src="tryGet(data, 'iconUrl')" alt="" />
        <div style="margin-left: 11px" class="right row">
            <span class="title">{{ data.title }}</span>
            <img
                style="margin-right: 15px"
                :src="require('@/assets/svg/arrow_right.svg')"
            />
        </div>
    </div>
</template>

<script>
import { helper } from "@/mixin";
export default {
    name: "OperationItem",
    props: {
        data: Object,
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
.box {
    background-color: $--color-white;
    .right {
        height: 44px;
        border-bottom: 1px solid $--border-color-base;
        flex-grow: 1;
        justify-content: space-between;

        .title {
            @include font-size-style(3);
            font-weight: 500;
            color: $--color-black;
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