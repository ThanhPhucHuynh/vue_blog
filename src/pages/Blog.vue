<template>
  <div class="login">
    {{ blogs }}
    <!-- <div>
      <form @submit.prevent="submit">
        <div>
          <label for="name">name:</label>
          <input type="text" name="name" v-model="form.name" />
        </div>
        <div>
          <label for="email">email:</label>
          <input type="text" name="email" v-model="form.email" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="form.password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p v-if="showError" id="error">Username or Password is incorrect</p>
    </div> -->
  </div>
</template>

<script>
// import axios from "axios";
// import { mapActions } from "vuex";
import BaseRequests from "../core/BaseRequest";

export default {
  name: "Blog",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
      },
      showError: false,
      blogs: [],
    };
  },
  mounted: async function () {
    // const token =
    //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJudmExMDFAZ21haWwuY29tIiwiaWQiOjQsImV4cCI6MTYzNjYxOTkzMCwiaWF0IjoxNjM2NjAxOTMwLCJlbWFpbCI6Im52YTEwMUBnbWFpbC5jb20ifQ.vCe_XK09ISsei6VUomU8MeID_WtKMzJBke_OsXYl7x794pI_4bIahXoIT8HwAvqQO8LAvVzb-UbmSdhBoP1fHQ";
    this.blogs = await BaseRequests.get("post");
    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };
    // this.blogs = await axios.get("localhost:8081/post", config);
  },
  methods: {
    // ...mapActions(["Register"]),
    async submit() {
      console.log(this.form);
      try {
        await this.Register(this.form);
        this.$router.push("/login");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>
