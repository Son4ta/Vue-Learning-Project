<template>
  <div id="app">
    <!-- 路由入口 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
@import url(./styles/reset.css);
html, body, #app{
  height: 100%;
  margin: 0 auto;
}
</style>
