<template>
  <StandardCard title="用户中心">
    <p>注册时间：{{ userInfo.createTime }}</p>
    <p>id: {{ userInfo.id }}</p>
    <p>手机: {{ userInfo.phone }}</p>
    <el-button type="primary" round @click="logout">退出登录</el-button>
  </StandardCard>
  <StandardCard title="帮助">
    <p>任何问题请咨询站长QQ：9533511</p>
    <p>
      激活码激活失败：仔细核对是否正确输入了激活码，请不要手动输入，直接复制粘贴即可
    </p>
  </StandardCard>
</template>

<script setup lang="ts">
import StandardCard from '@/components/UI/StandardCard.vue'
import { useRouter } from 'vue-router'
let $router = useRouter()
import { ref, onMounted } from 'vue'
// 引入接口
import { reqUserInfo } from '@/api/user'
// 引入数据类型
import type { userInfoResponseData, SysUser } from '@/api/user/type'

// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()

const userInfo = ref<SysUser>({
  id: '',
  createTime: '',
  updateTime: '',
  isDeleted: 0,
  param: {},
  username: '',
  password: '',
  name: '',
  phone: '',
  headUrl: null,
  deptId: null,
  postId: null,
  description: null,
  status: 0,
  roleList: null,
  postName: null,
  deptName: null,
})

const logout = async () => {
  await useStore.userLogout()
  $router.push({ path: '/' }).then(() => {
    // 强制刷新页面
    window.location.reload()
  })
}
onMounted(async () => {
  if (userStore.token) {
    const result: userInfoResponseData = await reqUserInfo()
    if (result.code == 200) {
      userInfo.value = result.data.sysUser
    }
  }
})
</script>

<style scoped lang="scss"></style>
