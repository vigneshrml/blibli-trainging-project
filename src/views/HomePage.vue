<template>
  <div>
    <div class="home-container">
      <div class="side-bar">
        <FilterBox
          @filterChange="handleFilterOptionChange"
          @filterClear="handleFilterClear"
          :filterItems="filters"
          @filterOn="handleFilterSubmit"
        />
      </div>
      <div class="right-content">
        <button type="button" class="view-filter-btn">
          <span style="margin-right: 10px">View filter</span>
          <ion-icon name="filter-outline"></ion-icon>
        </button>
        <div class="outer-card" v-if="!$store.state.product.loader">
          <div v-if="selectedFilterOptions.length > 0">
            <p class="filtered-by-text">Filtered By:</p>
            <div class="product-filter">
              <div
                class="product-filter-badge"
                v-for="(data, i) in selectedFilterOptions"
                :key="i"
              >
                {{ data.specification }}
              </div>
            </div>
          </div>
          <div class="product-section">
            <p class="no-product-found" v-if="productList.length === 0">
              No Product Found!
            </p>
            <ProductItem
              v-for="(product, index) in productList"
              :product="product"
              :key="index"
            />
          </div>
        </div>
        <SpinnerAnimation v-else class="product-spinner" />
      </div>
    </div>
  </div>
</template>

<script src="@/views/script/HomePage.js"></script>

<style>
@import "@/assets/styles/homePage.css";

.no-product-found {
  margin: auto;
  margin-top: 20%;
  margin-bottom: 20%;
  color: #9d9d9d;
}

.product-spinner {
  margin-top: 20%;
}
</style>
