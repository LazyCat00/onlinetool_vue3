<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template
      v-if="
        !item.children ||
        (item.children.length === 0 && checkShowChildren(item.children) == 0)
      "
    >
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由，但是只有一个子路由 -->
    <template v-if="item.children && checkShowChildren(item.children) == 1">
      <el-menu-item :index="item.path" @click="goRoute">
        <template #title>
          <span>{{ onlySon(item.children) }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有子路由，有多个子路由(大于一个) -->

    <el-sub-menu
      v-if="
        item.children &&
        item.children.length > 1 &&
        !item.meta.hidden &&
        checkShowChildren(item.children) > 1
      "
      :index="item.path"
    >
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- {{ item.children }} -->
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { ref, Ref } from 'vue'
import { User } from '@element-plus/icons-vue'
import emitter from '@/utils/emitter'
let userStore = useUserStore()

defineProps(['menuList'])

const router = useRouter()
const goRoute = (vc: any) => {
  console.log(vc.index)

  router.push(vc.index)
}

const checkShowChildren = (children: any) => {
  if (!children || !Array.isArray(children)) {
    return 0
  }
  const count = children.filter(
    (child) => child.meta && child.meta.hidden == false,
  ).length

  return count
}

const onlySon = (children: any) => {
  if (!children || !Array.isArray(children)) {
    return null
  }
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    if (child.meta && child.meta.hidden == false) {
      const tmp = child.meta.title

      return tmp // 返回第一个 hidden 为 false 的子对象的 title
    }
  }

  return null // 如果没有找到 hidden 为 false 的子对象
}
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 0.625rem;
  font-size: 1.5rem;
  font-weight: 700;
  word-spacing: 0.0625rem;
  color: rgb(47, 62, 76);
}
</style>
