<template>
    <div>
        <img :src="require('@/assets/svg/search_line.svg')" alt="" />
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
    data() {
        return {};
    },
    props: {
        value: {
            type: String,
            default: () => "",
        },
    },
    model: {
        prop: "value",
        event: "input",
    },
};
</script>

<style lang="scss" scoped>
div {
    width: 18.8rem;
    height: 1.8rem;
    border-radius: 0.625rem;
    background-color: $background-color;

    border: 0.0625rem solid $primary-light-color;

    box-sizing: border-box;

    display: flex;
    align-items: center;
}

img {
    width: 0.94rem;
    height: 0.94rem;
    margin-left: 0.6rem;
}

input {
    height: 1.4rem;
    margin: 0 0.4rem;
    flex-grow: 1;

    overflow: hidden;

    background-color: inherit;
    padding: 0;

    border: none;
    outline: none;

    @include font-size-style(4);
    color: $font-color3;
}

input:focus {
    border: none;
    outline: none;
}
</style>