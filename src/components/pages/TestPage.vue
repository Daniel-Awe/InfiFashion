<template>
    <div>
        <TopBar />
        <el-input v-model="id" placeholder="账号" type="text" />
        <el-input v-model="password" placeholder="密码" type="password" />
        <el-button @click="login"> 登录 </el-button>
        <el-button @click="logout">登出</el-button>
        {{ isLogin }}
        <div>{{ tryGet(user, "name") }}</div>
        <el-button @click="changeTheme('#8f79d4')">切换主题色1</el-button>
        <el-button @click="changeTheme('#249FB5')">切换主题色2</el-button>
    </div>
</template>

<script>
import { helper } from "@/mixin";
import { mapGetters, mapState } from "vuex";
import TopBar from "../TopBar.vue";
export default {
    name: "TestPage",
    components: { TopBar },
    data() {
        return {
            id: null,
            password: null,
        };
    },
    methods: {
        login() {
            this.$store.dispatch("doLogin", {
                id: this.id,
                password: this.password,
            });
        },
        logout() {
            this.$store.dispatch("doLogout");
        },
        changeTheme(color) {
            document.body.style.setProperty("--color-primary", color);
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