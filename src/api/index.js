import Vue from 'vue';
import DemoDatas from '../assets/demo/datas'

const sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms));

const requestTime = () => Math.random() * 1000;

//#region 用户

export const login = async (id, password) => {
    await sleep(requestTime());
    const user = DemoDatas.users.find(value => value.id === id && value.password === password);
    if (!user) return null;
    const token = user.id;
    return token;
}

export const getUserByToken = async () => {
    await sleep(requestTime());
    const token = localStorage.getItem("token");
    if (token)
        return { ...(DemoDatas.users.find(value => value.id === token) || null) };
    else
        return null;
}

export const getUserById = async (id) => {
    await sleep(requestTime());
    return { ...(DemoDatas.users.find(value => value.id === id) || null) };
}

export const identitySwitch = async (identity) => {
    const token = localStorage.getItem("token");
    if (token) {
        const user = DemoDatas.users.find(value => value.id === token) || null;
        user.type = identity;
        return true;
    } else
        return false;
}

//#endregion

//#region 文章
export const getAllArticles = async () => {
    await sleep(requestTime());
    return DemoDatas.articles;
}

export const getArticleInfo = async (articleId) => {
    await sleep(requestTime());
    return DemoDatas.articles.find((value) => value.id === articleId);
}

export const getNewArticles = async (count = 1) => {
    await sleep(requestTime());
    return DemoDatas.articles.slice(-count);
}
//#endregion

//#region 消息
export const getDialogues = async (userId) => {
    await sleep(requestTime());
    return DemoDatas.dialogues.filter(value => value.A.id === userId || value.B.id === userId).map(value => {
        let other = undefined;
        if (value.A.id === userId) {
            other = value.B;
        }
        else {
            other = value.A;
        }

        const o = { ...value };

        Vue.delete(o, "A");
        Vue.delete(o, "B");
        Vue.set(o, "other", () => other);

        Vue.set(o, "newest", () => value.messages.at(-1));

        return o;
    });
}
//#endregion

//#region 服务
export const getServices = async (userId) => {
    await sleep(requestTime());
    return DemoDatas.services.filter(value => value.author.id === userId);
}
//#endregion

//#region 商家的需求
export const getRequirements = async (type) => {
    await sleep(requestTime());
    return DemoDatas.requirements[type];
}
//#endregion

//#region 首页
export const getHomeDatas = async () => {
    await sleep(requestTime());
    return DemoDatas.home;
}
//#endregion

//#region 论坛
export const getForumDatas = async () => {
    await sleep(requestTime());
    return DemoDatas.forum;
}
//#endregion

//#region 收藏
export const getCollectionDatas = async () => {
    await sleep(requestTime());
    return DemoDatas.collections;
}
//#endregion