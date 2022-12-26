import Vue from 'vue';
import DemoDatas from '../assets/demo/datas'

const sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms));

const requestTime = () => Math.random() * 2000;

export const login = async (id, password) => {
    await sleep(requestTime());
    const token = DemoDatas.users().find(value => value.id === id && value.password === password).id;
    return token;
}

export const getUser = async () => {
    await sleep(requestTime());
    const token = localStorage.getItem("token");
    if (token)
        return DemoDatas.users().find(value => value.id === token) || null;
    else
        return null;
}

//#region 团队
export const getAllTeams = async () => {
    await sleep(requestTime());
    return DemoDatas.teams();
}

export const getTeamInfo = async (teamId) => {
    await sleep(requestTime());
    return DemoDatas.teams().find((value) => value.id === teamId);
}
//#endregion

//#region 用户
export const getAllUsers = async () => {
    await sleep(requestTime());
    return DemoDatas.users();
}

export const getUserInfo = async (userId) => {
    await sleep(requestTime());
    return DemoDatas.users().find((value) => value.id === userId);
}
//#endregion

//#region 文章
export const getAllArticles = async () => {
    await sleep(requestTime());
    return DemoDatas.articles();
}

export const getArticleInfo = async (articleId) => {
    await sleep(requestTime());
    return DemoDatas.articles().find((value) => value.id === articleId);
}

export const getNewArticles = async (count = 1) => {
    await sleep(requestTime());
    return DemoDatas.articles().slice(-count);
}
//#endregion

//#region 消息
export const getDialogues = async (userId) => {
    await sleep(requestTime());
    return DemoDatas.dialogues().filter(value => value.A.id === userId || value.B.id === userId).map(value => {
        let other = undefined;
        if (value.A.id === userId) {
            other = value.B;
        }
        else {
            other = value.A;
        }

        Vue.delete(value, "A");
        Vue.delete(value, "B");
        Vue.set(value, "other", () => other);

        Vue.set(value, "newest", () => value.messages.at(-1));

        return value;
    });
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
    return DemoDatas.forum();
}
//#endregion