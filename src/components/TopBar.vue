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
    height: 2.88rem;
    padding-top: 1.125rem;

    background-color: $primary-color;
}
</style>