<template>
  <li class="item-form">
    <div class="cell p-checkbox">
      
    </div>
    <div class="cell p-goods">
      <img class="p-img" :src="item.img" alt="图片" />
      <div class="p-name">{{ item.name }}</div>
    </div>
    <div class="cell p-price">￥{{ item.price }}</div>
    <div class="cell p-quantity">
        <button :disabled="item.quantity <= 0" @click="decOne">-</button>
        <input type="text" :value="item.quantity">
        <button :disabled="item.quantity >= 200" @click="addOne">+</button>
    </div>
    <div class="cell p-sum">￥{{ item.price * item.quantity }}</div>
    <div class="cell p-ops"><button @click="del">删除</button></div>
  </li>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object,
  },
  methods:{
      addOne(){
          this.$store.dispatch('cart/setQuantityById', { id: this.item.id, quantity: this.item.quantity + 1})
      },
      decOne(){
          this.$store.dispatch('cart/setQuantityById', { id: this.item.id, quantity: this.item.quantity - 1})
      },
      del(){
          this.$store.dispatch('cart/delProductById',this.item.id);
      }
  }

};
</script>

<style lang="scss" scoped>
.item-form {
    width: 990px;
    font-size: 12px;
}
.cell {
  min-height: 100px;
  width: 165px;
  text-align: center;
  display: inline-block;
//   border: 1px solid black;
  overflow: hidden;
  box-sizing: border-box;
}
.p-goods {
    width: $cart-column-goods-width;
  .p-img {
    height: 100px;
    width: 100px;
    display: inline-block;
  }
  .p-name {
    // min-height: 100px;
    line-height: 150%;
    height: 90px;
    width: $cart-column-goods-width - 100px;
    overflow: hidden;
    display: inline-block;
  }
}
.p-quantity {
    text-align: center;
    button,input{
        display: inline-block;
        text-align: inherit;
    }
    button{
        width: 20px;
    }
    input{
        width: 50px;
    }
}
  .p-checkbox {
    width: $cart-column-checkbox-width;
  }

</style>