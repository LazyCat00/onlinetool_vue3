<template>
  <div class="category">
    <ul class="tools">
      <li v-for="items in toolStore.allTools">
        <StandardCard :title="items.title" :icon="items.icon">
          <div class="container">
            <el-row>
              <el-col
                class="col"
                :xs="12"
                :sm="12"
                :md="8"
                :lg="6"
                v-for="item in items.list"
                @click="goRoute(item)"
              >
                <div class="grid-item">
                  <div class="icon_wrapper">
                    <svg-icon
                      :name="item.icon"
                      color="#249FFD"
                      height="100%"
                      width="100%"
                    ></svg-icon>
                  </div>
                  <div class="describe_wrapper">
                    <h1
                      style="
                        font-size: 16px;
                        font-weight: 700;
                        margin-bottom: 5px;
                      "
                    >
                      {{ item.name }}
                    </h1>
                    <h1 style="font-size: 14px">{{ item.head.description }}</h1>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </StandardCard>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useToolStore from '@/store/modules/tool.ts' // 导入工具仓库
import StandardCard from '@/components/UI/StandardCard.vue'
import { useRouter } from 'vue-router'
// 使用工具仓库中的 allTools getter 获取所有工具数据
let toolStore = useToolStore()
const router = useRouter()

const goRoute = (item: any) => {
  console.log(item)
  // 使用路由对象的 push 方法进行跳转
  // 跳转到对应的路径
  // path 参数为当前点击的 item 的路径
  router.push({ path: item.path })
}
</script>

<style scoped lang="scss">
.category {
  .container {
    // min-height: auto;
    background-color: red;

    .col {
      background-color: green;
    }

    .grid-item {
      display: flex;
      /* 使用 Flexbox 布局 */
      align-items: center;
      /* 垂直居中对齐 */
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      /* 水平偏移量，垂直偏移量，模糊半径，阴影扩散半径 */
      border-radius: 5px;
      margin: 0 auto;
      /* 水平居中 */
      width: 95%;
      align-content: stretch;

      /* 让内容撑开 */
      .icon_wrapper {
        flex: 1;
      }

      .describe_wrapper {
        display: flex;
        /* 使用 Flexbox 布局 */
        flex-direction: column;
        flex: 3;

        /* 垂直排列子元素 */
        /* 设置最大高度 */
        h1 {
          overflow-x: hidden;
          overflow-y: hidden;
          // color: red;
        }
      }
    }
  }
}
</style>
