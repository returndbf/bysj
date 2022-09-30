<template>
  <common-title :content="content"></common-title>
  <div class="container">
    <template v-for="item in allTouristData">
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

const content ="旅游线路"
const allTouristData = allDataState.value.filter((item: Article)=>{
    return item.type === "tourist"
})

</script>

<style scoped>

</style>
