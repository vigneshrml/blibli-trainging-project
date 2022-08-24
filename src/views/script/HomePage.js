// import axios from "axios";
import productData from "@/utils/product";
import filterOptions from "@/utils/filterOptions";
import ProductItem from "@/components/ProductItem.vue";
import FilterBox from "@/components/FilterBox.vue";
import SpinnerAnimation from "@/components/SpinnerAnimation.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    ProductItem,
    FilterBox,
    SpinnerAnimation,
  },
  data() {
    return {
      // products: [],
      filters: filterOptions,
      selectedFilterOptions: [],
      loader: true,
    };
  },
  methods: {
    handleFilterOptionChange(data) {
      this.selectedFilterOptions = data.options;
    },
    handleFilterClear() {
      // this.products = productData;
      this.$store.dispatch("GET_ALL_PRODUCT");
    },
    handleFilterSubmit() {
      this.products = productData;
      let finalResult = [];
      let needToFilter = [];

      this.selectedFilterOptions.forEach((filterItem) => {
        const itemResult = needToFilter.find(
          (item) => item.category == filterItem.category
        );
        if (itemResult) {
          itemResult.specifications.push(filterItem.specification);
        } else {
          needToFilter.push({
            category: filterItem.category,
            specifications: [filterItem.specification],
          });
        }
      });

      this.products.forEach((e) => {
        const allFiltered = needToFilter.every((data) =>
          data["specifications"].includes(e[data["category"]])
        );
        allFiltered && finalResult.push(e);
      });
      this.products = finalResult;
    },
  },
  computed: {
    ...mapGetters({
      productList: "getAllProduct",
      itemName : "getItemName"
    }),
  },
  watch: {
    $route() {
      // react to route changes...
      // console.log(to,from)
      // this.$store.commit("setLoaderTrue");
      this.$store.dispatch("GET_ALL_PRODUCT", this.$route.query.itemName)
    }
  },
  created() {
    if(!this.$route.query.itemName)
      this.$store.dispatch("GET_ALL_PRODUCT");
    else
      this.$store.dispatch("GET_ALL_PRODUCT", this.$route.query.itemName)
  },
};
