<template>
  <div class="common-head">
    <div class="common-title"> {{ content }}</div>
  </div>
</template>

<script setup lang="ts">
type info = {
  content: string
}
defineProps<info>()
</script>

<style scoped>
.common-head {
  background-color: #0062a5;
  width: 80%;
  height: 60px;
  margin: 20px auto;
}

.common-title {
  line-height: 60px;
  font-weight: bold;
  font-size: 20px;
  margin-left: 20px;
  color:white;
}
</style>
