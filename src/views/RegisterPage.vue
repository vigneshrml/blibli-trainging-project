<template>
  <div class="container">
    <div class="badge-block">
      <div class="login-badge">
        <b>{{ userEntity.length }} </b> Users using blibli.com, then you?
      </div>
    </div>
    <form action="" class="form-container">
      <img
        src="https://www.static-src.com/frontend/static/img/promowisata.c811b2f.svg"
        class="blibli"
        alt=""
        srcset=""
      />
      <div class="form-control">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          v-model="userData.name"
          class="form-control-field"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-control">
        <label for="email">Age</label>
        <!-- <input type="email" name="username" class="form-control-field" id="email" placeholder="Enter your email"> -->
        <select name="age" class="form-control-field" v-model="userData.age">
          <option :value="null">Select the age</option>
          <option
            :value="ageMinLimit + index"
            v-for="(data, index) in ageLimitSize"
            :key="index"
          >
            {{ ageMinLimit + index }}
          </option>
        </select>
      </div>
      <!-- <div class="form-control">
                <label for="username">Username</label>
                <input type="text" name="username" class="form-control-field" id="username" placeholder="Enter your username">
            </div> -->
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          v-model="userData.password"
          class="form-control-field"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <!-- <div class="form-control">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" name="confirm-password" class="form-control-field" id="confirm-password" placeholder="Confirm your password">
            </div> -->
      <!-- <div class="form-control form-terms">
                <input type="checkbox" name="confirm-terms" class="form-control-field" id=""> 
                <div class="terms">I agree with terms and Conditions</div>
            </div> -->
      <button type="button" class="action-button" @click="register()">
        {{ loader ? "Creating account..." : "Submit" }}</button
      ><br />
      <div class="form-footer">
        <small>or</small><br />
        <router-link to="/login">Already have an account!</router-link>
      </div>
    </form>
  </div>
</template>
<script src="@/views/script/RegisterPage.js"></script>
<style>
@import "@/assets/styles/authPage.css";
</style>
