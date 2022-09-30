<template>
  <common-title :content="content"></common-title>
  <div class="container">
    <template v-for="item in allShoppingData">
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

const content ="购物推荐"
const allShoppingData = allDataState.value.filter((item: Article)=>{
  return item.type === "shopping"
})

</script>

<style scoped>

</style>
