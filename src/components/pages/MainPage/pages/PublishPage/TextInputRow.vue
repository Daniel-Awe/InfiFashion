<template>
    <div>
        <input
            :type="type"
            :placeholder="placeholder"
            :value="value"
            @input="handleInput"
            :maxlength="maxlength"
        />
        <span v-if="maxlength !== undefined">
            {{ value.length }}/{{ maxlength }}
        </span>
    </div>
</template>

<script>
export default {
    name: "TextInputRow",
    methods: {
        handleInput(ev) {
            this.$emit("input", ev.target.value);
        },
    },
    props: {
        placeholder: String,
        maxlength: Number,
        type: String,
        value: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped>
div {
    display: flex;
    place-content: center space-between;

    border-bottom: 0.03125rem solid $--border-color-base;

    padding: 0.625rem 0;

    @include font-size-style(3);

    input {
        background: none;
        border: none;
        outline: none;

        color: $--color-text-primary;

        width: 100%;
        overflow: hidden;
    }
    input::placeholder {
        color: $--color-text-secondary;
        font-weight: 500;
    }

    span {
        color: $--color-text-secondary;
        font-weight: 500;
    }
}
</style>