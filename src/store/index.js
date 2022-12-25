import Vue from "vue"
import Vuex from "vuex"
import loginInfo from "./modules/loginInfo"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        loginInfo
    },
    strict: debug
})

export default store