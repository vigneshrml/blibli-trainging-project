<template>
  <nav class="navbar">
    <img
      src="https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg"
      class="logo-brand"
      width="100"
      alt="logo"
      srcset=""
    />
    <ul class="nav-list">
      <li v-for="(data, index) in navList" :key="index">{{ data }}</li>
      <li>{{ title }}</li>
    </ul>
    <div class="search-outer-box">
      <input
        type="search"
        class="search-box"
        name="search"
        placeholder="Search product"
        v-model="title"
      />
      <button class="search-btn" type="button" @click="alertSearch()">
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
    <div class="cart-section">
      <button class="cart-btn" @click="moveToCartPage()">
        <ion-icon name="cart-outline"></ion-icon>
        <span class="cart-badge">{{ $store.state.cart.length }}</span>
        </button>
    </div>
    <div>
      <router-link to="/login" class="auth-login">Login</router-link>
      <router-link to="/register" class="auth-register">Register</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navList: ["Home", "Products", "Company", "About", "Contact"],
      disableAddToCart : false,
      title : ""
    };
  },
  methods: {
    alertSearch(){
        alert(this.title)
    },
    moveToCartPage(){
      this.$router.push("/cart");
    }
  },
  mounted(){
    console.log("Componented Mounted")
  }
};
</script>
<style scoped>
.navbar {
  position: sticky;
  z-index: 1;
  top: 0%;
  background-color: #0096da;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-list {
  list-style: none;
}

.nav-list > li {
  display: inline;
  color: #ffffff;
  font-size: 16px;
  margin: 0;
  margin-right: 15px;
}

.search-outer-box {
  margin-right: 10px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
}

.search-box {
  margin-left: 10px;
  outline: none;
  border: none;
  height: 35px;
  /* width: 100%; */
  width: 200px;
}

.search-btn {
  background-color: #0096da;
  color: #ffffff;
  outline: none;
  border-radius: 8px;
  border-width: 0;
  margin-right: 5px;
  padding: 5px 10px;
}

.logo-brand {
  margin-left: 10px;
}

.auth-login {
  background-color: #0096da;
  color: #ffffff;
  border: 2px solid #ffffff;
  width: fit-content;
  font-size: 15px;
  border-radius: 5px;
  padding: 5px 15px;
  margin-right: 20px;
  font-size: 13px;
}

.auth-register {
  background-color: #ffffff;
  color: #0096da;
  border: 2px solid #ffffff;
  width: fit-content;
  font-size: 15px;
  border-radius: 5px;
  padding: 5px 15px;
  margin-right: 20px;
  font-size: 13px;
}

ion-icon {
  color: rgb(255, 255, 255);
}

.cart-btn{
  background: transparent;
  outline: none;
  border: none;
  font-size: 27px;
  display: flex;
  flex-direction: row;
}

.cart-badge{
  background-color: #ED1C24;
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
  margin-left: 5px;
  padding: 4px 7px;
  border-radius: 10px;
}

</style>
