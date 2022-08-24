import { getProducts } from "@/service/product.service";

export default {
  state: {
    products: [],
    loader: true,
    itemName: "grocery",
  },
  getters: {
    getAllProduct(state) {
      return state.products;
    },
    getItemName(state) {
      return state.itemName;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      state.loader = false;
    },
    setLoaderTrue(state) {
      state.loader = true;
    },
    setProductName(state, searchName) {
      state.itemName = searchName;
    },
  },
  actions: {
    GET_ALL_PRODUCT({state}, value = state.itemName){
      // state.loader = true;
      this.commit("setLoaderTrue");
      // console.log(state.itemName)
      getProducts({
        itemName: value,
        success: (res) => {
          // console.log(res);
          const products = res.data.data.products;
          const finalProduct = [];
          products.forEach((product) => {
            const obj = {
              id: product.id,
              itemSku: product.itemSku,
              image: product.images[0],
              name: product.name,
              brand: product.brand || "No Defined",
              offerPrice: Math.floor(product.price.minPrice / 80),
              realPrice: Math.floor(
                product.price.minPrice / 80 +
                  Math.floor(Math.random() * (product.price.minPrice / 80))
              ),
              rating: (Math.random() * 5).toFixed(1),
              // ram: "4 GB RAM",
              // rom: "64 GB ROM",
              reviewCount: Math.floor(Math.random() * 344),
              price: "Under ₹15,000",
            };
            finalProduct.push(obj);
          });
          // this.products = finalProduct;

          this.commit("setProducts", finalProduct);
        },
        error: () => {
          this.commit("setProducts", []);
        },
      });
    },
  },
};
