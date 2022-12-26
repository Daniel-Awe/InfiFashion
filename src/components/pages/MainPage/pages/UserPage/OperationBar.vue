<template>
    <div class="box" style="padding-top: 7px; padding-bottom: 5px">
        <ImageButton
            v-for="(item, key) in datas"
            :key="key"
            :iconUrl="item.iconUrl"
            :title="item.title"
            @click="$router.push({ name: item.routeName })"
        />
    </div>
</template>

<script>
import ImageButton from "../../../../ImageButton.vue";
export default {
    components: { ImageButton },
    name: "OperationBar",
    props: {
        datas: Array,
    },
};
</script>

<style lang="scss" scoped>
.box {
    @include flex-style(row);
    justify-content: space-evenly;
    background-color: $--color-white;
}

/deep/ .title {
    @include font-size-style(3);
    font-weight: 500;
    color: $--color-black;
}
</style>