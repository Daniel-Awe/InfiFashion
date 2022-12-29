<template>
    <div ref="root" class="bt">
        <div
            class="item"
            v-for="(item, key) in datas"
            :key="key"
            @click="$router.push({ name: item.routeName }, null, () => {})"
            :style="containRoute(item.routeName) ? selectedColor : ''"
        >
            <img
                rich-icon
                :src="
                    containRoute(item.routeName)
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
import { mapGetters } from "vuex";
export default {
    name: "BottomNavigationBar",
    props: {
        /** @type {[{ title: string; selectedIconUrl: string; unselectedIconUrl: string; routeName: string; }]} */
        datas: Array,
    },
    methods: {
        containRoute(routeName) {
            for (const route of this.$route.matched) {
                if (route.name === routeName) return true;
            }
            return false;
        },
    },
    computed: {
        selectedColor() {
            switch (this.type) {
                case "merchant":
                    return "color: rgb(132, 65, 163)";

                case "talent":
                    return "color: rgb(0, 137, 186)";

                default:
                    return "";
            }
        },
        ...mapGetters("loginInfo", ["type"]),
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
</style>