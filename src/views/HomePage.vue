<template>
  <div>
    <NavBar />
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
        <div class="outer-card">
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
          <ProductItem :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import productData from "@/utils/product";
import filterOptions from "@/utils/filterOptions";
import ProductItem from "@/components/ProductItem.vue";
import FilterBox from "@/components/FilterBox.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    ProductItem,
    FilterBox,
  },
  data() {
    return {
      products: productData,
      // orgProduct: productData,
      filters: filterOptions,
      selectedFilterOptions: [],
    };
  },
  methods: {
    handleFilterOptionChange(data) {
      this.selectedFilterOptions = data.options;
    },
    handleFilterClear(){
      this.products = productData;
    },
    handleFilterSubmit() {
      this.products = productData;
        let finalResult = [];
        this.products.forEach((e) => {
          this.selectedFilterOptions.forEach((data) => {
            e[data["category"]] == data["specification"] && finalResult.push(e);
          });
        });
        this.products = finalResult;
    },
  },
};
</script>

<style>
@import "@/assets/styles/homePage.css";
</style>
