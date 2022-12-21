<template>
    <div @click="$emit('click')">
        <img :src="iconUrl" alt="" />
        <span style="margin-left: 0.4375rem">
            <span class="title">{{ title }}</span>
            <span class="subtitle">{{ subtitle }}</span>
        </span>
    </div>
</template>

<script>
export default {
    name: "ProminentButton",
    props: ["iconUrl", "title", "subtitle"],
};
</script>

<style lang="scss" scoped>
div {
    width: 6.875rem;
    height: 3.75rem;
    border-radius: 0.3125rem;
    background-color: $--color-white;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);

    box-sizing: border-box;
    padding: 0.625rem;

    display: flex;
    justify-content: center;
    align-items: center;
}

div > img {
    width: 2rem;
    height: 1.625rem;
}

div > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    width: 3.5rem;

    @include font-size-style(3);
    font-weight: bold;
    color: $--color-text-primary;
}
.subtitle {
    width: 2.375rem;

    @include font-size-style(4);
    color: $--color-text-regular;
}
</style>