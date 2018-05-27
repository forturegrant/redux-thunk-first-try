import axios from 'axios'
import {prefix, suffix, timeout} from '../config'


// axios配置
const axiosBaseConfig = {
    baseURL: 'localhost:1112',
    timeout: timeout,
    headers: {'Content-Type': 'text/plain'},
    method: 'post',
    // 跨域请求，是否带上认证信息
    withCredentials: true, // default
    // http返回的数据类型
    // 默认是json，可选'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default
    // http请求返回状态码检查
    validateStatus: status =>
        status >= 200 && status < 300, // default
    // 请求数据预处理
    transformRequest: [(data, headers) => {
        // 加入token？
        const token = sessionStorage.getItem('token')
        if (token) {
            data.token = token
        }
        // 请求对象转换成jon字符串
        if (typeof data === 'object') {
            return JSON.stringify(data)
        }
        return data
    }],
    // 返回数据预处理
    transformResponse: [respData =>
        // 检查返回status值
        // if (typeof respData.status !== 'undefined') {
        //   if (respData.status === 1) {
        //     return respData
        //   }
        //   throw new Error(respData.errMsg || 'respData.status不为0')
        // }
        respData,
    ],
}
/*import {
    createAction,
} from 'redux-actions'
import {
    login,
    register,
    userInfo
} from '../api/common.js'
import {
    createAjaxAction,
    fakeAjaxAction,
} from 'utils'


// export const requestAmList = createAction('request am list')
// export const recevieAmList = createAction('receive am list')
// export const fetchAmList = createAjaxAction(common.amList, requestAmList, recevieAmList)
// export const resetAmList = createAction('reset am list')
export const fetchLogin = createAjaxAction(login)
export const fetchRegister = createAjaxAction(register)
export const userInfo = createAjaxAction(userInfo)*/

axios.defaults.baseURL = 'http://localhost:1112';

export const fetchRegister = (startAction, values, cal, endAction) => (dispatch) => {
    startAction && dispatch(startAction());
    axios.post('/register', values).then((res) => {
        cal && cal(res);
        endAction && dispatch(endAction());
    })
}

