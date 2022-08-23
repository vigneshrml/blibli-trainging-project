import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "ProductItem",
  components: {
    ButtonComponent,
  },
  props: ["product"],
  methods: {
    subStringProduct(product) {
      return product.substring(0, 35) + "...";
    },
    getPercentage(realPrice, offerPrice) {
      return Math.floor(((realPrice - offerPrice) / realPrice) * 100);
    },
  },
};