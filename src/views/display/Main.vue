<template>
  <div class="main-container">
    <div class="top-img">
      <img src="http://www.visitxm.com/images/bpic.jpg" style="width:100%">
    </div>
    <div class="banner-info">
      <Information class="info-list"></Information>
      <Banner class="banner"></Banner>
    </div>
    <div class="tourist-route">
      <TouristRoute></TouristRoute>
    </div>
    <a-divider><b :style="{fontSize: '18px'}">旅游向导</b></a-divider>
    <div class="guide">
      <guide></guide>
    </div>
    <a-divider><b :style="{fontSize: '18px'}">热门推荐</b></a-divider>
    <div class="hot">
      <hot></hot>
    </div>
    <a-divider><b :style="{fontSize: '18px'}">游记攻略</b></a-divider>
    <div class="strategy">
      <strategy></strategy>
    </div>
  </div>
</template>

<script setup lang="ts">
import Information from "./Main/Information.vue";
import Banner from "./Main/Banner.vue";
import TouristRoute from "./Main/TouristRoute.vue"
import Guide from "./Main/Guide.vue";
import Hot from "./Main/Hot.vue";
import Strategy from "./Main/Strategy.vue"
</script>

<style scoped>
.main-container {
  background-image: url("http://www.visitxm.com/images/bg.jpg")
}

.banner-info {
  position: relative;
  height: 400px;
  width: 1200px;
  margin: 10px auto 20px;
}

.info-list {
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  display: inline-block;
  height: 400px;
  margin-right: 10px;
}

.banner {
  width: 900px;
  position: absolute;
  display: inline-block;
}

.tourist-route, .guide, .hot, .strategy {
  width: 1200px;
  height: auto;
  margin: 20px auto 20px;
}
</style>
