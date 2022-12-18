import DemoDatas from '../assets/demo/datas'

export const getAllTeams = async function () {
    return DemoDatas.teams;
}

export const getTeamInfo = async function (teamId) {
    return DemoDatas.teams.find((value) => value.id === teamId);
}

export const getAllUsers = async function () {
    return DemoDatas.users;
}

export const getUserInfo = async function (userId) {
    console.log("请求数据");
    return DemoDatas.users.find((value) => value.id === userId);
}

export const getAllArticles = async function () {
    return DemoDatas.articles;
}

export const getArticleInfo = async function (articleId) {
    return DemoDatas.articles.find((value) => value.id === articleId);
}

export const getNewArticles = async function (count = 1) {
    return DemoDatas.articles.slice(-count);
}