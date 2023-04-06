import services from './services'
//设计团队 页面
export default {
  designs: services.filter(value => value.id)
}
