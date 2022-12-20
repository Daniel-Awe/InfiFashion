<template>
    <img :src="src" alt="" />
</template>

<script>
export default {
    name: "RoundAvatar",
    props: {
        src: String,
    },
};
</script>

<style lang="scss" scoped>
img {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 50%;
    object-fit: cover;
}
</style>