import { getProducts , searchProduct } from "@/service/product.service";

export default {
  state: {
    products: [],
    loader : true
  },
  getters: {
    getAllProduct(state) {
        return state.products;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      state.loader = false;
    },
    setLoaderTrue(state){
      state.loader = true;
    }
  },
  actions: {
    GET_ALL_PRODUCT(state,value) {
      // state.loader = true;
     getProducts({
        itemName : value,
        success: (res) => {
            console.log(res)
                const products = res.data.data.products;
                const finalProduct = [];
                products.forEach((product) => {
                  const obj = {
                    id: product.id,
                    itemSku : product.itemSku,
                    image: product.images[0],
                    name: product.name,
                    brand: product.brand || "Samsung",
                    offerPrice: Math.floor(product.price.minPrice / 80),
                    realPrice: Math.floor(
                      product.price.minPrice / 80 +
                        Math.floor(Math.random() * (product.price.minPrice / 80))
                    ),
                    rating: 4.2,
                    ram: "4 GB RAM",
                    rom: "64 GB ROM",
                    reviewCount: 93,
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
    SEARCH_PRODUCT(state,value){
      // console.log(value)
      // state.loader = true;
      searchProduct({
        itemName : value,
        success: (res) => {
          console.log(res)
              const products = res.data.data.products;
              const finalProduct = [];
              products.forEach((product) => {
                const obj = {
                  id: product.id,
                  itemSku : product.itemSku,
                  image: product.images[0],
                  name: product.name,
                  brand: product.brand || "Samsung",
                  offerPrice: Math.floor(product.price.minPrice / 80),
                  realPrice: Math.floor(
                    product.price.minPrice / 80 +
                      Math.floor(Math.random() * (product.price.minPrice / 80))
                  ),
                  rating: 4.2,
                  ram: "4 GB RAM",
                  rom: "64 GB ROM",
                  reviewCount: 93,
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
      })
    }
  },
};
