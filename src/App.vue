<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "App",
    beforeMount() {
        if (!this.isInit) {
            this.$router.push("/", null, () => {});
        }
    },
    computed: {
        ...mapState(["isInit"]),
    },
};
</script>

<style lang="scss">
body {
    margin: 0;
    font-family: $--font-family-primary;
}

input {
    font-family: $--font-family-primary;
}
textarea {
    font-family: $--font-family-primary;
}

#app {
    width: 100vw;
    height: 100vh;
}

::-webkit-scrollbar {
    display: none;
}
</style>
