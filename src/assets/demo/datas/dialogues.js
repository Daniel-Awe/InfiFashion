import { getDataById } from "../helper"
import users from "./users"

export default [
    {
        id: "0",
        get A() { return getDataById(users, "trade") },
        get B() { return getDataById(users, "4") },
        messages: [
            {
                get sender() { return getDataById(users, "trade") },
                text: "你的需求“非洲服饰设计”已成功发布，系统正在为你...",
                date: new Date("2022-11-18")
            }
        ]
    },
    {
        id: "1",
        get A() { return getDataById(users, "inform") },
        get B() { return getDataById(users, "4") },
        messages: [
            {
                get sender() { return getDataById(users, "inform") },
                text: "目前您的外包大厅正有：24个优质需求待您投标,部分...",
                date: new Date("2022-11-20")
            }
        ]
    },
    {
        id: "2",
        get A() { return getDataById(users, "3") },
        get B() { return getDataById(users, "4") },
        messages: [
            {
                get sender() { return getDataById(users, "3") },
                text: "您好，我想了解一下你们的服务。",
                date: new Date("2022-11-22")
            }
        ]
    },
    {
        id: "3",
        get A() { return getDataById(users, "trade") },
        get B() { return getDataById(users, "5") },
        messages: [
            {
                get sender() { return getDataById(users, "trade") },
                text: "你的需求“非洲服饰设计”平台已为你匹配到20个优质...",
                date: new Date("2022-11-18")
            }
        ]
    },
    {
        id: "4",
        get A() { return getDataById(users, "inform") },
        get B() { return getDataById(users, "5") },
        messages: [
            {
                get sender() { return getDataById(users, "trade") },
                text: "目前您的外包大厅正有：30个优质需求待您投标，部...",
                date: new Date("2022-11-20")
            }
        ]
    },
    {
        id: "5",
        get A() { return getDataById(users, "4") },
        get B() { return getDataById(users, "5") },
        messages: [
            {
                get sender() { return getDataById(users, "4") },
                text: "您好，我想了解一下你们的服务。",
                date: new Date("2022-11-22")
            }
        ]
    }
]