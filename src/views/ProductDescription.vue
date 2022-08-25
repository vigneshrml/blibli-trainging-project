<template lang="">
  <div class="product-details">
    <!-- <h1>Product Description</h1>
        <small>{{ $route.params.itemSku }}</small> -->
    <div class="product-content" v-html="productDescription"></div>
  </div>
</template>
<script>
import { getSingleProduct } from "@/service/product.service";

export default {
  name: "ProductDescription",
  data() {
    return {
      productDescription: "",
    };
  },
  created() {
    getSingleProduct({
      itemSku: this.$route.params.itemSku,
      success: (response) => {
        console.log(response.data.data.value);
        this.productDescription = response.data.data.value;
      },
      error: (error) => {
        console.log(error);
      },
    });
  },
};
</script>
<style scoped>
.product-details {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.product-content {
  width: 60vw;
}
</style>
