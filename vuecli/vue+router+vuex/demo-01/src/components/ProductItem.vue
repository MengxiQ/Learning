<template>
  <div class="product-box">
      <div class="product-img"><img   :src="product.img" alt="商品图片"></div>
      <div class="product-price"><strong style="font-weight:500;"><em>￥</em><i>{{product.price}}</i></strong></div>
      <div class="product-name">{{product.name}}</div>
      <div class="product-info">
          <div class="product-info-add" @click="addToCart">加入购物车</div>
      </div>
      <!-- <p class="product-description">{{product.description}}</p> -->
  </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props:{
        product: Object
    },
    methods:{
        addToCart(){
            const data = this.product;
            data.quantity = 1;
            
            this.$store.dispatch('cart/addProduct', data).then(value => {
                alert(value)
                // console.log(value);
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .product-box{
        width: 240px;
        height:340px;
        background-color: #fff;
        overflow: hidden;
        /* border: 1px solid rgb(105, 102, 102,0.5); */
        padding: 10px;
        box-shadow:0px 0px 4px rgba(199, 194, 194, 0.5); ;
    }
    .product-box:hover{
        box-shadow:0px 0px 6px rgba(114, 112, 112, 0.5); ;
    }
    .product-img img{
        height: 220px;
        width: 220px;
    }
    .product-price{
        height: 22px;
        color: #e4393c;
        font-size: 20px;
        text-align:left;
        /* margin-left: 10px; */
        margin-bottom: 10px;
    }
    .product-price em,.product-price i {
        font-style: normal;
        text-decoration: none;
    }
    .product-name{
        /* padding-left: 10px; */
        height: 40px;
        overflow: hidden;
        font-size: 12px;
        line-height: 155%;
        font-family: tahoma, arial, "Microsoft YaHei", "Hiragino Sans GB", u5b8bu4f53, sans-serif;
        margin-bottom: 10px;

    }
    .product-info .product-info-add{
        float: right;
        font-size: 12px;
        padding: 6px;
        border: 1px solid rgb(105, 102, 102,0.5);
    }
    .product-info-add:hover {
        color: #e4393c;
        border: 1px solid #e4393c;
        cursor: pointer;
    }
</style>