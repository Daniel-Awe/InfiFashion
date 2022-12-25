import { getUser, login } from "@/api";

const state = () => ({
    user: null,
    token: localStorage.getItem("token"),
})

const getters = {
    isLogin: (state) => state.token !== null,
}

const actions = {
    doLogin: {
        root: true,
        async handler({ commit }, info) {
            if (info) {
                const token = await login(info.id, info.password);
                commit("setToken", token);
            } else {
                const token = localStorage.getItem("token");
                commit("setToken", token);
            }
            const user = await getUser();
            commit("setUser", user);
            return user;
        }
    },
    doLogout: {
        root: true,
        handler({ commit }) {
            commit("setUser", null);
            commit("setToken", null);
        }
    }
}

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setToken(state, token) {
        if (typeof token === "string") {
            localStorage.setItem("token", token);
            state.token = token;
        }
        else if (token === null) {
            localStorage.removeItem("token");
            state.token = null;
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}