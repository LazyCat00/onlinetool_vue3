<template>
  <div class="container">
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
  </div>
</template>

<script setup lang="ts">
import emitter from '@/utils/emitter'
import { ref, Ref } from 'vue'

let drawer: Ref<boolean> = ref(false)
// 给emitter绑定send-drawer事件
emitter.on('send-drawer', (value: any) => {
  console.log(value)
  drawer.value = value as boolean
})
</script>

<style scoped lang="scss">
.container {
  background-color: #f4f8fb;
  min-height: 100vh;
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
