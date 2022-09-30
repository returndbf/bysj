<template>
  <div class="cards">
    <a-card hoverable style="width: 240px" v-for="item in cards" @click="goPage(item.key)">
      <template #cover>
        <img alt="example" :src="item.img"/>
      </template>
      <a-card-meta :title="item.title">
      </a-card-meta>
    </a-card>

  </div>
</template>

<script setup lang="ts">
// 引入路由对象
import router from "../../../router/index"

interface Card {
  img: string;
  title: string;
  key: string;
}

const cards: Card[] = [
  {img: "http://www.visitxm.com/images/travel_guider_p001.jpg", title: "景区",key:"Recommend"},
  {img: "http://www.visitxm.com/images/travel_guider_p002.jpg", title: "线路",key:"TouristRoute"},
  {img: "http://www.visitxm.com/images/travel_guider_p005.jpg", title: "购物",key:"Shopping"},
  {img: "http://www.visitxm.com/images/travel_guider_p003.jpg", title: "美食",key:"Food"},
]

const goPage = (key: Card["key"]) : void => {
  router.push({ path: `/${key}` })
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
}
</style>
