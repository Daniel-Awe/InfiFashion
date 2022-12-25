<template>
    <div>
        <button @click="login">登录</button>
        <button @click="logout">登出</button>
        {{ isLogin }}
        <div>{{ tryGet(user, "name") }}</div>
    </div>
</template>

<script>
import { helper } from "@/mixin";
import { mapGetters, mapState } from "vuex";
export default {
    name: "TestPage",
    components: {},
    methods: {
        login() {
            this.$store.dispatch("doLogin", {
                id: "admin",
                password: "123456",
            });
        },
        logout() {
            this.$store.dispatch("doLogout");
        },
    },
    computed: {
        ...mapGetters("loginInfo", ["isLogin"]),
        ...mapState("loginInfo", ["user"]),
    },
    mixins: [helper],
};
</script>

<style lang="scss" scoped>
</style>