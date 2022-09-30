<template>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="light"
      mode="horizontal"
      @click="changeModule"
      class="menu"
  >
    <a-menu-item key="Main" >首页</a-menu-item>
    <a-menu-item key="TouristRoute">旅游路线</a-menu-item>
    <a-menu-item key="Recommend">景点推荐</a-menu-item>
    <a-menu-item key="Shopping">购物推荐</a-menu-item>
    <a-menu-item key="Food">美食推荐</a-menu-item>
    <a-menu-item key="Info">旅游资讯</a-menu-item>
    <a-menu-item key="Personal">个人中心</a-menu-item>
  </a-menu>

</template>

<script setup lang="ts">
import {ref} from "vue";
// 引入路由对象
import router from "../../../router/index"

// ts类型推断引入，无实际作用
import {MenuProps} from "ant-design-vue";
// 选中的版块的key
let selectedKeys = ref<string[]>(['Main'])
//版块切换事件
const changeModule: MenuProps['onClick'] = ({ item, key, keyPath }) :void => {
  router.push({ path: `/${key}` })
}
</script>

<style scoped lang="less">
.menu{
  background-color:#238bc8;
  border: none;
}
// /deep/ 为穿透css样式，!important为将此样式设为优先级最高
/deep/.ant-menu-item-selected{
  color: #fff !important
}
/deep/.ant-menu-item{
  color: black;
}
/deep/.ant-menu-item-active{
  color: #fff  !important
}
</style>
