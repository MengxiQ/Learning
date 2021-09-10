import { createStore } from 'vuex'
import { cart } from './moduels/cart'
import { user } from './moduels/user'
export default createStore({
  modules: {
    cart,
    user
  }
})
