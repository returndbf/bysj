<template>
<div class="hot-imgs">
  <template v-for="item in imgs">
  <img  :src="item.src">
    <b class="title">{{item.title}}</b>
  </template>
</div>
</template>

<script setup lang="ts">
interface img{
  src: string;
  title: string;
}
const imgs :img[] = [
  {src:'http://xm.visitxm.com/tpImagesUpload/hot_small/des_pic00012.jpg',title:'云上泰州'},
  {src:'http://xm.visitxm.com/tpImagesUpload/hot_small/des_pic00006.jpg',title:'胡里山炮台'},
  {src:'http://www.visitxm.com:80/tpImagesUpload/hot_small/z3d.jpg',title:'曾厝垵'},
  {src:'http://www.visitxm.com:80/tpImagesUpload/hot_small/mhhd.jpg',title:'梦幻海岸'},
  {src:'http://www.visitxm.com:80/tpImagesUpload/hot_small/rygwqd.jpg',title: '日月谷温泉渡假村'}
]
</script>

<style scoped lang="less">
.hot-imgs{
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .title{
    position: relative;
    left: -220px;
    display: inline-block;
    right: 100px;
    color: white;
    font-size:18px
  }
}
.hot-imgs :hover{
  opacity: 0.7;
}

</style>
