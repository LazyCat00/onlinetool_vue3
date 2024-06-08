User
<template>
  <div class="temperature">
    <StandardCard title="温度单位转换">
      <div>
        <h1>摄氏度</h1>
        <el-input
          type="textarea"
          placeholder="请输入摄氏度"
          v-model="valC"
          @input="convert($event, 'C')"
        ></el-input>
        <h1>华氏度</h1>
        <el-input
          type="textarea"
          placeholder="请输入华氏度"
          v-model="valF"
          @input="convert($event, 'F')"
        ></el-input>
        <h1>开氏度</h1>
        <el-input
          type="textarea"
          placeholder="请输入开氏度"
          v-model="valK"
          @input="convert($event, 'K')"
        ></el-input>
        <h1>兰氏度</h1>
        <el-input
          type="textarea"
          placeholder="请输入兰氏度"
          v-model="valRa"
          @input="convert($event, 'Ra')"
        ></el-input>
        <h1>列氏度</h1>
        <el-input
          type="textarea"
          placeholder="请输入列氏度"
          v-model="valRe"
          @input="convert($event, 'Re')"
        ></el-input>
      </div>
    </StandardCard>

    <StandardCard title="说明">
      <div>
        <h1>如果转换数据有问题，请在首页【留言板】中进行反馈</h1>
        <h1>
          结果以实际为准，本数据仅供参考，由于转换单位不同可能会有一定误差
        </h1>
      </div>
    </StandardCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StandardCard from '@/components/UI/StandardCard.vue'
import { ElInput } from 'element-plus'

const valC = ref<string>('')
const valF = ref<string>('')
const valK = ref<string>('')
const valRa = ref<string>('')
const valRe = ref<string>('')

const convert = (number: string, type: string) => {
  console.log(number)

  if (number.length < 1) {
    clear()
    return
  }
  let cels = 0
  switch (type) {
    case 'C':
      cels = parseFloat(number)
      break
    case 'F':
      cels = (parseFloat(number) - 32) / 1.8
      break
    case 'K':
      cels = parseFloat(number) - 273.15
      break
    case 'Ra':
      cels = (parseFloat(number) - 32 - 459.67) / 1.8
      break
    case 'Re':
      cels = parseFloat(number) * 1.25
      break
  }
  const toFixed = (i: string, val: number) =>
    type === i ? number : parseFloat(val.toFixed(2))

  valC.value = toFixed('C', cels)
  valF.value = toFixed('F', cels * 1.8 + 32)
  valK.value = toFixed('K', cels + 273.15)
  valRa.value = toFixed('Ra', cels * 1.8 + 32 + 459.67)
  valRe.value = toFixed('Re', cels * 0.8)
}

const clear = () => {
  // 清除操作
  valC.value = ''
  valF.value = ''
  valK.value = ''
  valRa.value = ''
  valRe.value = ''
}
</script>

<style scoped lang="scss">
.temperature {
  h1 {
    font-size: 18px;
    font-weight: 700;
    // color: rgb(47, 62, 76),
  }
}
</style>
