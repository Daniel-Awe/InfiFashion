<template>
    <div class="bt">
        <div
            class="item"
            v-for="(item, key) in datas"
            :key="key"
            @click="$router.push({ name: item.routeName }, undefined, () => {})"
            :class="item.routeName === $route.name ? 'selected' : ''"
        >
            <img
                :src="
                    item.routeName === $route.name
                        ? item.selectedIconUrl
                        : item.unselectedIconUrl
                "
                alt=""
            />
            <p>{{ item.title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BottomNavigationBar",
    data() {
        return {
            index: 0,
        };
    },
    props: {
        /** @type {[{ title: string; selectedIconUrl: string; unselectedIconUrl: string; routeName: string; }]} */
        datas: Array,
    },
};
</script>

<style lang="less" scoped>
.bt {
    width: 100%;
    height: 3.5rem;
    background-color: @light-color;
    box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.item {
    width: 1.5rem;
    height: 2.6875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375rem;

    color: @font-color2;

    padding: 0 0.25rem;
}

.item.selected {
    color: @font-primary-color;
}

.item img {
    width: 1.5rem;
    height: 1.5rem;
}

.item p {
    margin: 0;

    width: max-content;
    height: 1rem;
    /** 文本1 */
    .font-size-style(4);
    font-weight: 500;
    line-height: 1rem;

    white-space: nowrap;
}
</style>