<template>

  <a-layout-header class="layout-header">
    <logo></logo>
    <top-menu></top-menu>
  </a-layout-header>


  <div>
    <router-view></router-view>
  </div>


  <a-layout-footer style="text-align: center;background-color: grey">
    11
  </a-layout-footer>

</template>
<script lang="ts" setup>
//引入组件
import TopMenu from "./top/TopMenu.vue";
import Logo from "./top/Logo.vue";

</script>
<style>


.layout-header {
  background: #238bc8 !important;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
}


#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}


</style>
