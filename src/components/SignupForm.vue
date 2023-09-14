<template>
  <section class="container forms" id="signUp">
    <div class="form login signupForm">
      <header class="form-content">Sign Up</header>
      <form id="signupForm" action="#">
        <div class="field input-field">
          <input
            type="text"
            placeholder="First Name"
            class="input"
            id="firstName"
            v-model="firstName"
          />
        </div>

        <div class="field input-field">
          <input
            type="text"
            placeholder="Last Name"
            class="input"
            id="lastName"
            v-model="lastName"
          />
        </div>

        <div class="field input-field">
          <input
            type="email"
            placeholder="Email"
            class="input"
            id="signupEmail"
            v-model="email"
          />
        </div>

        <div class="field input-field">
          <input
            type="password"
            placeholder="Password"
            class="password"
            id="signupPassword"
            v-model="password"
          />
          <box-icon
            class="eye-icon bxs-hide"
            type="solid"
            name="hide"
            @click="togglePassword"
          ></box-icon>
        </div>

        <div class="field input-field" id="address">
          <input
            type="text"
            id="phoneNumber"
            placeholder="Address"
            class="password"
            v-model="address"
          />
        </div>

        <div class="field input-field">
          <input
            type="text"
            placeholder="Phone Number"
            class="password"
            v-model="phoneNumber"
          />
        </div>

        <div
          class="input-field field"
          style="background-color: white"
          id="address"
        >
          <input
            type="file"
            accept="image/*"
            id="image"
            placeholder="Address"
            class="image"
            @change="previewFiles"
          />
        </div>

        <!-- Camera setup for picture using webcam.js -->
        <div id="camera"></div>
        <button onclick="takePic()">Take Picture</button>
        <button onclick="activateCamera()">Activate Camera</button>
        <div id="activate camera"></div>

        <div id="results"></div>

        <div class="btn-wrapper">
          <div>
            <button @click="addSignUpData" class="field button-field">
              Sign Up
            </button>
          </div>

          <div class="form-link link">
            <span>Already have an account?</span>
            <router-link to="/login">Log In</router-link>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    previewFiles(event) {
      console.log(event.target.value);
      localStorage.setItem("image", event.target.value);
    },
    setup() {},
  },
};
</script>

<script setup>
import "boxicons";

import { ref } from "vue";

//state
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const address = ref("");
const phoneNumber = ref("");

// const image = ref("");
// const camera = ref("");
// const results = ref("");

const addSignUpData = () => {
  const signUpData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    address: address.value,
    phoneNumber: phoneNumber.value,
    // image: image.value,
    // camera: camera.value,
    // results: results.value,
  };

  // add to local storage
  localStorage.setItem("signUpData", JSON.stringify(signUpData));
};

const togglePassword = () => {
  // console.log(password.value);
  const passw = document.getElementById("signupPassword");

  console.log(passw.type);
};
</script>
