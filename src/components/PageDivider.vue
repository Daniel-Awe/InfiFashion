<template>
    <div class="divider">
        <div class="row" style="justify-content: space-between">
            <slot name="title" :title="title" />
            <span v-if="!$slots.title" class="row" style="align-items: stretch">
                <span class="head"></span>
                <span style="margin-left: 0.5625rem" class="title">
                    {{ title }}
                </span>
            </span>
            <span class="more" v-if="hasMore" @click="$emit('clickMore')">
                <span>更多</span>
                <img
                    :src="require('@/assets/svg/double_arrow_right_line.svg')"
                    alt=""
                />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageDivider",
    props: {
        title: {
            type: String,
            default: "标题",
        },
        hasMore: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
.divider {
    width: 100%;
    height: 1.5625rem;
}

.head {
    display: inline-block;
    width: 0.375rem;
    border-radius: 0.625rem;
    background-color: $--color-primary;
}

.title {
    @include font-size-style(2);
    font-weight: 700;
    color: $--color-black;
}

.more {
    display: flex;
    justify-content: center;
    align-items: center;

    @include font-size-style(4);
    font-weight: 700;
    color: rgba(166, 166, 166, 1);
}

.row {
    @include flex-style(row);
}
</style>