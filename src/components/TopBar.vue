<template>
    <div class="topBar">
        <slot />
    </div>
</template>

<script>
export default {
    name: "TopBar",
};
</script>

<style lang="scss" scoped>
.topBar {
    width: 100%;
    height: 2.75rem;
    padding-top: 1.25rem;

    background-color: $--color-primary;
}
</style>