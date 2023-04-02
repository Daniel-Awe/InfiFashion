import { getDataById } from '../helper'
import services from './services'

export default [
  {
    id: '0',
    state: '匹配中',
    title: 'nihao',
    get service() {
      return getDataById(services, '5')
    },
    date: '2023-4-2 21:19'
  },
  {
    id: '1',
    state: '选标中',
    title: 'nihao',
    get service() {
      return getDataById(services, '6')
    },
    date: '2023-4-1 11:31'
  },
  {
    id: '2',
    state: '已结束',
    title: 'nihao',
    get service() {
      return getDataById(services, '7')
    },
    date: '2023-2-23 00:09'
  }
]
