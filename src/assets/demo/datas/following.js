import users from './users'

export default {
  myFollowing: users.filter(value => value.id === '0' || value.id === '1' || value.id === '3')
}
