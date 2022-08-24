import Vue from "vue";
import Vuex from "vuex";

import cart from "@/store/modules/cart.store";
import product from "@/store/modules/product.store";
import user from "@/store/modules/user.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    cart,
    product,
    user
  }
});
