// vite提供了loadEnv，可以加载不同环境下面的环境变量
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入SVG需要的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 获取各种环境下对应的变量 (有哪些变量，可以去环境变量的文件里面查看)
  // loadEnv(当前所处的开发环境, 环境文件的父级路径)
  // process.cwd()：就是项目根目录的路径
  let env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    // 代理
    server: {
      // port: 5173, // 你希望使用的端口号
      proxy: {
        '/api': {
          // target: env.VITE_SERVE,
          target: 'http://47.97.32.27:56577',
          // target，为实际的后端 URL，它会追加到属性名配置的 /api 这个片段的前面，例如访问 /api/some_end_point会转换为 http://localhost:3001/api/some_end_point。
          // disableHostCheck: true,//这是内网穿透需要的配置的
          ws: true,  //用于支持websocket
          changeOrigin: true,
          rewrite: (path) => {
            console.log('Original Path:', path);
            const newPath = path.replace(/^\/api/, '');
            console.log('Rewritten Path:', newPath);
            return newPath;
          },
        },
      },
    },
  }
})
