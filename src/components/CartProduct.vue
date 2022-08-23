<template>
  <div>
    <div
      class="single-cart-product"
      v-for="(data, index) in products"
      :key="index"
    >
      <div class="row">
        <div class="col-3">
          <img
            :src="data.image"
            alt="product-image"
            class="product-card-image"
          />
        </div>
        <div class="col-7">
          <p class="product-title">{{ data.name }}</p>
          <p class="product-price">₹{{ data.offerPrice }}</p>
          <!-- <p class="product-offer-price">
            <strike>₹{{ data.realPrice }}</strike>
            <span class="product-offer-percentage"
              >{{ getPercentage(data.realPrice, data.offerPrice) }}%</span
            >
          </p> -->
          <!-- <p class="product-rating">
            ⭐ {{ data.rating }} rating
            <small style="color: #999999">({{ data.reviewCount }})</small>
          </p> -->
          <div class="badge">{{ data.ram }}</div>
          <div class="badge">{{ data.rom }}</div>
          <div class="product-outer-row">
            <div class="product-count-detail">
              <button
                class="product-count-btn"
                type="button"
                @click="
                  $store.dispatch('DECREASE_PRODUCT_QUANTITY', { productId: data.id })
                "
              >
                -
              </button>
              <input
                type="text"
                name="product-count"
                :value="data.count"
                class="product-count-input"
                disabled
              />
              <button
                class="product-count-btn"
                type="button"
                @click="$store.dispatch('ADD_TO_CART', { product : data })"
              >
                +
              </button>
            </div>
            <button
              class="product-delete-btn"
              type="button"
              @click="$store.dispatch('REMOVE_FROM_CART', { productIndex: index })"
            >
             <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="@/components/script/CartProduct.js"></script>
<style scoped>
.single-cart-product {
  margin: 5px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 2px rgba(234, 234, 234, 0.703);
}
.row {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  /* align-items: center; */
  width: 100%;
}

.col-3 {
  flex-basis: 25%;
}

.col-7 {
  flex-basis: 75%;
  padding: 5px 0;
}

p {
  margin: 0;
  margin-bottom: 5px;
}

.product-card-image {
  border-radius: 10px;
  width: 100%;
  vertical-align: middle;
  /* border: 0.5px solid #d9d9d9; */
}

.product-count-detail {
  display: flex;
  flex-direction: row;
  column-gap: 5px;
}

.product-count-btn {
  width: fit-content;
  background-color: transparent;
  border: 1px solid #0096da;
  color: #0096da;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  outline: none;
}

ion-icon {
  color: #da3e00 !important;
}

.product-delete-btn {
  width: fit-content;
  background-color: transparent;
  border: none;
  color: #da3e00 !important;
  font-weight: bold;
  font-size: 20px;
  border-radius: 8px;
  outline: none;
  vertical-align: middle;
}

.product-count-input {
  border-radius: 5px;
  border: 1px solid rgb(180, 180, 180);
  width: 40px;
  text-align: center;
}

.product-outer-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
