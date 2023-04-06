import { getDataById } from '../helper'
import services from './services'
// 我的需求 页面
export default [
  {
    id: '0',
    state: '匹配中',
    get service() {
      return getDataById(services, '5')
    },
    date: '2023-4-2 21:19'
  },
  {
    id: '1',
    state: '选标中',
    get service() {
      return getDataById(services, '6')
    },
    date: '2023-4-1 11:31'
  },
  {
    id: '2',
    state: '已结束',
    get service() {
      return getDataById(services, '7')
    },
    date: '2023-2-23 00:09'
  },
  {
    id: '3',
    state: '选标中',
    get service() {
      return getDataById(services, '3')
    },
    date: '2023-2-21 21:12'
  },
  {
    id: '4',
    state: '匹配中',
    get service() {
      return getDataById(services, '2')
    },
    date: '2023-2-23 00:09'
  },
  {
    id: '5',
    state: '待公开',
    get service() {
      return getDataById(services, '7')
    },
    date: '2023-2-23 00:09'
  },
  {
    id: '6',
    state: '选标中',
    get service() {
      return getDataById(services, '6')
    },
    date: '2022-9-18 19:21'
  },
  {
    id: '7',
    state: '已结束',
    get service() {
      return getDataById(services, '5')
    },
    date: '2022-12-12 01:49'
  }
]
