import { getDataById } from "../helper";
import users from "./users";

export default () => [
    {
        id: "0",
        get author() { return getDataById(users(), "1") },
        title: "[服装设计]品牌服饰设计/面料挑选服务/提供优质面料/海报宣传设计",
        cover: "https://img.js.design/assets/img/63870813cea634d16fa65b0a.jpg#38c1cb78f4037b93ecb20d699ea03ba9",
        price: "￥16000/起",
        buyCount: 112
    }
]