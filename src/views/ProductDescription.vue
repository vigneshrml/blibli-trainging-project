<template lang="">
  <div class="product-details">
    <!-- <h1>Product Description</h1>
        <small>{{ $route.params.itemSku }}</small> -->
    <div class="product-content" v-html="productDescription"></div>
  </div>
</template>
<script src='@/views/script/ProductDescription.js'></script>
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
