import axios from 'axios'
import wepyAxiosAdapter from 'wepy-plugin-axios/dist/adapter'
// adapter 的初始化一定要在任何其它的 axios.create 之前执行
const adapter = wepyAxiosAdapter(axios)
axios.defaults.adapter = adapter

const apiOptions = {
	market_position: 'WX',
	server_url: 'https://qzone.melonblock.com/wechat'
}
const options = {
	headers: {
		'content-type': 'application/x-www-form-urlencoded'
	}
}
module.exports = {
	axios,
	apiOptions,
	options
}