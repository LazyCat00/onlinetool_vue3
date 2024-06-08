<template>
  <div class="category">
    <ul class="tools">
      <li v-for="items in toolStore.allTools">
        <StandardCard :title="items.title" :icon="items.icon">
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
              <FunctionCard
                :name="item.name"
                :icon="item.icon"
                :description="item.head.description"
              ></FunctionCard>
            </el-col>
          </el-row>
        </StandardCard>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useToolStore from '@/store/modules/tool.ts' // 导入工具仓库
import StandardCard from '@/components/UI/StandardCard.vue'
import FunctionCard from '@/components/UI/FunctionCard.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const goRoute = (item: any) => {
  console.log(item)
  // 使用路由对象的 push 方法进行跳转
  // 跳转到对应的路径
  // path 参数为当前点击的 item 的路径
  router.push({ path: item.path })
}
// 使用工具仓库中的 allTools getter 获取所有工具数据
let toolStore = useToolStore()
</script>

<style scoped lang="scss"></style>
