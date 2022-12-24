import DemoDatas from '../assets/demo/datas'

const sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms));

const requestTime = () => Math.random() * 2000;

//#region 团队
export const getAllTeams = async function () {
    await sleep(requestTime());
    return DemoDatas.teams;
}

export const getTeamInfo = async function (teamId) {
    await sleep(requestTime());
    return DemoDatas.teams.find((value) => value.id === teamId);
}
//#endregion

//#region 用户
export const getAllUsers = async function () {
    await sleep(requestTime());
    return DemoDatas.users;
}

export const getUserInfo = async function (userId) {
    await sleep(requestTime());
    return DemoDatas.users.find((value) => value.id === userId);
}
//#endregion

//#region 文章
export const getAllArticles = async function () {
    await sleep(requestTime());
    return DemoDatas.articles;
}

export const getArticleInfo = async function (articleId) {
    await sleep(requestTime());
    return DemoDatas.articles.find((value) => value.id === articleId);
}

export const getNewArticles = async function (count = 1) {
    await sleep(requestTime());
    return DemoDatas.articles.slice(-count);
}
//#endregion

//#region 首页
export const getHomeDatas = async function () {
    await sleep(requestTime());
    return DemoDatas.home;
}
//#endregion

//#region 论坛
export const getForumDatas = async function () {
    await sleep(requestTime());
    return DemoDatas.forum;
}
//#endregion