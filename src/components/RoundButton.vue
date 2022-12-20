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

<style lang="scss" scoped>
.button {
    padding: 0.25rem 1rem;
    border-radius: 0.875rem;

    width: max-content;
    height: max-content;

    @include font-size-style(4);
    font-weight: bold;
}
</style>