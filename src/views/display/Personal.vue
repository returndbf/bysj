<template>
  <div v-if="!userInfo.isLogin" class="login-form">
    <div class="login-title"><b>请先登录</b></div>
    <a-form
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 8 }"
        autocomplete="off"
    >
      <a-form-item
          label="Username"
          name="username"
      >
        <a-input v-model:value="userInfo.username"/>
      </a-form-item>

      <a-form-item
          label="Password"
          name="password"
      >
        <a-input-password v-model:value="userInfo.password"/>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 10 }">
        <a-button type="primary" html-type="submit" @click="login">Submit</a-button>
      </a-form-item>
    </a-form>

  </div>
  <div v-else>
    <common-title :content="content"></common-title>
    <template v-for="item in collectArticles">
      <CommonCard :text="item.title" :img="item.img"  @click="ArticleClick(item.id)"></CommonCard>
    </template>

  </div>
</template>

<script setup lang="ts">
import {useStorage} from "@vueuse/core";

import {userStore} from "../../store/User"

import CommonCard from "../../components/CommonCard.vue";
import CommonTitle from "../../components/CommonTitle.vue";

import {allDataState} from "../../local_data/AllData";

import Article from "../../local_data/Article";

import ArticleClick from "../../util/ArticleClick";
const content = '个人收藏列表'

const userInfo = userStore()

const userStorage = useStorage("user", JSON.parse(localStorage.getItem("user") as string)).value as any;

const collects = useStorage("collect",JSON.parse(localStorage.getItem("collect") as string))


const login = () => {
  console.log(userInfo.username,userStorage.username)
  if(userInfo.username === userStorage.username && userInfo.password === userStorage.password){
    userInfo.isLogin = true
  }
}
const collectArticles = allDataState.value.filter((item: Article)=>{
  return collects.value.includes(item.id)
})
</script>

<style scoped>
.login-form{
  margin-top:100px
}
.login-title{
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>
