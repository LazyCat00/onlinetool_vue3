//统一管理咱们项目用户相关的接口

import request from '@/utils/request'

import type {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
  sysFeedbackData,
  addFeedbackResponseData,
} from './type'

//项目用户相关的请求地址

enum API {
  LOGIN_URL = '/index/login',
  LOGOUT_URL = '/index/logout',
  USERINFO_URL = '/index/info',
  reqFeedBack_URL = '/feedback/query',
  reqAllFeedBack_URL = '/feedback/queryAll',
  reqUpdateFeedBack_URL = '/feedback/update',
  reqAddFeedBack_URL = '/feedback/add',
}
// 登录接口
// export const reqLogin = (data: loginFormData) => {
//   return request.post<any, loginResponseData>(API.LOGIN_URL, data)
// }
export const reqLogin = (data: loginFormData) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data)
}
//获取用户信息

export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL)

export const reqFeedBack = () => request.get<any, any>(API.reqFeedBack_URL)

export const reqAllFeedBack = () =>
  request.get<any, any>(API.reqAllFeedBack_URL)

//退出登录

export const reqUpdateFeedBack = (data: sysFeedbackData) => {
  request.post<any, any>(API.reqUpdateFeedBack_URL, data)
}

export const reqAddFeedBack = (data: any) => {
  return request.post<any, addFeedbackResponseData>(API.reqAddFeedBack_URL, data)
}

export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
