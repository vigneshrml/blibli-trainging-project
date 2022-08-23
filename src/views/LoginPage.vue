<template>
  <div class="container">
    <form action="" class="form-container">
      <img
        src="https://www.static-src.com/frontend/static/img/promowisata.c811b2f.svg"
        class="blibli"
        alt=""
        srcset=""
      />
      <div class="form-control">
        <label for="username">Username</label>
        <input
          type="text"
          :class="[{ error: !validate }, 'form-control-field']"
          name="username"
          id="name"
          v-model="currentUsername"
          placeholder="Enter your username"
        />
      </div>
      <p
        v-if="validateUsername"
        style="color: red; font-size: 12px; margin : 0; margin-bottom : 15px;"
      >
        Please Enter within 10 letters!
      </p>
      <div class="form-control">
        <label for="username">Password</label>
        <input
          type="password"
          :class="[{ error: !validate }, 'form-control-field']"
          name="password"
          id="password"
          v-model="currentPassword"
          placeholder="Enter your password"
        />
      </div>
      <p
        v-if="validatePassword"
        style="color: red; font-size: 12px; margin : 0; margin-bottom : 15px;"
      >
        Password should be greater than 8 letters!
      </p>
      <p
        v-if="!validate"
        style="color: red; font-size: 14px; text-align: center"
      >
        Username or Password may Incorrect!
      </p>
      <button type="button" class="action-button" @click="validateForm()">
        Login</button
      ><br />
      <div class="form-footer">
        <small>or</small><br />
        <router-link to="/register">New user, create a account!</router-link>
      </div>
    </form>
  </div>
</template>
<script src="@/views/script/LoginPage.js"></script>
<style>
@import "@/assets/styles/authPage.css";
.error {
  border: 2px solid red;
}
</style>
