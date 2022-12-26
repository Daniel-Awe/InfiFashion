<template>
    <div>
        <img
            style="margin-left: 0.6rem"
            :src="require('@/assets/svg/search_line.svg')"
            alt=""
        />
        <input
            type="text"
            :value="value"
            @input="$emit('input', $event.target.value)"
            placeholder="请输入关键词搜索"
        />
    </div>
</template>

<script>
export default {
    name: "SearchBox",
    props: {
        value: String,
    },
};
</script>

<style lang="scss" scoped>
div {
    height: 1.8rem;
    border-radius: 0.625rem;
    background-color: $--background-color-base;

    border: 0.0625rem solid $--color-primary;

    box-sizing: border-box;

    display: flex;
    align-items: center;
}

input {
    height: 1.4rem;
    margin: 0 0.4rem;
    flex-grow: 1;

    overflow: hidden;

    background: none;
    padding: 0;

    border: none;
    outline: none;

    @include font-size-style(4);
    font-weight: 400;
    color: $--color-text-primary;
}

input:focus {
    border: none;
    outline: none;
}
</style>