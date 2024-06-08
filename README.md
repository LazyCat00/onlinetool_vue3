# Vue 3 + TypeScript + Vite

## 项目运行:

- pnpm i
- pnpm run dev

## 格式化代码：

- pnpm run fromat

## 路由

```ts
interface RouteRecordRaw {
  path: string
  name?: string
  component?: Component
  components?: Components
  redirect?: string | Location | Function
  alias?: string | string[]
  children?: RouteRecordRaw[]
  meta?: any
  props?: boolean | Object | RoutePropsFunction
  caseSensitive?: boolean
  pathToRegexpOptions?: PathToRegexpOptions
}
```
