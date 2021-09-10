<template>
  <div class="content">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from './components/Nav'
export default {
  components:{Nav}
}
</script>
<style  lang="scss">
    .content{
      max-width: $content-width;
      margin:0 auto;
    }
</style>
