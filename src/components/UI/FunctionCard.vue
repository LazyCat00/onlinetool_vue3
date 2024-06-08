<template>
  <div class="function_card">
    <div class="container">
      <!-- :src="getAssetsFile('bg.png')" -->
      <div class="icon_wrapper">
        <!-- <svg-icon class="test" :name="icon" color="#249FFD"></svg-icon> -->
        <svg style="width: 1.5rem; height: 1.5rem">
          <use :xlink:href="`#icon-${icon}`" fill="#249FFD"></use>
        </svg>
      </div>
      <div class="describe_wrapper">
        <h1 style="font-size: 1rem; font-weight: 600">{{ name }}</h1>

        <h1 style="font-size: 0.8rem; margin-top: 0.5rem">{{ description }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 定义组件的 props
// ?表示可选，你可以选择传递它也可以不传递它。
defineProps<{
  icon?: string
  name?: string
  description?: string
}>()
</script>

<style scoped lang="scss">
.function_card {
  .container {
    display: flex;
    /* 使用 flexbox 布局 */

    .icon_wrapper {
      width: 30%;

      /* 占据三分之一的宽度 */
      flex: 0 0 auto;

      /* Prevents the icon from shrinking */
    }

    .describe_wrapper {
      display: flex;
      width: 70%;
      /* 垂直方向排列 */
      flex-direction: column;

      h1 {
        flex: 1;
        white-space: nowrap;
        /* 不换行 */
        overflow: hidden;
        /* 溢出部分隐藏 */
        text-overflow: ellipsis;
        /* 溢出部分用省略号表示 */
      }
    }
  }
}
</style>
