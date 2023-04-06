import users from './users'

export default {
  extendTeam: users.filter(value => value.id === '6' || value.id === '7' || value.id === '9' || value.id === '10')
}
