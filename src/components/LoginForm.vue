<template>
  <section class="container forms">
    <div class="form login">
      <h1>{{ title }}</h1>
      <form id="LoginForm" action="#">
        <div class="field input-field">
          <input
            type="email"
            placeholder="Email"
            id="email"
            class="input"
            v-model="email"
          />
        </div>

        <div class="field input-field">
          <input
            type="password"
            placeholder="Password"
            id="passwordLogin"
            class="password"
            v-model="password"
          />
          <i class="bx bxs-hide eye-icon"></i>
        </div>
        <div class="btn-wrapper">
          <div class="field">
            <button @click="addLoginData" class="button-login">Login</button>
          </div>

          <div class="button-field-sign-up">
            <span style="color: red">New User?</span>
            <router-link to="/">Sign Up</router-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderForm",
  components: {},
  props: {
    title: String,
    defaultText: {
      type: String,
      default: "Form by Kashif Saleem",
    },
  },
};
</script>

<script setup>
import { ref } from "vue";

// state
const email = ref("");
const password = ref("");

//actions on submit form add data to local storage

const addLoginData = () => {
  const loginData = {
    email: email.value,
    password: password.value,
  };

  // validate the form
  if (!email.value || !password.value) {
    alert("Please fill out all the fields");
    return;
  } else {
    localStorage.setItem("loginData", JSON.stringify(loginData));
    // empty the form
    email.value = "";
    password.value = "";
    alert("Login Successful");
    window.location.href = "./index.html";
  }
};
</script>

<style scoped></style>
