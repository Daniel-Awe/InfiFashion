<template>
    <div class="tagBox">
        <span class="item" v-for="(item, key) in datas" :key="key">
            {{ item }}
        </span>
    </div>
</template>

<script>
export default {
    name: "TagBox",
    props: {
        /** @type {[string]} */
        datas: Array,
    },
};
</script>

<style lang="less" scoped>
.tagBox {
    display: flex;
    height: max-content;
    flex-wrap: wrap;
}
.item {
    border: 0.0625rem solid rgba(42, 130, 228, 1);
    height: max-content;
    border-radius: 0.4rem;
    padding: 2px 5px;

    /** 文本1 */
    font-size: 0.625rem;
    font-weight: 400;
    letter-spacing: 0;
    color: rgba(42, 130, 228, 1);

    white-space: nowrap;
}
</style>