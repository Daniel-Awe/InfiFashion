<template>
    <div id="app" v-loading="loading">
        <keep-alive>
            <router-view v-if="!loading"></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return { loading: false };
    },
    async created() {
        this.loading = true;
        const user = await this.$store.dispatch("doLogin");
        if (!user) this.$store.dispatch("doLogout");
        this.loading = false;
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
