<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style lang="scss">
body {
    margin: 0;
    font-family: $primary-font-family;
}

#app {
    width: 100vw;
    height: 100vh;
}

::-webkit-scrollbar {
    display: none;
}
</style>
