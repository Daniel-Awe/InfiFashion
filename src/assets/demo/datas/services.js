import { getDataById } from "../helper";
import users from "./users";

export default [
    {
        id: "0",
        get author() { return getDataById(users, "1") },
        title: "[服装设计]品牌服饰设计/面料挑选服务/提供优质面料/海报宣传设计",
        cover: "https://img.js.design/assets/img/63870813cea634d16fa65b0a.jpg#38c1cb78f4037b93ecb20d699ea03ba9",
        price: "￥16000/起",
        buyCount: 112
    },
    {
        id: "1",
        get author() { return getDataById(users, "1") },
        title: "[饰品设计]品牌饰品设计/饰品材质挑选/提供设计案例...",
        cover: "https://img.js.design/assets/img/638706a0df20899fb7287c54.jpg#a2f1af7015831a31bbad3df37b850dbb",
        price: "￥17000/起",
        buyCount: 134,
    },
    {
        id: "2",
        get author() { return getDataById(users, "0") },
        title: "[设计团队]品牌服饰设计/面料挑选服务/提供优质面料...",
        cover: "https://img.js.design/assets/img/63863cdcdba29f39ef86f325.jpg#2f7a75d79a6b89828638c1b5578b15bc",
        price: "￥15000/起",
        buyCount: 122
    },
    {
        id: "3",
        get author() { return getDataById(users, "0") },
        title: "[设计团队]品牌全案logo/面料挑选服务/提供优质面料...",
        cover: "https://img.js.design/assets/img/63863d2acea634d16f727ddb.jpg#88e4f6324c2dd7333b5d33a65856f341",
        price: "￥18000/起",
        buyCount: 210,
    }
]