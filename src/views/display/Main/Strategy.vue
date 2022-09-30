<template>
  <div class="strategy-imgs">
    <div class="strategy-img">
      <img src="http://www.visitxm.com/images/strategy_p36.jpg">
      <div class="strategy-context">
        <div class="strategy-title">文艺打卡胜地</div>
      </div>
    </div>
    <div class="strategy-img">
      <img src="http://www.visitxm.com/images/strategy_p12.jpg">
      <div class="strategy-context">
        <div class="strategy-title">超梦幻夜景，美醉了！</div>
      </div>
    </div>
    <div class="strategy-img">
      <img src="http://www.visitxm.com/images/strategy_p37.jpg">
      <div class="strategy-context">
        <div class="strategy-title">“藏猫于岛”</div>
      </div>
    </div>
    <div class="strategy-img">
      <img src="http://www.visitxm.com/images/strategy_p38.jpg">
      <div class="strategy-context">
        <div class="strategy-title">遇见了“生态之美”</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.strategy-imgs{
  display:flex;
  justify-content: space-between;
}
.strategy-img{
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.strategy-img :hover{
  opacity: 0.8
}
.strategy-img > img{
  border-radius:50%;
  width:280px;
}
.strategy-context{
  width:280px;
  position:absolute;
  bottom:0;
  height: 76px;
  background: url("http://www.visitxm.com/images/strategy_msk.png") center center no-repeat;

}
.strategy-title{
  text-align: center;
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
}
</style>
