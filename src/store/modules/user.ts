// 创建用户相关的小仓库
import { defineStore } from 'pinia'
import router from '@/router'
// 引入接口
import { reqLogin, reqUserInfo, reqLogout, reqAddFeedBack } from '@/api/user'
// 引入数据类型
import type {
  loginFormData,
  loginResponseData,
  sysFeedbackData,
  userInfoResponseData,
  addFeedbackResponseData
} from '@/api/user/type'
import type { UserState } from './types/type'
import { constantRoute, asyncRoute, anyRoute } from '@/router/routes'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token.ts'
//@ts-ignore
import cloneDeep from 'lodash/cloneDeep'

const filterAsyncRoute = (asyncRoute: any, routes: any) => {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      item.meta.hidden = false
      if (item.children && item.children.length) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

const mergeRoutes = (route1: any[], route2: any[]) => {
  const routeMap: Map<string, any> = new Map()

  // Add route1 to routeMap
  route1.forEach((route) => {
    routeMap.set(route.name, route)
  })

  // Override with route2
  route2.forEach((route) => {
    routeMap.set(route.name, route)
  })

  // Convert map values to array
  return Array.from(routeMap.values())
}

// 仓库名User
const useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户唯一标识token
      menuRoutes: constantRoute,
    }
  },
  // 处理异步|逻辑的地方
  actions: {
    // 用户登录方法
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await reqLogin(data)

      console.log(result)
      // 登录请求：成功200 -> token
      // 登录请求：失败201 -> 登录失败错误的信息
      if (result.code == 200) {
        this.token = result.data.token as string
        // 本地存储持久化存储一份
        SET_TOKEN(result.data.token as string)

        // 在这里调用 userInfo 方法，并等待其执行完成
        await this.userInfo()

        // 能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        // 它会立即返回一个被拒绝的 Promise
        return Promise.reject(new Error(result.message))
      }
    },

    // 用户退出登录方法
    async userLogout() {
      const result = await reqLogout()

      console.log(result)
      // 登录请求：成功200 -> token
      // 登录请求：失败201 -> 登录失败错误的信息
      if (result.code == 200) {
        console.log('成功！')
        // 本地存储持久化存储一份
        REMOVE_TOKEN()
      }
    },

    // 获取用户信息
    async userInfo() {
      console.log('userInfo执行')
      const result: userInfoResponseData = await reqUserInfo()
      if (result.code == 200) {
        const userAsyncRoute = filterAsyncRoute(
          cloneDeep(asyncRoute),
          result.data.routes,
        )
        const constantRoute2 = filterAsyncRoute(
          cloneDeep(constantRoute),
          result.data.routes,
        )

        const arr = [...userAsyncRoute, ...anyRoute]
        // 合并 constantRoute 和 constantRoute2，使用 constantRoute2 覆盖相同属性
        const mergedConstantRoutes = mergeRoutes(constantRoute, constantRoute2)

        this.menuRoutes = [...mergedConstantRoutes, ...arr]
        console.log('this.menuRoutes' + JSON.stringify(this.menuRoutes))

        arr.forEach((item: any) => {
          router.addRoute(item)
        })

        return 'ok'
      }
    },

    // 新增留言
    async addFeedback(feedback: any) {
      const result: addFeedbackResponseData = await reqAddFeedBack(feedback)
      if (result.code == 200) {
        return 'ok'
      } else {
        // 它会立即返回一个被拒绝的 Promise
        return Promise.reject(new Error(result.message))
      }
    },
  },
  getters: {},
})
// 对外暴露获取小仓库的方法
export default useUserStore
