<template>
  <div class="layout_title">
    <div class="site_name">
      <h1>勇敢牛牛 - 工具集合</h1>
    </div>
    <div class="login_status">
      <h1 v-if="token" style="color: #249ffd">
        <svg-icon name="user" color="#249FFD"></svg-icon>
        用户中心
      </h1>

      <h1
        v-else
        @click="emitter.emit('send-centerDialogVisible', true)"
        style="cursor: pointer; color: red"
      >
        <svg-icon name="user" color="red"></svg-icon>
        未登录
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import emitter from '@/utils/emitter'
import { ref, computed } from 'vue'
let userStore = useUserStore()
let token = computed(() => {
  console.log('token' + userStore.token)
  return userStore.token
})
let username = computed(() => {
  console.log('token' + userStore.token)
  return userStore.token
})
</script>

<style scoped lang="scss">
.layout_title {
  .site_name {
    font-weight: bold;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    color: #2f3e4c;
    font-size: 2rem;
    cursor: pointer;
  }

  .login_status {
    margin-top: 20px;

    h1 {
      display: flex;
      /* 水平居中 */
      justify-content: center;
      /* 垂直居中 */
      align-items: center;
    }
  }
}
</style>
