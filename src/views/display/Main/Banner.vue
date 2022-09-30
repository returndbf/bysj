<template>
  <a-carousel :after-change="onChange" autoplay>
    <div v-for="item in bannerList">
      <img :src="item.src" class="banner-img">
    </div>
  </a-carousel>
</template>

<script setup lang="ts">
// 轮播图点击事件
const onChange = (current: number) => {
  console.log(current);
};

// 轮播图对象
interface bannerItem {
  src: string
}

// 轮播图数组
const bannerList: bannerItem[] = [
  {src: "http://www.visitxm.com/tpImagesUpload/index_middle/gly2.jpg"},
  {src: "http://www.visitxm.com/tpImagesUpload/index_middle/2022zq2.jpg"},
  {src: "http://www.visitxm.com/tpImagesUpload/index_middle/69025146.jpg"},
  {src: "http://www.visitxm.com/tpImagesUpload/index_middle/ggx.jpg"}
]
</script>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 100%;
  width: 900px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.banner-img{
  height:400px;
  width:900px;
}
</style>
