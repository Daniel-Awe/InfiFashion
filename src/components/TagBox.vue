<template>
    <div class="tagBox">
        <span class="item" v-for="(item, key) in tags" :key="key">
            {{ item }}
        </span>
    </div>
</template>

<script>
export default {
    name: "TagBox",
    props: {
        /** @type {[string]} */
        tags: Array,
    },
};
</script>

<style lang="scss" scoped>
.tagBox {
    display: flex;
    height: max-content;
    flex-wrap: wrap;

    gap: 0.3125rem;
}

.item {
    border: 0.0625rem solid rgba(42, 130, 228, 1);
    height: max-content;
    border-radius: 0.4rem;
    padding: 0.125rem 0.3125rem;

    @include font-size-style(5);
    color: rgba(42, 130, 228, 1);

    white-space: nowrap;
}
</style>