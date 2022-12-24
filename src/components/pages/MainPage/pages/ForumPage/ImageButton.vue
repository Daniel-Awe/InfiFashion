<template>
    <div @click="$emit('click')">
        <img :src="iconUrl" alt="" />
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: "ImageButton",
    props: {
        iconUrl: String,
        title: String,
    },
};
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;

    img {
        width: max-content;
        height: max-content;
    }

    span {
        @include font-size-style(3);
        font-weight: bold;
        color: $--color-text-primary;
    }
}
</style>