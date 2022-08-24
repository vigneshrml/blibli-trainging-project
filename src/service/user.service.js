import axios from "axios";


export const createNewUser = ({ userData , successCallBack, failureCallBack }) => {
  // console.log(itemSku)
  console.log(userData)
  axios
    .post(`https://63062052697408f7edd35c8b.mockapi.io/user/user`, userData)
    .then((response) => {
      successCallBack && successCallBack(response);
    })
    .catch((e) => {
      failureCallBack && failureCallBack(e);
    });
}


export const getUserListFromAPI = ({ successCallBack, failureCallBack }) => {
  axios
    .get(`https://63062052697408f7edd35c8b.mockapi.io/user/user`)
    .then((response) => {
      successCallBack && successCallBack(response);
    })
    .catch((e) => {
      failureCallBack && failureCallBack(e);
    });
}


