<template>
  <div class="spinner-margin">
    <div class="spinner"></div>
  </div>
</template>
<script src="@/components/script/SpinnerAnimation.js"></script>
<style>
.spinner-margin {
  width: fit-content;
  margin: auto;
  vertical-align: middle;
}
.spinner {
  background-color: transparent;
  border: 5px solid #d6d6d6;
  border-top: 5px solid #0096da;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
