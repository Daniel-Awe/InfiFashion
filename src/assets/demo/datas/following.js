import users from './users'
//我的关注 页面
export default {
  myFollowing: users.filter(value => value.id === '0' || value.id === '1' || value.id === '3')
}
