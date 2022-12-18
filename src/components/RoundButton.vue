<template>
    <div class="button" @click="$emit('click')">
        {{ title }}
    </div>
</template>

<script>
export default {
    name: "RoundButton",
    props: {
        title: String,
    },
};
</script>

<style lang="less" scoped>
.button {
    padding: 0.25rem 1rem;
    border-radius: 0.875rem;

    width: max-content;
    height: max-content;

    /** 文本1 */
    .font-size-style(3);
    font-weight: 700;
}
</style>