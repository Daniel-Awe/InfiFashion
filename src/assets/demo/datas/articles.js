import { getDataById } from "../helper"
import users from "./users"

export default [
    {
        id: "0",
        title: "干货 | 2022服饰流行趋势完全解读",
        date: "2022/03/17",
        get author() { return getDataById(users, "2") },
        agree: 145,
        collect: 99,
        comment: 123,
        share: 23,
        picture: "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwzfHxmYXNoaW9ufGVufDB8fHx8MTY2OTM4NzY2MQ&ixlib=rb-4.0.3&q=80&w=1080",
    }
]