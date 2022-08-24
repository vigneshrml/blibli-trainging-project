import axios from "axios";

export const getProducts = ({ itemName , success ,  error}) => {
  axios
    .get(`https://www.blibli.com/backend/search/products?searchTerm=${itemName}&start=0&itemPerPage=20`)
    .then((response) => {
      success && success(response);
    })
    .catch((e) => {
      error && error(e);
    });
}

export const getSingleProduct = ({ itemSku , success, error }) => {
  console.log(itemSku)
  axios
    .get(`https://www.blibli.com/backend/product-detail/products/${itemSku}/description`)
    .then((response) => {
      success && success(response);
    })
    .catch((e) => {
      error && error(e);
    });
}


