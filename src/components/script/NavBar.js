export default {
    data() {
      return {
        itemName : "",
        navList: [
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Products",
            path: "/products",
          },
          {
            label: "Company",
            path: "/company",
          },
          {
            label: "About",
            path: "/about",
          },
          {
            label: "Contact",
            path: "/contact",
          },
        ],
        disableAddToCart: false,
      };
    },
    methods: {
      alertSearch() {
        alert(this.title);
      },
      moveToCartPage() {
        this.$router.push("/cart");
      },
      searchItem(){
        // console.log(this.itemName)
        this.$router.push({ path: "/products", query: { itemName: this.itemName } })
        // this.$store.dispatch("SEARCH_PRODUCT", this.itemName)
      }
    },
    mounted() {
      console.log(this.$store);
      
    },
  };