<template>
  <div class="single-product-entity">
    <div class="product-card">
        <div @click="redirectPage(product)">
          <div>
        <img :src="product.image" class="product-card-image" alt="" />
      </div>
      <div class="product-card-body">
        <p class="product-title">{{ subStringProduct(product.name) }}</p>
        <p class="product-price">₹{{ product.offerPrice }}</p>
        <p class="product-offer-price">
          <strike>₹{{ product.realPrice }}</strike>
          <span class="product-offer-percentage"
            >{{ getPercentage(product.realPrice, product.offerPrice) }}%</span
          >
        </p>
        <p class="product-rating">
          ⭐ {{ product.rating }} rating
          <small style="color: #999999">({{ product.reviewCount }})</small>
        </p>
        <!-- <div class="badge">{{ product.ram }}</div>
        <div class="badge">{{ product.rom }}</div> -->
        
      </div>
        </div>
      <ButtonComponent
          label="Add to Cart" 
          @onClick="$store.dispatch('ADD_TO_CART',  {product} )"
          type="button"
        />
    </div>
  </div>
</template>
<script src="@/components/script/ProductItem.js"></script>
<style>
.product-offer-percentage {
  border-radius: 5px;
  padding: 2px 5px;
  color: #0096da;
  margin-left: 5px;
  background-color: #daf3ff;
  font-size: 11px;
  font-weight: 600;
}

.single-product-entity {
  box-sizing: border-box;
  padding: 5px;
  flex-basis: 20%;
  margin-bottom: 20px;
}

</style>
