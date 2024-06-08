<template>
  <div class="feedback">
    <div>
      <span style="font-size: 1.3rem; font-weight: 600">
        <strong>{{ type }}</strong>
      </span>
    </div>
    <div style="border-top: none">{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
// 定义组件的 props
// ?表示可选，你可以选择传递它也可以不传递它。
defineProps<{
  type?: string
  content?: string // 添加了一个名为 icon 的属性，类型为字符串
}>()
</script>

<style scoped lang="scss">
.feedback {
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  div {
    background-color: #ffffff; /* 为了示例，设置背景颜色 */
    border: 1px solid #dcdee0;
    padding: 1rem;
  }
}
</style>
