<template>
    <div>
        <div class="container">
            <div class="title">{{ title }}</div>
            <textarea
                style="margin-top: 0.625rem"
                class="text"
                :value="value"
                @input="handleInput"
                :maxlength="maxlength"
            ></textarea>
            <div class="counter">{{ value.length }}/{{ maxlength }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TextInputArea",
    methods: {
        handleInput(ev) {
            /** @type HTMLTextAreaElement */
            const textarea = ev.target;
            this.$emit("input", textarea.value);

            textarea.style.height = "0";
            textarea.style.height = `${
                textarea.offsetHeight -
                textarea.clientHeight +
                textarea.scrollHeight
            }px`;
        },
    },
    props: {
        title: String,
        value: String,
        maxlength: Number,
    },
};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    @include font-size-style(3);

    .text {
        border-radius: 5px;
        background: rgba(172, 50, 194, 0);

        border: 1px solid rgba(229, 229, 229, 1);

        outline: none;

        color: $--color-text-primary;

        resize: none;

        box-sizing: border-box;
        width: 100%;
        min-height: 180px;
    }

    .title {
        color: $--color-text-secondary;
        font-weight: 500;
    }

    .counter {
        position: absolute;
        bottom: 0;
        right: 0;

        color: $--color-text-secondary;
        font-weight: 500;

        transform: translate(-10px, -10px);
    }
}
</style>