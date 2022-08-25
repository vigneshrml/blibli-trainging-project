import axios from "axios";


export const createNewUser = ({ userData , successCallBack, failureCallBack }) => {
  // console.log(itemSku)
  console.log(userData)
  axios
    .post(`https://62f23c6518493ca21f2f538c.mockapi.io/users`, userData)
    .then((response) => {
      successCallBack && successCallBack(response);
    })
    .catch((e) => {
      failureCallBack && failureCallBack(e);
    });
}


export const getUserListFromAPI = ({ successCallBack, failureCallBack }) => {
  axios
    .get(`https://62f23c6518493ca21f2f538c.mockapi.io/users`)
    .then((response) => {
      successCallBack && successCallBack(response);
    })
    .catch((e) => {
      failureCallBack && failureCallBack(e);
    });
}

export const deleteUser = ({ userId , successCallBack, failureCallBack }) => {
  axios
    .delete(`https://62f23c6518493ca21f2f538c.mockapi.io/users/${userId}`)
    .then((response) => {
      successCallBack && successCallBack(response);
    })
    .catch((e) => {
      failureCallBack && failureCallBack(e);
    });
}

export const updateUser = ({ userId , userData,  successCallBack, failureCallBack }) => {
  console.log(userId, userData)
  axios
    .put(`https://62f23c6518493ca21f2f538c.mockapi.io/users/${userId}`, userData)
    .then((response) => {
      successCallBack && successCallBack(response);
    })
    .catch((e) => {
      failureCallBack && failureCallBack(e);
    });
}


