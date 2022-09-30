<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { useStorage } from '@vueuse/core'

import Layout from "./views/display/Layout.vue";

import {allData} from "./local_data/AllData";

if (!localStorage.getItem("allData")){
  localStorage.setItem("allData",JSON.stringify(allData));
}
if(!localStorage.getItem("user")){
  localStorage.setItem("user",JSON.stringify({username:"user123",password:"pass123"}));
}

if(!localStorage.getItem("collect")){
  localStorage.setItem("collect",JSON.stringify([]));
}

</script>

<template>
  <layout></layout>
</template>

<style scoped>
*{
  padding:0;
  margin:0;
}
html, body,#app{
  width:100vw;
  height:100vh
}
</style>
