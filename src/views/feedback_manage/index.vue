<template>
  <StandardCard title="留言板管理">
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <h1>当前共有 {{ feedbacks.length }} 条留言，{{ pendingCount }}条待办</h1>
      <el-button type="primary">添加留言</el-button>
    </div>

    <el-row>
      <el-col
        v-for="item in feedbacks"
        :span="8"
        :xs="24"
        @click="showFeedBack(item)"
      >
        <FeedBackCard :type="item.type" :content="item.content"></FeedBackCard>
      </el-col>
    </el-row>

    <el-dialog
      v-model="dialogFormVisible"
      title="查看留言"
      width="500"
      height="600"
      :model="feedback"
    >
      是否显示在留言板
      <el-switch
        :active-action-icon="View"
        :inactive-action-icon="Hide"
        v-model="feedbackShow"
        @click="updateHidden(feedback)"
      />
      <br />
      状态：{{ feedback.status == 1 ? '处理完成' : '未处理' }}
      <br />
      联系邮箱：{{ feedback.mail }}
      <br />
      留言类型：{{ feedback.type }}
      <br />
      反馈工具：{{ feedback.tool }}
      <br />
      反馈内容：{{ feedback.content }}
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </StandardCard>
</template>

<script setup lang="ts">
import StandardCard from '@/components/UI/StandardCard.vue'
import FeedBackCard from '@/components/UI/FeedBack.vue'
// 引入接口
import { reqAllFeedBack, reqUpdateFeedBack } from '@/api/user'
import { ref, reactive, onMounted, computed } from 'vue'
import { Hide, View } from '@element-plus/icons-vue'
import type { sysFeedbackData } from '@/api/user/type.ts'

const feedback: sysFeedbackData = reactive({
  id: '',
  isDeleted: 0,
  param: {},
  content: '',
  mail: '',
  type: '',
  tool: '',
  hidden: 0,
})

const dialogFormVisible = ref(false)
const feedbacks = ref([])
const feedbackShow = ref(false)
const showFeedBack = (item: any) => {
  feedback.id = item.id
  feedback.mail = item.mail
  feedback.type = item.type
  feedback.tool = item.tool
  feedback.content = item.content
  feedback.status = item.status
  feedback.hidden = item.hidden
  if (parseInt(item.hidden, 10) == 1) {
    console.log('false')

    feedbackShow.value = false
  } else {
    console.log('true')
    feedbackShow.value = true
  }
  dialogFormVisible.value = true
}
const updateHidden = async (feedback) => {
  console.log('按钮按下')
  // 找到 feedbacks 数组中对应的项并更新它
  // 这里使用了数组的 findIndex 方法，该方法用于查找满足指定测试函数的数组元素，
  // 并返回第一个满足条件的元素的索引。参数是一个函数，该函数将针对数组的每个元素进行调用，直到找到一个使该函数返回 true 的元素。
  const feedbackIndex = feedbacks.value.findIndex((item) => {
    return item.id == feedback.id
  })
  console.log('ghgh' + feedbackIndex)

  // console.log(feedbacks.value[feedbackIndex].hidden)
  if (feedbackIndex !== -1) {
    if (feedbackShow.value) {
      feedback.hidden = 0
      const result: any = await reqUpdateFeedBack(feedback)
      console.log(result)
      feedbacks.value[feedbackIndex].hidden = 0
    } else {
      feedback.hidden = 1
      const result: any = await reqUpdateFeedBack(feedback)
      console.log(result)
      feedbacks.value[feedbackIndex].hidden = 1
    }
  }
}
onMounted(async () => {
  const result: any = await reqAllFeedBack()
  if (result.code == 200) {
    console.log('reqFeedBack' + JSON.stringify(result.data))
    feedbacks.value = result.data
  }
})

// 计算 status 为 0 的数据个数
// reduce() 是 JavaScript 数组方法之一，它用于将数组中的元素归约为单个值。它接受一个函数作为参数，这个函数又称为 reducer 函数，以及一个初始值作为累加器的起始值。
const pendingCount = computed(() => {
  return feedbacks.value.reduce((count, item) => {
    if (item.status == 0) {
      return count + 1
    } else {
      return count
    }
  }, 0)
})
</script>

<style scoped lang="scss"></style>
