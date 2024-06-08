<template>
  <StandardCard title="实时天气查询">
    <div>
      <h1>请输入城市名称（中文/拼音）</h1>
    </div>
    <div class="container">
      <el-input v-model="city" placeholder="泰州">
        <template #append><el-button>开始查询</el-button></template>
      </el-input>
    </div>
  </StandardCard>
  <StandardCard title="说明">
    <h1>数据仅供参考，出门记得带伞</h1>
    <h1>数据来自：心知天气</h1>
  </StandardCard>
</template>

<script setup lang="ts">
import StandardCard from '@/components/UI/StandardCard.vue'
import { ref } from 'vue'
const city = ref('')
</script>

<style scoped lang="scss">
:deep(.el-input__inner) {
  width: 100%;
  height: 5vh;
}

h1 {
  margin-bottom: 0.625rem;
  font-size: 1.125rem;
  font-weight: 700;
  word-spacing: 0.0625rem;
  color: rgb(47, 62, 76);
}
</style>
