// 创建工具（功能）相关的小仓库
import { defineStore } from 'pinia'
const useToolStore = defineStore('ToolStore', {
  // 小仓库存储数据的地方
  state: () => {
    return {
      tools: [
        {
          title: '只有神知道的世界',
          icon: 'mystery',
          list: [
            {
              name: '抖音视频下载',
              path: '/tiktok_download',
              icon: 'tiktok',
              head: {
                keywords: ['', ''],
                description: '抖音视频下载',
              },
            },
            {
              name: '哔哩哔哩视频下载',
              path: '/bilibili_download',
              icon: 'bilibili',
              head: {
                keywords: ['', ''],
                description: '哔哩哔哩视频下载',
              },
            },
          ],
        },
        // 其他工具
        {
          title: '其他工具',
          icon: 'text',
          list: [
            {
              name: '天气查询',
              path: 'weather_query',
              icon: 'weather',
              head: {
                keywords: ['天气查询'],
                description: '全国天气查询',
              },
            },
            {
              name: '人生小格',
              path: 'life_grid',
              icon: 'grid',
              head: {
                keywords: ['人生小格'],
                description: '全国天气查询',
              },
            },
          ],
        },
        // 数据转换
        {
          title: '数据转换',
          icon: 'convert',
          list: [
            {
              name: '温度单位转换',
              path: '/temperature_conversion',
              icon: 'temperature',
              head: {
                keywords: ['', ''],
                description: '国际温度单位转换',
              },
            },
            {
              name: '进制转换',
              path: '/binary_conversion',
              icon: 'binary',
              head: {
                keywords: ['', ''],
                description: '计算机进制转换',
              },
            },
            {
              name: '重量单位转换',
              path: '/weight_conversion',
              icon: 'weight',
              head: {
                keywords: ['', ''],
                description: '重量单位转换',
              },
            },
            {
              name: '面积单位转换',
              path: '/area_conversion',
              icon: 'area',
              head: {
                keywords: ['', ''],
                description: '面积单位转换',
              },
            },
          ],
        },
        // 文字处理
        {
          title: '文字处理',
          icon: 'text',
          list: [
            {
              name: '随机数生成',
              path: '/random_number',
              icon: 'random',
              head: {
                keywords: ['文本对比', '代码对比'],
                description: '生成任意随机数',
              },
            },
          ],
        },
        // 编程开发

        {
          title: '编程开发',
          icon: 'code',
          list: [
            {
              name: 'XML转JSON',
              path: '/',
              icon: 'xml',
              head: {
                keywords: ['文本对比', '代码对比'],
                description: 'XML和JSON互转',
              },
            },
            {
              name: 'URL 格式化',
              path: '/',
              icon: 'url',
              head: {
                keywords: ['文本对比', '代码对比'],
                description: '格式化URL参数',
              },
            },
          ],
        },

        // 游戏开发

        {
          title: '游戏开发',
          icon: 'code',
          list: [
            {
              name: '飞机大战',
              path: '/',
              icon: 'xml',
              head: {
                keywords: ['文本对比', '代码对比'],
                description: 'XML和JSON互转',
              },
            },
            {
              name: 'URL 格式化',
              path: '/',
              icon: 'url',
              head: {
                keywords: ['文本对比', '代码对比'],
                description: '格式化URL参数',
              },
            },
          ],
        },
      ],
    }
  },
  // 处理异步|逻辑的地方
  actions: {},
  getters: {
    // 获取所有工具
    allTools(): any {
      return this.tools
    },

    // 根据类别获取工具
    getToolsByCategory: (state) => (category: any) => {
      return state.tools.find((tool) => tool.title === category)
    },
  },
})
// 对外暴露获取小仓库的方法

export default useToolStore
