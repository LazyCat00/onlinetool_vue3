// 登录接口需要携带参数ts类型
import type { RouteRecordRaw } from 'vue-router'
export interface loginFormData {
  username: string
  password: string
}
interface datatype {
  token?: string
}
// 登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: datatype // 定义一个动态的 map 类型
  message: string
}

// 新增留言接口返回数据类型
export interface addFeedbackResponseData {
  code: number
  message: string
}

export interface SysUser {
  id: string
  createTime: string
  updateTime: string
  isDeleted: number
  param: Record<string, any>
  username: string
  password: string
  name: string
  phone: string
  headUrl: string | null
  deptId: string | null
  postId: string | null
  description: string | null
  status: number
  roleList: string[] | null
  postName: string | null
  deptName: string | null
}

export interface userInfoResponseData {
  code: number
  message: string
  data: {
    // sysUser: SysUser
    routes: Array<string>
    sysUser: SysUser
  }
}

export interface sysFeedbackData {
  id: string
  content: string
  mail: string
  type: string
  tool: string
  status: string
  hidden: number
  isDeleted: number
}
