// 首页工具类型分类的ts
export interface Tool {
  name: string
  path: string
  head: {
    keywords: string[]
    description: string
  }
}

export interface ToolCategory {
  title: string
  icon: string
  list: Tool[]
}
