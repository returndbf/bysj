<template>
  <div class="header">
    <b class="header-title">精品线路</b>
    <div class="header-btn">
      <a-button type="primary" style="background-color:#ffdf5e;">诗意泰州</a-button>
      <a-button type="primary" style="background-color:#60bdfe;">夜游泰州</a-button>
      <a-button type="primary" style="background-color:#9ce280;">自驾游</a-button>
      <a-button type="primary" style="background-color:#fea7ca;">周边游</a-button>
    </div>
    <span @click="showMore" class="more">更多>></span>
  </div>
  <div class="content">
    <tourist-route-card></tourist-route-card>
  </div>
</template>

<script setup lang="ts">
import TouristRouteCard from "../../../components/TouristRouteCard.vue";

const showMore = (): void => {
  console.log()
}
</script>

<style scoped>
.header {
  height: 60px;
  width: calc(100% + 10px);
  background-color: #8bc9f4;
}

.header-title {
  line-height: 60px;
  margin-left: 30px;
  font-size: 18px;
  font-weight: bold;
}

.header-btn {
  display: inline-block;
  margin-left: 100px;
}

.header-btn > button {
  margin-left: 30px;
  border: none;
  color: black;
  border-radius: 5px;
}

.more {
  cursor: pointer;
  color: blue;
  float: right;
  margin-right: 10px;
  line-height: 60px;
}
</style>
