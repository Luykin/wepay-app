import qs from 'qs'
import { getSign, getThirdVersionSign } from '../pages/utils/util'
import { axios, apiOptions, options } from './apiConfig'
// 在线参数
export function getConfig(uaid, key) {
  const url = `${apiOptions.server_url}/config`
  let data = {
    uaid: uaid,
    k: key
  }
  return axios.post(url, Object.assign({ sign: getSign(data) }, data), options)
    .then((res) => {
      return Promise.resolve(res)
    })
    .catch((err) => {
      console.log(err)
      return Promise.resolve(err)
    })
}
// 用户行为，签到等。
export function userAction(uaid, user_id, action) {
  const url = `${apiOptions.server_url}/user_info`
  let data = {
    uaid: uaid,
    user_id: user_id,
    market_position: apiOptions.market_position
  }
  if (action) {
    Object.assign(data, {
      action
    })
  }
  return axios.post(url, Object.assign({ sign: getSign(data) }, data), options)
    .then((res) => {
      return Promise.resolve(res)
    })
    .catch((err) => {
      console.log(err)
      return Promise.resolve(err)
    })
}
// 网红头像签名等接口
export function getOtherInfo(type, category, page, num) {
  const url = 'https://dev.crawl.melonblock.com/crawl/gexing/data'
  let data = {
    type: type,
    category: category,
    page: page,
    num: num
  }
  return axios.get(url, {
      params: Object.assign({ sign: getThirdVersionSign(data) }, data)
    })
    .then((res) => {
      return Promise.resolve(res)
    })
    .catch((err) => {
      console.log(err)
      return Promise.resolve(err)
    })
}
