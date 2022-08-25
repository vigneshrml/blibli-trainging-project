import Vue from "vue";
import Router from "vue-router";

import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import CartPage from "@/views/CartPage.vue";
import ProductDescription from "@/views/ProductDescription";
import SettingPage from "@/views/SettingPage.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path : "/product/:itemSku",
      name : "ProductDescription",
      component : ProductDescription
    },
    // {
    //   path: "/products",
    //   name: "HomePage",
    //   component: HomePage,
    // },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
    {
      path: "/cart",
      name: "CartPage",
      component: CartPage,
    },{
      path : "/Setting",
      name : "SettingPage",
      component : SettingPage
    }
  ],
});
