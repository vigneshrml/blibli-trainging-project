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
      }
    },
  };