import users from "./users";

export default {
    goldTeams: users.filter(value => value.id === "0" || value.id === "1")
}