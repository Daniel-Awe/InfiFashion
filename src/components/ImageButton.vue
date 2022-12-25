<template>
    <div @click="$emit('click')">
        <img class="image" :src="iconUrl" alt="" />
        <span class="title">{{ title }}</span>
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
}
</style>