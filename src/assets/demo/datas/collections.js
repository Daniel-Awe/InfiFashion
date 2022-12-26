import { getDataById } from "../helper"
import users from "./users"

export default () => [
    {
        id: "0",
        type: "article",
        name: "YOKA时尚精选",
        get author() { return getDataById(users(), "2") },
        title: "干货 | 2022服饰流行趋势完全解读",
        date: "2022/03/17",
        agree: 145,
        comment: 123,
        picture: "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjAzNTV8MHwxfHNlYXJjaHwzfHxmYXNoaW9ufGVufDB8fHx8MTY2OTM4NzY2MQ&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: "1",
        type: "team",
        name: "山海设计团队",
        title: "通过市场调研等方式收集信息，设.....",
        price: 32000,
        agree: 36,
        comment: 12,
        picture: "https://img.js.design/assets/img/638610dbaedbf352c43e42b3.jpg#b5b6011c88b1ed2e4ecb2136295f4f6e"
    },
    {
        id: "2",
        type: "team",
        name: "派维特品牌设计团队",
        title: "团队成立十年，推广设计经验丰富.....",
        price: 28000,
        agree: 99,
        comment: 288,
        picture: "https://img.js.design/assets/img/638614516be1dbaba7a2fd61.jpg#2803929193cf90a0d6ef9a839e4e1f43"
    },
    {
        id: "2",
        type: "team",
        name: "派维特品牌设计团队",
        title: "团队成立十年，推广设计经验丰富.....",
        price: 28000,
        agree: 99,
        comment: 288,
        picture: "https://img.js.design/assets/img/638614516be1dbaba7a2fd61.jpg#2803929193cf90a0d6ef9a839e4e1f43"
    },
    {
        id: "2",
        type: "team",
        name: "派维特品牌设计团队",
        title: "团队成立十年，推广设计经验丰富.....",
        price: 28000,
        agree: 99,
        comment: 288,
        picture: "https://img.js.design/assets/img/638614516be1dbaba7a2fd61.jpg#2803929193cf90a0d6ef9a839e4e1f43"
    },
    {
        id: "2",
        type: "team",
        name: "派维特品牌设计团队",
        title: "团队成立十年，推广设计经验丰富.....",
        price: 28000,
        agree: 99,
        comment: 288,
        picture: "https://img.js.design/assets/img/638614516be1dbaba7a2fd61.jpg#2803929193cf90a0d6ef9a839e4e1f43"
    },
    {
        id: "2",
        type: "team",
        name: "派维特品牌设计团队",
        title: "团队成立十年，推广设计经验丰富.....",
        price: 28000,
        agree: 99,
        comment: 288,
        picture: "https://img.js.design/assets/img/638614516be1dbaba7a2fd61.jpg#2803929193cf90a0d6ef9a839e4e1f43"
    },
    {
        id: "2",
        type: "team",
        name: "派维特品牌设计团队",
        title: "团队成立十年，推广设计经验丰富.....",
        price: 28000,
        agree: 99,
        comment: 288,
        picture: "https://img.js.design/assets/img/638614516be1dbaba7a2fd61.jpg#2803929193cf90a0d6ef9a839e4e1f43"
    }
]