<template>
  <a-list item-layout="vertical" size="large" :data-source="listData" class="card">
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #extra>
          <img
              width="150"
              alt="logo"
              :src="item.img"
          />
        </template>
        <a-list-item-meta >
          <template #title>
            <a @click="ArticleClick(item.key)">{{ item.title }}</a>
          </template>
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
import {allDataState} from "../local_data/AllData";
import Article from "../local_data/Article";

import ArticleClick from "../util/ArticleClick";

const listData: Record<string, string>[] = [];

const allTouristData = allDataState.value.filter((item: Article)=>{
  return item.type === "tourist"
})

for (let i = 0; i < 3; i++) {
  listData.push({
    title: allTouristData[i].title,
    content: allTouristData[i].content,
    img: allTouristData[i].img,
    key: allTouristData[i].id
  });
}



</script>
<style scoped>
.card{
  width: calc(100% + 10px);
  background: #88bce0
}
</style>
