<template>
  <common-title :content="content"></common-title>
  <div class="container">
    <template v-for="item in allInfoData">
      <CommonDetail :text="item.title" :img="item.img" @click="ArticleClick(item.id)"></CommonDetail>
    </template>


  </div>

</template>

<script setup lang="ts">
import {allDataState} from "../../local_data/AllData";

import Article from "../../local_data/Article";

import CommonDetail from "../../components/CommonCard.vue";
import CommonTitle from "../../components/CommonTitle.vue";

import ArticleClick from "../../util/ArticleClick";

const content ="旅游资讯"
const allInfoData = allDataState.value.filter((item: Article)=>{
  return item.type === "info"
})

</script>

<style scoped>

</style>
