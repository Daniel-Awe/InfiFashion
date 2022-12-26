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

<style lang="scss" scoped>
.bt {
    width: 100%;
    height: 3.5rem;
    background-color: $--color-white;
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
    gap: 0.1875rem;

    color: $--color-text-primary;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    p {
        margin: 0;

        width: max-content;
        @include font-size-style(5);
        font-weight: 500;

        white-space: nowrap;
    }
}

.item.selected {
    color: rgb(132, 65, 163);
}
</style>