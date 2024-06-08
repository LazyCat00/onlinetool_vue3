<template>
  <div>
    <div>
      <div v-if="show" class="myDiv">
        <div @click="show = false" class="close-btn">×</div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let show = ref(true)
</script>

<style scoped lang="scss">
.myDiv {
  position: relative;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .close-btn {
    position: absolute; /* 按钮绝对定位 */
    top: 0; /* 按钮位于容器顶部 */
    right: 0; /* 按钮位于容器右侧 */
    transform: translate(
      50%,
      -50%
    ); /* 将按钮向左上角偏移自身宽度和高度的一半，使得按钮中心位于右上角中心 */
    width: 30px; /* 按钮宽度为30像素 */
    height: 30px; /* 按钮高度为30像素 */
    border-radius: 50%; /* 边框半径设置为50%，使按钮呈圆形 */
    background-color: $theme;
    color: white; /* 文本颜色为白色 */
    display: flex; /* 使用 Flex 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    cursor: pointer; /* 鼠标悬停时显示指针 */
  }
}
</style>
