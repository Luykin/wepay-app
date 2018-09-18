import axios from 'axios'
import wepyAxiosAdapter from 'wepy-plugin-axios/dist/adapter'
import qs from 'qs'
import wepy from 'wepy';
import { getSign } from '../pages/utils/util'
// adapter 的初始化一定要在任何其它的 axios.create 之前执行
const adapter = wepyAxiosAdapter(axios)
// console.log(typeof adapter)
// axios.create({
//   adapter: adapter // 此属性为可以在小程序中使用 axios 的关键
//   // ...其它属性
// })
axios.config.adapter = adapter

const server_url = wepy.$instance.globalData.server_url
const options = {
	headers: {
		'content-type': 'application/x-www-form-urlencoded'
	}
}
// console.log(JSON.stringify(adapter))
export function getConfig(uaid) {
	const url = `${server_url}/config`
	let data = {
		uaid: uaid
	}
	return axios.post(url, qs.stringify(Object.assign({ sign: getSign(data) })), options)
		.then((res) => {
			return Promise.resolve(res)
		})
		.catch((err) => {
			console.log(err)
			return Promise.resolve(err)
		})
}
