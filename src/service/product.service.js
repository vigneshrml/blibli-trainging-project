import axios from "axios";

const productApi = "https://www.blibli.com/backend/search/products?searchTerm=mobiles&start=0&itemPerPage=20";

export const getProducts = ({ success, error }) => {
  axios
    .get(productApi)
    .then((response) => {
      success && success(response);
    })
    .catch((e) => {
      error && error(e);
    });
};

export const searchProduct = ({ itemName , success ,  error}) => {
  axios
    .get(`https://www.blibli.com/backend/search/products?searchTerm=${itemName}&start=0&itemPerPage=20`)
    .then((response) => {
      success && success(response);
    })
    .catch((e) => {
      error && error(e);
    });
}