<template>
    <div>
        <div class="controller">
            <span
                class="item"
                v-for="(item, key) in datas"
                :key="key"
                @click="index = key"
                :class="index === key ? 'on' : ''"
            >
            </span>
        </div>
        <keep-alive>
            <slot v-if="datas && datas.length > 0" :data="datas[index]" />
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "SlideshowBox",
    data() {
        return {
            index: 0,
        };
    },
    methods: {},
    props: {
        datas: Array,
    },
};
</script>

<style lang="scss" scoped>
div {
    position: relative;
}

.controller {
    position: absolute;
    display: flex;
    gap: 1.625rem;

    bottom: 0;
    left: 50%;
    translate: -50%;

    padding: 0.75rem 1.2rem;

    .item {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        border: 0.05rem solid rgb(151, 151, 151);
        background-color: rgba(195, 200, 203, 1);
    }

    .item.on {
        background-color: rgba(89, 113, 240, 1);
    }
}
</style>