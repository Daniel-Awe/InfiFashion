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