<template>
    <div class="divider">
        <span class="head"></span>
        <span style="margin-left: 0.5625rem" class="title">{{ title }}</span>
        <span class="more" v-if="hasMore" @click="$emit('clickMore')">
            <span>更多</span>
            <img :src="require('@/assets/icons/arrow_right_line.svg')" alt="" />
        </span>
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

<style lang="less" scoped>
.divider {
    width: 100%;
    height: 1.5625rem;

    display: flex;
    align-items: center;
}

.head {
    display: inline-block;
    width: 0.375rem;
    height: 100%;
    border-radius: 0.625rem;
    background: @primary-color;
}

.title {
    /** 文本1 */
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0;
    color: @font-color1;
    text-align: left;
    vertical-align: middle;
}

.more {
    margin: 0 0 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    /** 文本1 */
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0;
    color: rgba(166, 166, 166, 1);
    text-align: left;
    vertical-align: middle;
}
</style>