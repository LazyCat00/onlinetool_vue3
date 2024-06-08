<template>
  <div>
    <!-- <el-button plain @click="centerDialogVisible = true">
      Click to open the Dialog
    </el-button> -->

    <el-dialog v-model="centerDialogVisible" title="登录" width="300" center>
      <!-- <el-form :model="LoginUser" :rules="rules" status-icon ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input prefix-icon="el-icon-user-solid" placeholder="请输入账号" v-model="LoginUser.name"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input prefix-icon="el-icon-view" type="password" placeholder="请输入密码" v-model="LoginUser.pass"></el-input>
        </el-form-item>
      </el-form> -->

      <el-form status-icon ref="loginForms">
        <el-form-item prop="name">
          <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            prefix-icon="el-icon-view"
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button
            :loading="loading"
            type="primary"
            @click="login"
            style="width: 100%"
          >
            登录
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import emitter from '@/utils/emitter'
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()
let $router = useRouter()
// 定义变量控制按钮加载效果
let loading = ref(false)
const loginForms = ref()
const loginForm = reactive({
  username: 'admin',
  password: '123456',
})

const centerDialogVisible = ref(false)
const login = async () => {
  console.log('登录按钮被按下' + loginForm)
  loading.value = true
  try {
    // 通知仓库发送登录请求
    //  保证登录成功
    await useStore.userLogin(loginForm)
    //  编程式导航跳转到展示数据首页
    emitter.emit('send-centerDialogVisible', false)
    $router.push('/')
    // 登录成功提示信息
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
  //  reqTest()
  // 请求成功->跳转到首页
  // 请求失败->弹出登录失败信息
  loading.value = false
}

// 给emitter绑定send-drawer事件
emitter.on('send-centerDialogVisible', (value: any) => {
  console.log(value)
  centerDialogVisible.value = value as boolean
})
</script>

<style scoped lang="scss"></style>
