import qs from 'qs'
import { getSign } from '../pages/utils/util'
import {axios, server_url, options} from './apiConfig'
// 在线参数
export function getConfig(uaid, key) {
  const url = `${server_url}/config`
  let data = {
    uaid: uaid,
    k: key
  }
  return axios.post(url,Object.assign({ sign: getSign(data) }, data), options)
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((err) => {
    console.log(err)
    return Promise.resolve(err)
  })
}
// 用户行为，签到等。
export function userAction(uaid, action, market_position) {
  const url = `${server_url}/user_info`
  let data = {
    uaid: uaid,
    action: action,
    market_position: market_position
  }
  return axios.post(url,Object.assign({ sign: getSign(data) }, data), options)
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((err) => {
    console.log(err)
    return Promise.resolve(err)
  })
}