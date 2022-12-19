<template>
    <div>
        <div class="loadingBox" v-if="isLoading">
            <img
                :style="'transform: rotate(' + degree + 'deg) scale(0.5)'"
                :src="iconUrl"
                alt=""
            />
        </div>
        <slot v-else />
    </div>
</template>

<script>
export default {
    name: "LoadingView",
    data() {
        return {
            degree: 0,
            iconUrl: require("@/assets/icons/loading.svg"),
            /** @type {NodeJS.Timer} */
            timer: undefined,
        };
    },
    methods: {
        updateStatus() {
            if (this.isLoading) {
                if (!this.timer) {
                    this.timer = setInterval(() => {
                        this.degree += 10;
                    }, 20);
                }
            } else {
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = undefined;
                }
            }
        },
    },
    props: {
        isLoading: {
            type: Boolean,
            default: true,
        },
    },
    watch: {
        isLoading() {
            this.updateStatus();
        },
    },
    mounted() {
        this.updateStatus();
    },
};
</script>

<style lang="less" scoped>
.loadingBox {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
}
</style>