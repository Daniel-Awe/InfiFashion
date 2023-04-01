import Vue from 'vue'
import DemoDatas from '../assets/demo/datas'

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

const requestTime = () => Math.random() * 1000

//#region 用户

export const login = async (id, password) => {
  await sleep(requestTime())
  const user = DemoDatas.users.find(value => value.id === id && value.password === password)
  if (!user || user.type === 'system') return null
  const token = user.id
  return token
}

export const getUserByToken = async () => {
  await sleep(requestTime())
  const token = localStorage.getItem('token')
  if (token) return { ...(DemoDatas.users.find(value => value.id === token) || null) }
  else return null
}

export const getUserById = async id => {
  await sleep(requestTime())
  return { ...(DemoDatas.users.find(value => value.id === id) || null) }
}

export const identitySwitch = async identity => {
  const token = localStorage.getItem('token')
  if (token) {
    const user = DemoDatas.users.find(value => value.id === token) || null
    user.type = identity
    return true
  } else return false
}

//#endregion

//#region 文章
export const getAllArticles = async () => {
  await sleep(requestTime())
  return DemoDatas.articles
}

export const getArticleInfo = async articleId => {
  await sleep(requestTime())
  return DemoDatas.articles.find(value => value.id === articleId)
}

export const getNewArticles = async (count = 1) => {
  await sleep(requestTime())
  return DemoDatas.articles.slice(-count)
}
//#endregion

//#region 消息
export const getDialogues = async (userId = undefined) => {
  await sleep(requestTime())
  const token = localStorage.getItem('token')
  let temp = DemoDatas.dialogues.filter(value => value.A.id === token || value.B.id === token)
  if (userId) temp = temp.filter(value => value.A.id === userId || value.B.id === userId)
  return temp.map(value => {
    let other = undefined
    if (value.A.id === token) {
      other = value.B
    } else {
      other = value.A
    }

    const o = { ...value }

    Vue.delete(o, 'A')
    Vue.delete(o, 'B')
    Vue.set(o, 'other', () => other)

    Vue.set(o, 'newest', () => value.messages.at(-1))

    return o
  })
}

export const sendMessage = async (userId, text) => {
  const token = localStorage.getItem('token')
  let dialogue = DemoDatas.dialogues.find(value => (value.A.id === userId || value.B.id === userId) && (value.A.id === token || value.B.id === token))
  const message = {
    sender: DemoDatas.users.find(value => value.id === token),
    text,
    date: new Date()
  }
  if (dialogue) {
    dialogue.messages.push(message)
  } else {
    dialogue = {
      id: DemoDatas.dialogues.length + '',
      A: DemoDatas.users.find(value => value.id === token),
      B: DemoDatas.users.find(value => value.id === userId),
      messages: [message]
    }
  }
  return true
}
//#endregion

//#region 服务
export const getServices = async userId => {
  await sleep(requestTime())
  return DemoDatas.services.filter(value => value.author.id === userId)
}
//#endregion

//#region 商家的需求
export const getRequirements = async type => {
  await sleep(requestTime())
  return DemoDatas.requirements[type]
}
//#endregion

//#region 首页
export const getHomeDatas = async () => {
  await sleep(requestTime())
  return DemoDatas.home
}
//#endregion

//#region 论坛
export const getForumDatas = async () => {
  await sleep(requestTime())
  return DemoDatas.forum
}
//#endregion

//#region 收藏
export const getCollectionDatas = async () => {
  await sleep(requestTime())
  return DemoDatas.collections
}
//#endregion

//#region 历史记录
export const getHistoryDatas = async () => {
  await sleep(requestTime())
  return DemoDatas.history
}
//#endregion

//#region 订单
export const getOrdersDatas = async () => {
  await sleep(requestTime())
  return DemoDatas.orders
}
//#endregion

//#region 我的关注
export const getFollowingDatas = async () => {
  await sleep(requestTime())
  return DemoDatas.following
}
//#endregion
