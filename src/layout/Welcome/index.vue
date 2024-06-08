<template>
  <CloseCard class="container">
    <div>
      <h1>欢迎使用NiuniuTools</h1>
      <p>
        目前共开发了数十款有趣的小功能，数量还在持续增加中。如果觉得某一款不错，不妨安利给他人使用。遇到任何问题或建议都能在
        留言反馈 进行留言
      </p>
    </div>
  </CloseCard>
</template>

<script setup lang="ts">
import StandardCard from '@/components/UI/StandardCard.vue'
import CloseCard from '@/components/UI/CloseCard.vue'
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 50px;
  margin-top: 50px;
  h1 {
    margin-bottom: 0.625rem;
    font-size: 1.5rem;
    font-weight: 700;
    word-spacing: 0.0625rem;
    color: rgb(47, 62, 76);
  }

  p {
    margin-top: 16px;
    line-height: 24px;
    font-size: 16px;
  }
}
</style>
