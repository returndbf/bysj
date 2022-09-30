<template>
  <div>
  <a-list item-layout="horizontal" :data-source="data" class="list">
    <template #renderItem="{ item }">
      <a-list-item class="list-item">
        <a-list-item-meta
            :description="item.description"
        >
          <template #title>
            <a @click="showDetails(item)" ><b>{{ item.title }}</b></a>
          </template>
          <template #avatar>
            <a-avatar :src="item.avatar" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
  </div>
</template>
<script lang="ts" setup>
//列表元素类型对象
interface DataItem {
  title: string;
  description: string;
  avatar: string;
}
//列表元素
const data: DataItem[] = [
  {
    title: '群星璀璨，泰州星最亮！',
    description: 'Ant Design Title',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F21092501023R119-0-lp.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666882037&t=b95a9e9c92abb3146e37b020ad1036a0'
  },
  {
    title: '踏浪迎风，海上钢琴师→',
    description: 'Ant Design Title',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F57d7cd8c56cff.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666882037&t=3ef5c722732aa335a4521367fa62b826'
  },
  {
    title: '400岁的TA，重焕光彩！',
    description: 'Ant Design Title',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-10-25%2F5bd16925372b1.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666882037&t=d9a5f53db28067398436797a7f6620bd'
  },
  {
    title: '倒数2天！湖里的“双塔”来啦！',
    description: 'Ant Design Title',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F58ccfbade90a1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666882037&t=27538dd84ffb1d4c65db21b2ebebfde5'
  },
  {
    title: '倒数2天！湖里的“双塔”来啦！',
    description: 'Ant Design Title',
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F58ccfbade90a1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666882037&t=27538dd84ffb1d4c65db21b2ebebfde5'
  },
];
//列表点击事件，显示对象信息
const showDetails = ({ title, description, avatar}:DataItem):void => {
  console.log(title, description, avatar)
}
</script>
<style scoped>

</style>
