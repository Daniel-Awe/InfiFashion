<template>
    <div class="box row">
        <img
            style="margin-left: 1rem; margin-right: 0.75rem"
            :style="
                tryGet(data, ['other()', 'type']) === 'system'
                    ? ''
                    : 'border-radius: 50%'
            "
            class="avatar"
            :src="tryGet(data, ['other()', 'avatar'])"
            alt=""
        />
        <div style="flex-grow: 1; margin-right: 1.125rem" class="column">
            <div
                class="row"
                style="width: 100%; justify-content: space-between"
            >
                <div class="name">{{ tryGet(data, ["other()", "name"]) }}</div>
                <div class="date">
                    {{
                        tryGet(data, [
                            "newest()",
                            "date",
                            "toLocaleDateString()",
                        ])
                    }}
                </div>
            </div>
            <div class="message" style="align-self: flex-start">
                {{ tryGet(data, ["newest()", "text"]) }}
            </div>
        </div>
    </div>
</template>

<script>
import { helper } from "@/mixin";
export default {
    name: "MessageItem",
    props: {
        data: Object,
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
.box {
    background-color: $--color-white;
    height: 3.5rem;

    .avatar {
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;
    }
    .name {
        @include font-size-style(3);
        font-weight: 500;
        color: $--color-black;
    }
    .date {
        @include font-size-style(5);
        font-weight: 400;
        color: $--color-text-secondary;
    }
    .message {
        @include font-size-style(4);
        font-weight: 400;
        color: $--color-text-secondary;
    }
}
.row {
    @include flex-style(row);
}
.column {
    @include flex-style(column);
}
</style>