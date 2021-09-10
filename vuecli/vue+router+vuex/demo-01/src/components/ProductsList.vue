<template>
  <ul>
      <li v-for="(ele) in list" :key="ele.id">
          <product-item :product='ele'></product-item>
      </li>
  </ul>
</template>

<script>
import ProductItem from './ProductItem'
export default {
    name: 'ProductList',
    components: {ProductItem},
    props:{
        list:{
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
    li{
        display: inline-block;
        margin: 10px;
    }
</style>