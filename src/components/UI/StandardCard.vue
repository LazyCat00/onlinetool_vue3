<template>
  <div class="standard_card">
    <div v-if="title" class="label">
      <svg-icon
        v-if="icon"
        :name="icon"
        color="#fff"
        height="20px"
        width="20px"
      ></svg-icon>
      <h1 style="font-weight: 700">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
// 定义组件的 props
// ?表示可选，你可以选择传递它也可以不传递它。
defineProps<{
  title?: string
  icon?: string // 添加了一个名为 icon 的属性，类型为字符串
}>()
</script>

<style scoped lang="scss">
.standard_card {
  width: 100%;
  // height: 100px;
  background-color: #fff;
  // background-color: #bfa;
  position: relative;
  margin-bottom: 60px;
  padding: 5%;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  /* 设置相对定位 */
  .label {
    font-size: 1.3rem;
    /* 自动调整高度 */
    position: absolute;
    /* 设置绝对定位 */
    top: 0;
    left: 0;
    transform: translate(2.5vh, -50%);
    /* 距离左侧距离 */
    background-color: #249ffd;
    /* 背景颜色 */
    color: white;

    /* 字体颜色 */
    padding: 5px;
    /* 内边距 */
    text-align: center;
    /* 将文字水平居中 */
    border-radius: 5px;
    /* 圆角 */

    display: flex;
    /* 使用 Flexbox 布局 */
    align-items: center;
    /* 垂直居中 */
  }
}
</style>
