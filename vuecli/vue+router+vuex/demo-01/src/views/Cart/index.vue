<template>
  <div class="cart-content">
    <ul class="cart-thead">
      <li class="column p-checkbox">全选</li>
      <li class="column p-goods">商品</li>
      <li class="column">价格</li>
      <li class="column">数量</li>
      <li class="column">小计</li>
      <li class="column">操作</li>
    </ul>
    <div class="cart-tbody">
      <div class="item-form" v-for="ele in products" :key="ele.id">
        <CartItem :item="ele"></CartItem>
      </div>
    </div>
    <div class="cart-toolbar">
      <div class="payment-box">
        总价：
        <div class="total">￥{{ total }}</div>
        <button
          :disabled="count <= 0"
          @click="payment"
          class="payment-btn"
          :class="{ 'payment-btn-disabled': count <= 0 }"
        >
          结算
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem";
export default {
  name: "Cart",
  components: { CartItem },
  computed: {
    ...mapGetters("cart", ["products", "total", "count"]),
  },
  created() {
    console.log(this.products);
  },
  methods: {
    payment() {
      this.$store.dispatch("cart/payment").then((value) => {
        alert(value);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.cart-content {
  // height: calc(100vh - #{$cart-toolbar-height+$header-height});
  width: $cart-content-width;
  .cart-thead {
    background-color: rgb(245, 243, 243);
    width: $cart-content-width;
    font-size: 0;
    overflow: hidden;
    .column {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      text-align: center;
      width: $cart-column-width;
      font-size: 14px;
    }
    .p-checkbox {
      width: $cart-column-checkbox-width;
    }
    .p-goods {
      width: $cart-column-goods-width;
    }
  }

  .cart-toolbar {
    box-sizing: border-box;
    box-shadow: 0px -4px 4px rgba($color: #616161, $alpha: 0.1);
    height: $cart-toolbar-height;
    background-color: antiquewhite;
    position: fixed;
    bottom: 0;
    width: $cart-content-width;
    line-height: 50px;
    .payment-box {
      width: 50%;
      float: right;
      .total {
        display: inline;
        font-weight: bold;
        color: red;
        font-size: 1em;
      }

      .payment-btn {
        display: block;
        height: 50px;
        width: 200px;
        background-color: red;
        color: white;
        border: none;
        float: right;
        &:hover {
          cursor: pointer;
        }
        &:disabled {
          cursor: not-allowed;
        }
      }
      .payment-btn-disabled {
        background-color: rgba($color: red, $alpha: 0.5);
      }
    }
  }
}
</style>