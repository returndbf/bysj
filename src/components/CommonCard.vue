<template>
<div class="common-info" >
  <img :src="img" class="common-img">
  <span class="common-title">{{text}}</span>
</div>
</template>

<script setup lang="ts">
interface info{
  text: string,
  img: string
}
defineProps<info>()
</script>

<style scoped>
.common-info{
  background: #f2f2f2;
  width:80%;
  height:100px;
  cursor: pointer;
  margin: 0 auto
}
.common-info:hover{
  background: #d2d2d2;
}
.common-img{
  height:80px;
  width:120px;
  margin-top: 10px;
  margin-left: 10px;
}
.common-title{
  margin-left: 30px;
  font-size:15px;
  font-weight:bold;
}
</style>
