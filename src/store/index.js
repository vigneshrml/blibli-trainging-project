import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters : {
    totalPrice(state){
      let total = 0;
      state.cart.map((data)=>{
        total += data.offerPrice * data.count
      })
      return total
    }
  },
  mutations: {
    addToCart(state, { data }) {
      const product = {
        count: 0,
        id: data.id,
        image: data.image,
        name: data.name,
        offerPrice: data.offerPrice,
        ram: data.ram,
        rom: data.rom,
      };
      let item = state.cart.find((item) => item.id == data.id);
      if (item){
        item.count++;
      }
      else state.cart.push({ ...product, count: 1 });
      
    },

    decreaseQuantity(state, { productId }) {
      let item = state.cart.find((item) => item.id == productId);
      if (item.count > 1) item.count--;
    },

    removeFromCart(state, { productIndex }) {
      state.cart.splice(productIndex, 1);
    },
  },
});
