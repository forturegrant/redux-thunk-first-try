const tableList = require('./datas/tableList')
const login = require('./datas/login')
const userInfo = require('./datas/userInfo')

const suffix = '.json'

module.exports = {
  [`/login${suffix}`]: login,
  [`/userInfo${suffix}`]: userInfo,
  [`/tableList${suffix}`]: tableList,
}
