import CartProduct from "@/components/CartProduct.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartPage",
  components: {
    CartProduct
  },
  data(){
    return{
        // cartProducts : this.$store.state.cart.cart
    }
  },
  computed : {
    ...mapGetters({
      totalPrice : "totalPrice",
      cartProducts : "getAllCartProducts"
    }),
  }
};