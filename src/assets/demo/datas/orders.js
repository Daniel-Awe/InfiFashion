import { getDataById } from "../helper"
import users from "./users"
import services from "./services"
export default [
    {
        id: "0",
        get author() { return getDataById(users, "2") },
        get service() { return getDataById(services, "7") },
        date: "2022-11-11 12:50",
        payment: "￥32000",
        state:"交易成功"
    }
]