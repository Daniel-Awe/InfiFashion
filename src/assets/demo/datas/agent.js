import { getDataById } from '../helper'
import users from './users'

export default [
  {
    id: '0',
    get author() {
      return getDataById(users, '1')
    },
    name: '俄罗斯服饰代理顾问',
    cover: 'https://img.js.design/assets/img/63861bbbf68f16799e7cf6f9.jpg#98396a1a97b7b86563477748dbddba19',
    price: '￥6800/起',
    buyCount: 134,
    comment: 99,
    favorableRate: 100
  },
  {
    id: '1',
    get author() {
      return getDataById(users, '2')
    },
    name: '俄罗斯服饰代理顾问',
    cover: 'https://img.js.design/assets/img/63861c3ff68f16799e7d1b43.jpg#e796f16de22e00ca86c852d03f0556c3',
    price: '￥12000/起',
    buyCount: 241,
    comment: 99,
    favorableRate: 100
  },
  {
    id: '2',
    get author() {
      return getDataById(users, '3')
    },
    name: '非洲服饰代理顾问',
    cover: 'https://img.js.design/assets/img/63861ced1503685afe98d1f4.jpg#7185c638ce4c9d318d04dfef57564473',
    price: '￥3800/起',
    buyCount: 98,
    comment: 99,
    favorableRate: 100
  },
  {
    id: '4',
    get author() {
      return getDataById(users, '4')
    },
    name: '非洲服饰代理顾问',
    cover: 'https://img.js.design/assets/img/63861e3e1503685afe992108.jpg#c10b6e947b99d853413ad32f912e968f',
    price: '￥6800/起',
    buyCount: 102,
    comment: 99,
    favorableRate: 100
  }
]
