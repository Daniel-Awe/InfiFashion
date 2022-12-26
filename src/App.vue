<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "App",
    async created() {
        if (false) {
            document.body.style.setProperty("--theme", "merchant");
            document.body.style.setProperty("--color-primary", "#8f79d4");
        } else {
            document.body.style.setProperty("--theme", "talent");
            document.body.style.setProperty("--color-primary", "#249FB5");
        }

        const user = await this.$store.dispatch("doLogin");
        if (!user) this.$store.dispatch("doLogout");
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
