<template>
  <div class="product-section">
    <p class="no-product-found" v-if="products.length === 0">No Product Found!</p>
    <div
      v-else
      class="single-product-entity"
      v-for="(data, index) in products"
      :key="index"
    >
      <div class="product-card">
        <img :src="data.image" class="product-card-image" alt="" />
        <div class="product-card-body">
          <p class="product-title">{{ subStringProduct(data.name) }}</p>
          <p class="product-price">₹{{ data.offerPrice }}</p>
          <p class="product-offer-price">
            <strike>₹{{ data.realPrice }}</strike>
            <span class="product-offer-percentage">{{ getPercentage(data.realPrice,data.offerPrice) }}%</span>
          </p>
          <p class="product-rating">⭐ {{ data.rating }} rating <small style="color:#999999;">({{ data.reviewCount }})</small></p>
          <div class="badge">{{ data.ram }}</div>
          <div class="badge">{{ data.rom }}</div>
          <button class="action-button" @click="$store.commit('addToCart', {data})">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  props: ["products"],
  methods : {
    subStringProduct(data){
      return data.substring(0,35) + "...";
    },
    getPercentage(realPrice,offerPrice){
      return Math.floor((realPrice - offerPrice)/realPrice  * 100)
    }
  }
};
</script>
<style>
  .product-offer-percentage{
    border-radius: 5px;
    padding: 2px 5px;
    color: #0096da;
    margin-left: 5px;
    background-color: #DAF3FF;
    font-size: 11px;
    font-weight: 600;
  }

  .no-product-found{
    margin: auto;
    margin-top: 20%;
    margin-bottom: 20%;
    color: #9d9d9d;
  }

</style>
