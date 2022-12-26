<template>
    <div class="row" style="gap: 5px">
        <img
            v-for="(item, key) in [1, 2, 3, 4, 5]"
            :class="score >= item ? '' : 'lighter'"
            :key="key"
            :src="require('@/assets/svg/star.svg')"
        />
    </div>
</template>

<script>
export default {
    name: "ScoreBox",
    props: {
        score: Number,
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