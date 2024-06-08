<template>
  <StandardCard title="随机数生成">
    <h1>最小值</h1>
    <el-input-number
      v-model="min"
      controls-position="right"
      placeholder="0"
      clearable="true"
    />
    <h1>最大值</h1>
    <el-input-number
      v-model="max"
      controls-position="right"
      placeholder="0"
      clearable="true"
    />
    <h1>生成数量</h1>
    <el-input-number
      v-model="num"
      controls-position="right"
      placeholder="0"
      clearable="true"
    />

    <div>
      <el-checkbox v-model="repeat" label="是否重复" size="large" />
    </div>
    <div>
      <el-checkbox v-model="group" label="使用换行分组" size="large" />
    </div>

    <el-button type="primary" @click="showoutcome = true">
      <span style="font-size: 1.3rem">生成随机数</span>
    </el-button>
  </StandardCard>
  <StandardCard v-if="showoutcome" title="结果" style="margin-top: 20px">
    <p v-for="number in outcome" :key="number">{{ number }}</p>
  </StandardCard>
</template>

<script setup lang="ts">
import StandardCard from '@/components/UI/StandardCard.vue'
import { ref, computed } from 'vue'
const min = ref(0)
const max = ref(100)
const num = ref(100)
const repeat = ref(false)
const group = ref(false)
const showoutcome = ref(false)
let outcome = computed(() => {
  let result = []
  // 判断是否可重复
  if (repeat.value) {
    for (let i = 0; i < num.value; i++) {
      // Math.random() 返回一个[0,1)的随机小数。
      // Math.floor(3.14) 返回 3，因为 3 是不大于 3.14 的最大整数。
      // Math.floor(-3.14) 返回 -4，因为 -4 是不大于 -3.14 的最大整数。
      result.push(
        Math.floor(Math.random() * (max.value - min.value + 1)) + min.value,
      )
    }
  } else {
    // Array.from() 来创建一个数组，该数组的长度为 max.value - min.value + 1
    // 确保了数组中的每个元素都是从 min.value 开始的连续整数序列。
    // 在箭头函数中，_ 表示当前元素，但在这个上下文中并没有用到它，因此被忽略了。
    // 数组中的每个元素都是从 min.value 开始的连续整数序列。
    const availableNumbers = Array.from(
      { length: max.value - min.value + 1 },
      (_, index) => index + min.value,
    )

    for (let i = 0; i < num.value; i++) {
      // availableNumbers.length - 1（即可用数字数组的索引范围)之间的随机索引，以便随机选择一个可用数字。
      const randomIndex = Math.floor(Math.random() * availableNumbers.length)
      result.push(availableNumbers[randomIndex])
      // splice() 方法从 availableNumbers 数组中移除已经选取的数字，确保下次随机选取时不会再选择它。
      // randomIndex：要删除元素的起始索引。
      // availableNumbers.splice(randomIndex, 1) 中的 1 表示要删除的元素的数量。
      availableNumbers.splice(randomIndex, 1)
    }
  }
  return result
})
</script>

<style scoped lang="scss">
h1 {
  font-size: 1.3rem;
  font-weight: 700;
}
:deep(.el-input-number) {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 5vh;
}
</style>
