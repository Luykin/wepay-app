const util = require('./md5.js')
const PRIVATE_KEY = 'MelonBlock2017'
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getKey = () => {
  const timestamp = parseInt(Date.parse(new Date()) / 10000) + ''
  const key = util.hexMD5(timestamp + PRIVATE_KEY)
  return key
}
const getSign=(data) =>{
  let sortedKeys = Object.keys(data).sort()
  let signStr = ''
  for (let item in sortedKeys) {
    const key = sortedKeys[item]
    signStr += key + '=' + data[key]
  }
  signStr += 'key=' + PRIVATE_KEY
  const sign = util.hexMD5(signStr)
  return sign
}
module.exports = {
  formatTime: formatTime,
  getKey: getKey,
  getSign:getSign
}
