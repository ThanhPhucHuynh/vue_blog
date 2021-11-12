<template>
  <!-- <div class="login">
    <div>
      <form @submit.prevent="submit">
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
    </div>
  </div> -->

  <!-- <div :class="'container '+ sign-up-mode"> -->
  <div class="container" :class="{ signupmode: isActive }">
    <div class="forms-container">
      <div class="signin-signup">
        <form class="sign-in-form" @submit.prevent="submit">
          <!-- <form action="#" class="sign-in-form"> -->
          <h2 class="title">Sign in</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" name="email" v-model="form.email" />
            <!-- <input type="text" placeholder="Username" /> -->
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" name="password" v-model="form.password" />
            <!-- <input type="password" placeholder="Password" /> -->
          </div>
          <input type="submit" value="Login" class="btn solid" />
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
            <!-- <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a> -->
          </div>
        </form>
        <form action="#" class="sign-up-form">
          <h2 class="title">Sign up</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" class="btn" value="Sign up" />
          <p class="social-text">Or Sign up with social platforms</p>
          <div class="social-media">
            <!-- <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a> -->
          </div>
        </form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button
            class="btn transparent"
            @click="showclassName"
            id="sign-up-btn"
          >
            Sign up
          </button>
        </div>
        <!-- <img src="../assets/log.svg" class="image" alt="" /> -->
        <lottie
          :options="defaultOptions"
          class="image"
          :height="300"
          :width="300"
          v-on:animCreated="handleAnimation"
        />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button
            class="btn transparent"
            id="sign-in-btn"
            @click="hideclassName"
          >
            Sign in
          </button>
        </div>
        <!-- <img src="../assets/register.svg" class="image" alt="" /> -->
         <lottie
          :options="defaultOptions2"
          class="image"
          :height="300"
          :width="300"
          v-on:animCreated="handleAnimation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "./Login.css";
// import {TweenMax, Circ} from 'gsap'
import { mapActions } from "vuex";
import animationData from "../assets/images/boy.json";
import animationData2 from "../assets/images/girl.json";
import Lottie from "../components/lottie.vue";
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });
export default {
  name: "Login",
  components: {
    lottie: Lottie,
  },
  mounted: function () {
    this.startAnimations();
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
      classname: "dsf",
      isActive: false,
      defaultOptions: { animationData: animationData },
      defaultOptions2: { animationData: animationData2 },
    };
  },
  methods: {
    ...mapActions(["Login"]),
    async submit() {
      console.log(this.form);
      try {
        await this.Login(this.form);
        this.$router.push("/blog");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    hideclassName: function () {
      this.isActive = false;
    },
    showclassName: function () {
      // this.classname  = "sign-up-mode"
      this.isActive = true;
    },
    startAnimations: function () {},
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
