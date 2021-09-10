<template>
  <div id="nav">
    <div class="nav-box">
      <router-link to="/">首页</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/about">个人中心</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  /* padding: 30px; */
  height: $header-height;
  line-height: $header-height;
  font-size: 14px;
  width: $content-width;
  background: rgb(230, 230, 229);
  .nav-box {
    float: right;
    a {
      color: #7b8691;
      width: 100px;
      display: inline-block;
      text-align: center;
      overflow: hidden;
      &:hover{
        color: red;
      }
      &.router-link-exact-active {
      color: red;
    }
    }
  }
}
</style>
