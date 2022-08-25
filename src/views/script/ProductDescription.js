import { getSingleProduct } from "@/service/product.service";

export default {
  name: "ProductDescription",
  data() {
    return {
      productDescription: "",
    };
  },
  created() {
    getSingleProduct({
      itemSku: this.$route.params.itemSku,
      success: (response) => {
        console.log(response.data.data.value);
        this.productDescription = response.data.data.value;
      },
      error: (error) => {
        console.log(error);
      },
    });
  },
};