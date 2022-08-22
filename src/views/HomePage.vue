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
    <FooterArea />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import productData from "@/utils/product";
import filterOptions from "@/utils/filterOptions";
import ProductItem from "@/components/ProductItem.vue";
import FilterBox from "@/components/FilterBox.vue";
import FooterArea from "@/components/FooterArea.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    ProductItem,
    FilterBox,
    FooterArea,
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
    handleFilterClear() {
      this.products = productData;
    },
    handleFilterSubmit() {
      this.products = productData;
      console.log(this.products)
      console.log(this.selectedFilterOptions)
      let finalResult = [];
      this.products.forEach((e) => {
        const allFiltered = this.selectedFilterOptions.some(
          (data) => e[data["category"]] == data["specification"]
        );
        allFiltered && finalResult.push(e);
      });

      this.products = finalResult;

      //     const filterResult = this.products.filter((e)=>{
      //        return this.selectedFilterOptions.forEach((data) => {
      //              e[data["category"]] == data["specification"]
      //           });
      //     })
      // console.log(filterResult)
    },
  },
};
</script>

<style>
@import "@/assets/styles/homePage.css";
</style>
