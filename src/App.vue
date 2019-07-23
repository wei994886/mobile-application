<template>
  <div id="app">
    <!--
      路由组件是动态的，默认情况下切换都会销毁重建，状态丢失
      如果想要在切换的时候保留状态，说白了不要销毁，则使用 keep-alive 缓存就可以了
      参考文档：https://cn.vuejs.org/v2/guide/components-dynamic-async.html
     -->
    <!-- <keep-alive>
    </keep-alive> -->

    <!--
      当你给 router-view 没有设置 keep-alive 的话，每个页面访问都会重新创建（离开销毁，进来创建）
      但是当你设置了 keep-alive，就会缓存起来，只有第1次才会触发那些生命周期，包括原来的数据之类的都会缓存起来

      watch 可以应对 x路由 导航到 y路由，这俩使用的同一个组件，watch 可以很好处理
      但是，当你把路由组件给 keep-alive 了以后，组件不会销毁了，哪怕你导航到被的组件路由，也给 watch 到了

      如果你没有开启 keep-alive，则使用 watch 就够了。
      加入你使用了 keep-alive，
     -->

    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped></style>
