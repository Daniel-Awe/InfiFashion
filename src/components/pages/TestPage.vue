<template>
    <div>
        <OrderFormPage/>
    </div>
</template>

<script>
import { helper } from "@/mixin";
import { mapGetters, mapState } from "vuex";
import TopBar from "../TopBar.vue";
import OrderFormPage from './OrderFormPage.vue';
export default {
    name: "TestPage",
    components: { TopBar, OrderFormPage },
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