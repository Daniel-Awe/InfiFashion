<template>
    <div class="container" v-loading="true"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "FirstLoadingPage",
    async activated() {
        const user = await this.$store.dispatch("doLogin");
        if (!user) this.$store.dispatch("doLogout");

        this.$store.commit("init");

        this.$router.push({ name: "MainPage" });
    },
    computed: {
        ...mapState("loginInfo", ["user"]),
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>