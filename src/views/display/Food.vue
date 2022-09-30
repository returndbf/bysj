<template>
  <common-title :content="content"></common-title>
  <div class="container">
    <template v-for="item in allFoodData">
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

const content ="美食推荐"
const allFoodData = allDataState.value.filter((item: Article)=>{
  return item.type === "food"
})

</script>

<style scoped>

</style>
