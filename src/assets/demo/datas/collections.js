import { getDataById } from "../helper"
import articles from "./articles"
import users from "./users"

export default [
    {
        id: "0",
        type: "article",
        get article() { return getDataById(articles, "0") }
    },
    {
        id: "1",
        type: "team",
        get team() { return getDataById(users, "6") }
    },
    {
        id: "2",
        type: "team",
        get team() { return getDataById(users, "7") }
    },
    {
        id: "2",
        type: "team",
        get team() { return getDataById(users, "7") }
    },
    {
        id: "2",
        type: "team",
        get team() { return getDataById(users, "7") }
    },  
    {
        id: "2",
        type: "team",
        get team() { return getDataById(users, "7") }
    },
]