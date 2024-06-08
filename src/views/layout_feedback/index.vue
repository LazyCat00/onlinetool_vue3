<template>
  <StandardCard title="留言板">
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <h1>当前共有 {{ feedbacks.length }} 条留言，已显示最近30条</h1>
      <el-button type="primary" @click="dialogFormVisible = true">
        添加留言
      </el-button>
    </div>

    <el-row>
      <el-col v-for="item in feedbacks" :span="8" :xs="24">
        <FeedBackCard :type="item.type" :content="item.content"></FeedBackCard>
      </el-col>
    </el-row>
    <el-dialog
      v-model="dialogFormVisible"
      title="添加留言"
      width="500"
      height="600"
    >
      是否显示在留言板
      <el-switch
        :active-action-icon="View"
        :inactive-action-icon="Hide"
        v-model="feedbackShow"
      />
      <br />
      邮箱
      <br />
      <el-input v-model="feedback.mail" placeholder="请输入邮箱" />
      <br />
      类型
      <br />

      <el-select v-model="feedback.type" placeholder="Select" size="large">
        <el-option
          v-for="item in types"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <br />
      工具名称（可选）
      <br />
      <el-select
        v-model="feedback.tool"
        placeholder="请选择需要反馈的工具"
        size="large"
      >
        <el-option
          v-for="item in tools"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      内容
      <br />
      <el-input
        v-model="feedback.content"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="请输入留言信息，如果是问题反馈必须输入复现步骤，否则无视留言。"
      />
      <el-button type="primary" @click="leaveWord">提交留言</el-button>
    </el-dialog>
  </StandardCard>

  <StandardCard title="说明">
    您的留言审核过后将会显示在页面上
    如果由于意外情况导致无法成功提交反馈，请邮件联系：9533511@qq.com
    所有留言都会查看，但不一定会回复或处理，可能是问题已解决或暂时不会考虑解决这个功能，但是已被进行记录，未来可能会修复或更新
    类似留言或者垃圾留言将被删除，部分恶意留言可能会被删除账号，提交前请检查是否有类似的问题已存在
  </StandardCard>
</template>

<script setup lang="ts">
import type { sysFeedbackData } from '@/api/user/type.ts'
import StandardCard from '@/components/UI/StandardCard.vue'
import FeedBackCard from '@/components/UI/FeedBack.vue'
// 引入接口
import { reqFeedBack, reqAddFeedBack } from '@/api/user'
import { ref, onMounted, reactive, toRaw ,watch} from 'vue'
import { Hide, View } from '@element-plus/icons-vue'
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
let useStore = useUserStore()
const feedbackShow = ref(false)
const feedbacks = ref([])

const dialogFormVisible = ref(false)

const types = [
  {
    value: '问题反馈',
    label: '问题反馈',
  },
  {
    value: '功能建议',
    label: '功能建议',
  },
  {
    value: '其他',
    label: '其他',
  },
  {
    value: '商务合作',
    label: '商务合作',
  },
]
const tools = [
  {
    value: '天气查询',
    label: '天气查询',
  },
  {
    value: '人生小格',
    label: '人生小格',
  },
  {
    value: '进制转换',
    label: '进制转换',
  },
  {
    value: '随机数生成',
    label: '随机数生成',
  },
  {
    value: 'URL格式化',
    label: 'URL格式化',
  },
]

const feedback = reactive({
  content: '',
  mail: '',
  type: '问题反馈',
  tool: '',
  hidden: 0
})

const leaveWord = async () => {
  console.log(feedback)
  try {
    // 通知仓库发送登录请求
    //  保证登录成功
    await useStore.addFeedback(toRaw(feedback))
    // 登录成功提示信息
    ElNotification({
      type: 'success',
      message: '留言成功',
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

onMounted(async () => {
  const result: any = await reqFeedBack()
  if (result.code == 200) {
    console.log('reqFeedBack' + JSON.stringify(result.data))
    feedbacks.value = result.data
  }
})

watch(feedbackShow, (newValue) => {
  feedback.hidden = newValue ? 0 : 1
  console.log(feedback.hidden);
  
})
</script>

<style scoped lang="scss"></style>
