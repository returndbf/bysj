<template>
  <a-button @click="collectArticle" class="collect"  :disabled="collects.includes(articleId)">
    {{collects.includes(articleId)?'已收藏':'收藏'}}
  </a-button>

<div class="article-container">

  <div class="article-title"><b>{{article.title}}</b></div>
  <div class="article-img"><img :src="article.img"/></div>
  <div class="article-content">{{article.content.trim()}}</div>
</div>

</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {allDataState} from "../../local_data/AllData";
import Article from "../../local_data/Article";
import {useStorage} from "@vueuse/core";

let { id :articleId } = useRoute().params

const article = allDataState.value.find((item : Article)=>{
  return item.id === articleId
})

const collects = useStorage("collect",JSON.parse(localStorage.getItem("collect") as string))
const collectArticle = ():void => {
      collects.value.push(articleId)
  //console.log(collects.value)
}
</script>

<style scoped>
.article-container{
  background-color:white;
  margin-top:20px;
  display: flex;
  align-items:center;
  flex-direction: column;
}
.article-title{
  font-size:25px;
  font-weight:bold
}
.article-img{
  margin-top: 30px;
  margin-bottom: 20px;

}
img{
  width:600px;
}
.article-content{
  font-size:17px;
  width:70%;
  text-indent: 40px;
}
.collect{
  position: fixed;
  right: 100px;
}
</style>
