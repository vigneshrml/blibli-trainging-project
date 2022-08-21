<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="outer-card">
        <p v-if="cartProducts.length === 0" class="no-product-text"> No Products in Cart!</p>
        <div v-else class="row">
            <div class="col-6">
                <CartProduct :products="cartProducts"/>
            </div>
            <div class="col-4">
                <div class="checkout-card">
                    <p class="total-style">Total:</p>
                    <h1>₹{{$store.getters.totalPrice}}</h1>
                    <hr class="cart-hr">
                    <p class="checkout-subtitle">Delivery Address</p>
                    <p class="checkout-details-subtilte">
                        22F4+JR6, Peelamedu, HUDCO Colony, Coimbatore, Tamil Nadu 641004
                    </p>
                    <button class="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import CartProduct from "@/components/CartProduct.vue";

export default {
  name: "CartPage",
  components: {
    NavBar,
    CartProduct
  },
  data(){
    return{
        cartProducts : this.$store.state.cart
    }
  }
};
</script>
<style scoped>
.container {
  margin-top: 30px;
}
.outer-card {
  border-radius: 10px;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 60%;
  min-height: 400px;
  max-height: 600px;
  margin: auto;
  box-shadow: 0px 0px 6px 2px rgba(221, 221, 221, 0.703);
}

.checkout-card {
  margin: 5px;
  margin-bottom: 15px;
  padding: 20px 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 2px rgba(234, 234, 234, 0.703);
}

.row{
    display: flex;
    flex-direction: row;
}

.col-4{
    flex-basis: 45%;
}

.col-6{
    flex-basis:65%;
}

.total-style{
    margin-top: 5px;
    margin-bottom: 3px;
    color: rgb(141, 141, 141);
}

.cart-hr {
  margin-top: 15px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid #d3d3d3;
  outline: none;
}

h1{
    margin: 0;
}

.checkout-subtitle{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}

.checkout-details-subtilte{
    font-size: 14px;
    color: #696969;
    margin: 0;
}

.checkout-button{
    width: 100%;
    background-color: #0096da;
    color: #FFFFFF;
    margin-top: 30px;
    padding: 12px 15px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;
    outline: none;
    border: none;
}

.no-product-text{
  margin-top: 20%;
  text-align: center;
  color: #a6a6a6;
}

</style>
