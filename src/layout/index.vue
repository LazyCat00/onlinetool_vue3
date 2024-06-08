<template>
  <div class="layout_panel">
    <el-tooltip
      class="box-item"
      effect="dark"
      content="打开菜单"
      placement="right"
    >
      <button class="side-menu" @click="emitter.emit('send-drawer', true)">
        <svg-icon name="menu"></svg-icon>
      </button>
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="请作者喝一杯咖啡"
      placement="right"
    >
      <button class="sponsor-button">
        <svg style="width: 2rem; height: 2rem">
          <use xlink:href="#icon-coffee" fill="#249FFD"></use>
        </svg>
      </button>
    </el-tooltip>

    <div class="layout_menu">
      <el-drawer
        v-model="drawer"
        :with-header="false"
        direction="ltr"
        size="30vh"
      >
        <el-menu active-text-color="#ffd04b" text-color="black">
          <div style="margin-bottom: 50px">
            <h1>牛牛工具箱</h1>
          </div>
          <el-menu-item
            v-if="userStore.token"
            style="border-bottom: 1px solid #dcdfe6"
            @click="goRoute('/user_info')"
          >
            <template #title>
              <el-icon style="color: red"><User /></el-icon>
              <span>用户中心</span>
            </template>
          </el-menu-item>
          <el-menu-item
            v-else-if="!userStore.token"
            style="border-bottom: 1px solid #dcdfe6"
            @click="emitter.emit('send-centerDialogVisible', true)"
          >
            <template #title>
              <el-icon style="color: red"><User /></el-icon>
              <span>未登录</span>
            </template>
          </el-menu-item>
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-drawer>
    </div>
    <div>
      <el-scrollbar height="100vh">
        <el-row justify="center">
          <el-col :xs="21" :sm="18" :md="15" :lg="12">
            <!-- 这里是居中的内容 -->
            <div class="layout_container" style="margin-top: 50px">
              <Login />
              <div class="lalyout_title">
                <LayoutTitle />
              </div>
              <div class="lalyout_welcome">
                <Welcome />
              </div>
              <div class="layout_main">
                <Main></Main>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutTitle from './LayoutTitle/index.vue'
import Welcome from './Welcome/index.vue'
import Menu from './LayoutMenu/index.vue'
import Login from '@/views/login/index.vue'
// 内容展示区
// 内容展示区
import Main from './LayoutMain/index.vue'
import useUserStore from '@/store/modules/user'
// 引入组合式API函数之生命周期函数
import { onMounted, ref, Ref } from 'vue'
import { User } from '@element-plus/icons-vue'
import emitter from '@/utils/emitter'
import { useRouter } from 'vue-router'
let userStore = useUserStore()
let drawer: Ref<boolean> = ref(false)
onMounted(() => {
  if (userStore.token) {
    userStore.userInfo()
  }
})
const router = useRouter()
const goRoute = (path: any) => {
  console.log(path)

  router.push(path)
}
// 给emitter绑定send-drawer事件
emitter.on('send-drawer', (value: any) => {
  console.log(value)
  drawer.value = value as boolean
})
</script>

<style scoped lang="scss">
.layout_panel {
  width: 100%;
  background-color: #f4f8fb;
  .side-menu {
    position: fixed;
    z-index: 999; /* 设置按钮的堆叠顺序，确保它位于其他内容之上 */
    top: 3vh;
    margin-left: 3vh;
    width: 6vh;
    height: 6vh;
    border-radius: 50%; /* 使按钮变成圆形 */
    background-color: #fff; /* 设置按钮背景色 */
    border: none; /* 移除边框 */
    cursor: pointer; /* 鼠标悬停时显示指示光标 */
    outline: none; /* 移除点击时的外边框 */
  }
  .sponsor-button {
    position: fixed;
    z-index: 999; /* 设置按钮的堆叠顺序，确保它位于其他内容之上 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    bottom: 3vh;
    margin-left: 3vh;
    width: 6vh;
    height: 6vh;
    border-radius: 50%; /* 使按钮变成圆形 */
    background-color: #fff; /* 设置按钮背景色 */
    border: none; /* 移除边框 */
    cursor: pointer; /* 鼠标悬停时显示指示光标 */
    outline: none; /* 移除点击时的外边框 */
  }
}
</style>
