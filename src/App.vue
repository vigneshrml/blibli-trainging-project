<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.form-container {
  width: fit-content;
  margin: auto;
  transform: translateY(10%);
  padding: 30px;
  width: 300px;
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 2px 0px 12px 4px rgba(219, 219, 219, 0.822);
}

.form-control-field {
  margin-top: 5px;
  margin-bottom: 10px;
  width: 97%;
  height: 35px;
  border-radius: 10px;
  padding-left: 5px;
  border: 2px solid #ececec;
  background-color: #efefef;
}

.form-control-field-select {
  margin-top: 5px;
  margin-bottom: 10px;
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding-left: 5px;
  color: #00000061;
  font-size: 15px;
  border: 2px solid #ececec;
  background-color: #efefef;
}

.form-control-field:focus {
  border-color: #40c3ff;
  outline: none;
}

.form-control-field::placeholder {
  color: #00000061;
  font-size: 15px;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  margin: 0;
}

.form-terms {
  display: flex;
  align-items: center;
}

.terms {
  margin-left: 10px;
}

label,
.terms {
  font-size: 15px;
}

.action-button {
  background-color: #0096da;
  color: white;
  border: none;
  width: 100%;
  height: 35px;
  font-size: 15px;
  border-radius: 10px;
  padding: 5px 15px;
  margin: auto;
  margin-top: 20px;
  display: block;
}

.form-footer {
  text-align: center;
}

a {
  font-size: 15px;
  color: #0096da;
  text-decoration: none;
}



</style>
