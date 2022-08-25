import { mapGetters } from "vuex";

export default {
  name: "RegisterPage",
  data: () => {
    return {
      age: [],
      ageLimitSize: 16,
      ageMinLimit: 20,
      userData: {
        name: "",
        age: null,
        password: "",
      },
    };
  },
  methods: {
    register() {
      // console.log(this.userEntity)
      this.$store.dispatch("CREATE_NEW_USER", this.userData);
    },
  },
  created() {
    this.$store.dispatch("RETRIVE_USER_DATA");
  },
  computed: {
    ...mapGetters({
      userEntity: "getUserList",
    }),
    loader() {
      return this.$store.state.user.userLoader;
    },
  },
};