<template>
    <div class="row" style="gap: 5px">
        <img
            v-for="(item, key) in [1, 2, 3, 4, 5]"
            :class="score >= item ? '' : 'lighter'"
            :key="key"
            :src="starUrl"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "ScoreBox",
    props: {
        score: Number,
    },
    computed: {
        starUrl() {
            switch (this.type) {
                case "merchant":
                    return require("@/assets/svg/merchant_star.svg");

                case "talent":
                    return require("@/assets/svg/talent_star.svg");

                default:
                    return null;
            }
        },
        ...mapGetters("loginInfo", ["type"]),
    },
};
</script>

<style lang="scss" scoped>
.row {
    @include flex-style(row);
}

.lighter {
    opacity: 0.5;
}
</style>