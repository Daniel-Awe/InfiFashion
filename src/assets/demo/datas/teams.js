import { getDataById } from "../helper"
import users from "./users"

export default () => [
    {
        id: "0",
        get leader() { return getDataById(users(), "0") },
        introduce: "From 2017 I have my own business.or this last two years I have a big data base of relationships with fresh businessmen,good friends,partners from Russia.Europe and China,who would like to find opportunities in different countries...",
        picture: "https://images.unsplash.com/photo-1562869929-bda0650edb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHw0OXx8Y2xvdGhpbmclMjBmYWJyaWN8ZW58MHx8fHwxNjY5Mzg4NTIy&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "1",
        get leader() { return getDataById(users(), "1") },
        introduce: "What is Fashion?To most people fashion is more like how you dress and appear physically...but I like to define fashion as a way of expressing...",
        picture: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwxM3x8Y2xvdGhlcyUyMHxlbnwwfHx8fDE2NjkzNzYwMDM&ixlib=rb-4.0.3&q=80&w=1080",
    }
]