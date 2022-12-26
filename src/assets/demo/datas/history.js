import { getDataById } from "../helper"
import services from "./services"
import users from "./users"
export default [
    {
        id: "0",
        type: "service",
        get service() { return getDataById(services, "5") }
    },
    {
        id: "1",
        type: "team",
        get team() { return getDataById(users, "6") }
    },
    {
        id: "2",
        type: "service",
        get service() { return getDataById(services, "6") }
    },
    {
        id: "3",
        type: "service",
        get service() { return getDataById(services, "7") }
    },
    {
        id: "3",
        type: "service",
        get service() { return getDataById(services, "7") }
    },
    {
        id: "3",
        type: "service",
        get service() { return getDataById(services, "7") }
    }
]