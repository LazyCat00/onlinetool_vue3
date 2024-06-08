import type { RouteRecordRaw } from 'vue-router'

// 对外暴露配置路由（常量路由）全部用户都可以访问到的页面
export const constantRoute: RouteRecordRaw[] = [
  // 首页
  {
    // 登入成功后展示数据的路由
    name: 'layout', // 命名路由--做权限会用到
    path: '/',
    meta: {
      hidden: false,
      title: '首页',
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        meta: {
          hidden: false,
          title: '首页',
        },
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/user_info',
        meta: {
          hidden: true,
        },
        component: () => import('@/views/user_info/index.vue'),
      },
      {
        name: '/temperature_conversion',
        path: '/temperature_conversion/',
        meta: {
          hidden: true,
        },
        component: () => import('@/views/temperature_conversion/index.vue'),
        props: true, // 启用props传参
      },

      {
        name: '/binary_conversion',
        path: '/binary_conversion/',
        meta: {
          hidden: true,
        },
        component: () => import('@/views/binary_conversion/index.vue'),
        props: true, // 启用props传参
      },
      {
        name: '/tiktok_download',
        path: '/tiktok_download',
        meta: {
          hidden: true,
        },
        component: () => import('@/views/tiktok_download/index.vue'),
        props: true, // 启用props传参
      },
      {
        name: '/bilibili_download',
        path: '/bilibili_download/',
        meta: {
          hidden: true,
        },
        component: () => import('@/views/bilibili_download/index.vue'),
        props: true, // 启用props传参
      },
      {
        name: '/weather_query',
        path: '/weather_query',
        meta: {
          hidden: true,
        },
        component: () => import('@/views/weather_query/index.vue'),
      },
      {
        name: '/life_grid',
        path: '/life_grid',
        meta: {
          hidden: true,
        },
        component: () => import('@/views/life_grid/index.vue'),
      },
      {
        name: '/random_number',
        path: '/random_number',
        meta: {
          hidden: true,
        },
        component: () => import('@/views/random_number/index.vue'),
      },
    ],
  },

  // 登录
  {
    name: 'login', // 命名路由--做权限会用到
    path: '/login',
    meta: {
      title: '登录',
      hidden: true,
    },
    component: () => import('@/views/login/index.vue'),
  },

  // 用户中心
  {
    name: 'user_info', // 命名路由--做权限会用到
    path: '/user_info',
    meta: {
      hidden: true,
    },
    redirect: '/user_info/info',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/user_info/info',
        component: () => import('@/views/user_info/index.vue'),
        meta: {
          title: '用户中心',
          hidden: true,
        },
      },
    ],
  },

  // 留言反馈
  {
    name: 'Feedback', // 命名路由--做权限会用到
    path: '/layout_feedback',
    meta: {
      hidden: false,
      title: '留言系统',
    },
    redirect: '/layout_feedback/feedback',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        name: 'LeaveWord',
        path: '/layout_feedback/feedback',
        component: () => import('@/views/layout_feedback/index.vue'),
        meta: {
          title: '留言反馈',
          hidden: false,
        },
      },
      {
        name: 'FeedbackManage',
        path: '/layout_feedback/manage',
        component: () => import('@/views/feedback_manage/index.vue'),
        meta: {
          title: '留言管理',
          icon: null,
          hidden: true,
        },
        children: [],
      },
    ],
  },

  // 帮助
  {
    name: 'layout_help', // 命名路由--做权限会用到
    path: '/layout_help',
    meta: {
      hidden: false,
    },
    redirect: '/layout_help/help',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/layout_help/help',
        component: () => import('@/views/help/index.vue'),
        meta: {
          title: '帮助',
          hidden: false,
        },
      },
    ],
  },

  // 404
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404', // 命名路由(做路由权限用的)
    meta: {
      title: '404',
      hidden: true,
    },
  },
]

// 异步路由
export const asyncRoute: RouteRecordRaw[] = [
  // 留言反馈
  // {
  //   name: 'Feedback', // 命名路由--做权限会用到
  //   path: '/layout_feedback',
  //   meta: {
  //     hidden: false,
  //     title: '留言系统',
  //   },
  //   redirect: '/layout_feedback/feedback',
  //   component: () => import('@/layout/index.vue'),
  //   children: [
  //     {
  //       name: 'LeaveWord',
  //       path: '/layout_feedback/feedback',
  //       component: () => import('@/views/layout_feedback/index.vue'),
  //       meta: {
  //         title: '留言反馈',
  //         hidden: false,
  //       },
  //     },
  //     {
  //       name: 'FeedbackManage',
  //       path: '/layout_feedback/manage',
  //       component: () => import('@/views/feedback_manage/index.vue'),
  //       meta: {
  //         title: '留言管理',
  //         icon: null,
  //         hidden: false,
  //       },
  //       children: [],
  //     },
  //   ],
  // },
  // 工具反馈
  {
    name: 'layout_toolMgr', // 命名路由--做权限会用到
    path: '/layout_toolMgr',
    meta: {
      hidden: false,
    },
    redirect: '/layout_toolMgr/toolMgr',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/layout_toolMgr/toolMgr',
        component: () => import('@/views/layout_toolMgr/index.vue'),
        meta: {
          title: '工具管理',
          hidden: false,
        },
      },
    ],
  },

  // 系统设置
  {
    name: 'layout_setting', // 命名路由--做权限会用到
    path: '/layout_setting',
    meta: {
      hidden: false,
    },
    redirect: '/layout_setting/setting',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/layout_setting/setting',
        component: () => import('@/views/system_setting/index.vue'),
        meta: {
          title: '系统设置',
          hidden: false,
        },
      },
    ],
  },
]

// 任意路由
export const anyRoute: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
