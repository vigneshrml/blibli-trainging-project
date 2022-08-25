export default {
    state: {
      cart: []
    },
    getters : {
      totalPrice(state){
        let total = 0;
        state.cart.map((data)=>{
          total += data.offerPrice * data.count
        })
        return total;
      },
      getAllCartProducts(state){
        return state.cart;
      }
    },
    mutations: {
      addToCart(state, { product }) {
        const constructedProduct = {
          count: 0,
          id: product.id,
          image: product.image,
          name: product.name,
          offerPrice: product.offerPrice,
          ram: product.ram,
          rom: product.rom,
        };
        let item = state.cart.find((item) => item.id == product.id);
        if (item){
          item.count++;
        }
        else state.cart.push({ ...constructedProduct, count: 1 });
      },
  
      decreaseQuantity(state, { productId }) {
        let item = state.cart.find((item) => item.id == productId);
        if (item.count > 1) item.count--;
      },
  
      removeFromCart(state, { productIndex }) {
        state.cart.splice(productIndex, 1);
      },
    },
    actions : {
      ADD_TO_CART(state,product) {
        this.commit("addToCart",product)
      },
      REMOVE_FROM_CART(state,productId){
        this.commit("removeFromCart", productId)
      },
      DECREASE_PRODUCT_QUANTITY(state,productIndex){
        this.commit("decreaseQuantity", productIndex)
      }
    }
  };