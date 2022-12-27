<template>
    <div
        class="box"
        :style="
            dir === 'left'
                ? 'flex-direction: row'
                : 'flex-direction: row-reverse'
        "
        style="gap: 20px"
    >
        <img
            :style="tryGet(user, 'avatar') ? 'border-radius: 50%' : ''"
            class="avatar"
            :src="tryGet(user, 'avatar') || tryGet(user, 'icon')[type]"
        />
        <div
            class="bubble"
            :class="dir !== 'left' ? 'self' : ''"
            :style="
                dir === 'left'
                    ? 'border-radius: 10px 10px 10px 0'
                    : 'border-radius: 10px 10px 0 10px'
            "
        >
            {{ text }}
        </div>
    </div>
</template>

<script>
import { helper } from "@/mixin";
import { mapGetters } from "vuex";
export default {
    name: "MessageBubble",
    props: {
        dir: {
            type: String,
            default: "right",
        },
        user: Object,
        text: String,
    },
    mixins: [helper],
    computed: {
        ...mapGetters("loginInfo", ["type"]),
    },
};
</script>

<style lang="scss" scoped>
.box {
    @include flex-style(row);
}

.avatar {
    width: 38px;
    height: 38px;

    object-fit: cover;
}
.bubble {
    padding: 10px;
    background: $--color-white;
    filter: brightness(1.3) saturate(0.4);

    @include font-size-style(3);
    font-weight: 700;
    color: $--color-black;

    &.self {
        background: $--color-primary;
    }
}
</style>