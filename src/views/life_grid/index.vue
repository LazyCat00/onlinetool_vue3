<template>
  <StandardCard title="人生小格">
    <div class="block" style="width: 100%; cursor: pointer">
      <el-date-picker
        style="width: 100%"
        type="date"
        placeholder="选择你的生日"
        v-model="birthday"
      />
    </div>
  </StandardCard>
  <StandardCard title="已经过去了">
    <div class="container">
      <div class="column">{{ passyear }}年</div>
      <div class="column">{{ passmonth }}月</div>
      <div class="column">{{ passmonth }}天</div>
      <div class="column">Column 1</div>
      <div class="column">Column 2</div>
      <div class="column">Column 3</div>
    </div>
  </StandardCard>
  <StandardCard title="剩下的时间"></StandardCard>
  <StandardCard title="你的人生进度"></StandardCard>

  <StandardCard title="说明">
    <p>假设我们的寿命是80岁,分为400个方块。</p>
    <p>你已经走过的生命</p>
    <p>如果你平均每天休息 8 小时，这是你余下生命里睡眠占用的时间</p>
    <p>
      如果你 65 岁退休，退休前平均每天工作 8
      小时，这是你余下生命里工作占用的时间
    </p>
    <p>65 岁，你退休了</p>
    <p>
      如果你 28 岁生孩子，孩子18岁出门上大学，这 18 年里你平均每天能花 5
      个小时陪伴孩子，这里是你余下生命里所用去的时间
    </p>
    <p>
      如果你每个月能看望父母一天，在他们 80
      岁前，这是你的余生里还能陪伴他们的时光
    </p>

    <p>除了以上之外，你剩下的所有日子</p>

    数据仅供娱乐，人生苦短，继续努力吧~
  </StandardCard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import StandardCard from '@/components/UI/StandardCard.vue'
const birthday = ref(new Date())
const now = new Date()
let passyear = computed(() => {
  return now.getFullYear() - birthday.value.getFullYear()
})
let passmonth = computed(() => {
  return now.getMonth() - birthday.value.getMonth()
})
let passday = computed(() => {
  return now.getDate() - birthday.value.getDate()
})
</script>

<style scoped lang="scss">
:deep(.block .el-input__wrapper) {
  width: 100% !important;
}
.container {
  display: flex;
  flex-wrap: wrap; //用于控制 flex 容器中的 flex 元素是否换行。
  .column {
    // flex: 1 0 30%; 是一个缩写形式，用于同时设置 flex 元素的三个关键属性：flex-grow、flex-shrink 和 flex-basis
    // flex-grow 值都为 1，则它们会等分剩余的空间。
    // flex-shrink 值为 0，则它不会缩小
    // flex-basis: 定义了 flex 元素的初始大小。默认值为 auto，表示由 flex 元素的内容决定。
    flex: 1 0 30%; /* 设置每列宽度为父容器宽度的 30% */
  }
}
</style>
