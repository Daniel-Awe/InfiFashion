import { getUserByToken, identitySwitch, login } from "@/api";

const state = () => ({
    user: null,
    token: localStorage.getItem("token"),
})

const getters = {
    isLogin: (state) => state.token !== null,
    type: (state) => state.user ? state.user.type : null
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
            const user = await getUserByToken();
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
    },
    switchIdentity: {
        root: true,
        async handler({ commit }, identity) {
            const response = await identitySwitch(identity);
            if (response) {
                commit("setType", identity);
            }
            return response;
        }
    }

}

const mutations = {
    setType(state, type) {
        state.user.type = type;

        switch (type) {
            case "merchant":
                document.body.style.setProperty("--color-primary", "#8f79d4");
                break;

            case "talent":
                document.body.style.setProperty("--color-primary", "#249FB5");
                break;

            default:
                document.body.style.setProperty("--color-primary", "#409EFF");
                break;
        }
    },
    setUser(state, user) {
        state.user = user;

        switch (getters.type(state)) {
            case "merchant":
                document.body.style.setProperty("--color-primary", "#8f79d4");
                break;

            case "talent":
                document.body.style.setProperty("--color-primary", "#249FB5");
                break;

            default:
                document.body.style.setProperty("--color-primary", "#409EFF");
                break;
        }
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