<template>
  <div>
    <un-login v-if="!$store.state.user"/>
    <user-info v-else/>

    <van-cell-group>
      <van-grid clickable>
        <van-grid-item icon="star" text="我的收藏"/>
        <van-grid-item icon="chat" text="我的评论"/>
        <van-grid-item icon="like" text="我的点赞"/>
        <van-grid-item icon="browsing-history" text="浏览历史"/>
      </van-grid>
    </van-cell-group>

    <van-cell-group>
      <van-cell title="消息通知" is-link />
      <van-cell title="用户反馈" is-link />
      <van-cell title="小智同学" is-link />
      <van-cell title="系统设置" is-link to="/settings" />
    </van-cell-group>
    <app-tabbar/>
  </div>
</template>

<script>
import UnLogin from './components/un-login'
import UserInfo from './components/user-info'

export default {
  name: 'MyIndex',
  components: {
    UnLogin,
    UserInfo
  }
}
</script>

<style lang="less" scoped></style>
