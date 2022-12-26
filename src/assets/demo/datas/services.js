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
    },
    {
        id: "4",
        get author() { return getDataById(users, "0") },
        title: "[设计团队]品牌全案logo/面料挑选服务/提供优质面料...",
        cover: "https://img.js.design/assets/img/63863d2acea634d16f727ddb.jpg#88e4f6324c2dd7333b5d33a65856f341",
        price: "￥18000/起",
        buyCount: 210,
    },
    {
        id: "5",
        get author() { return getDataById(users, "8") },
        title: "摩洛哥传统服饰样衣设计",
        cover: "https://img.js.design/assets/img/6385ef012736564938695070.jpg#633645665166f9143ee7d3a2e42e0aa9",
        price: "￥18000",
        buyCount: 150,
        comment: 38,
        favorableRate: 100
    },
    {
        id: "6",
        get author() { return getDataById(users, "8") },
        title: "孟加拉服饰样衣设计",
        cover: "https://img.js.design/assets/img/638608b2dba29f39ef7c46da.jpg#4d65322e37bdea133f65f4e9430e976b",
        price: "￥12000",
        buyCount: 150,
        comment: 38,
        favorableRate: 100
    },
    {
        id: "7",
        get author() { return getDataById(users, "8") },
        title: "非洲传统民族服饰样衣设计",
        cover: "https://img.js.design/assets/img/638604691503685afe928858.jpg#afb41b43cf6e3bfbf760cfabe43d2bc3",
        price: "￥32000",
        buyCount: 150,
        comment: 99,
        favorableRate: 100
    }
]