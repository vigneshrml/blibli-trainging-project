export default {
    name: "LoginPage",
    data() {
      return {
        currentUsername: "",
        currentPassword: "",
        validate: true,
      };
    },
    methods: {
      validateForm() {
        // alert(this.currentUsername + this.currentPassword)
        if (this.currentUsername == "admin" && this.currentPassword == "admin") {
          this.validate = true;
          this.$router.push("/");
        } else {
          this.validate = false;
        }
      },
      // validateLimitations(){
      //   console.log("calledfunc")
      //   return this.currentUsername.length > 10 ? true : false;
      // }
    },
     computed : {
      validateUsername(){
        return this.currentUsername.length > 10 ? true : false;
      },
      validatePassword(){
        return this.currentPassword && this.currentPassword.length < 9 ? true : false;
      }
    }
  };