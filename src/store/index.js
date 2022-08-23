import Vue from "vue";
import Vuex from "vuex";

import cart from "@/store/cart.store";
import product from "@/store/product.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    cart,
    product
  }
});
