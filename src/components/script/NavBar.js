export default {
  name : "NavBar",
    data() {
      return {
        searchName : "",
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
        console.log(this.searchName)
        this.$router.push({ path: "/", query: { itemName: this.searchName } })
        // this.$store.dispatch("GET_ALL_PRODUCT", this.searchName)
        // this.$store.dispatch("GET_ALL_PRODUCT");
      }
    }
  };