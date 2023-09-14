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
          />
        </div>

        <div class="field input-field">
          <input
            type="text"
            placeholder="Last Name"
            class="input"
            id="lastName"
          />
        </div>

        <div class="field input-field">
          <input
            type="email"
            placeholder="Email"
            class="input"
            id="signupEmail"
          />
        </div>

        <div class="field input-field">
          <input
            type="password"
            placeholder="Password"
            class="password"
            id="signupPassword"
          />
          <i class="bx bxs-hide eye-icon"></i>
        </div>

        <div class="field input-field" id="address">
          <input
            type="text"
            id="phoneNumber"
            placeholder="Address"
            class="password"
          />
        </div>

        <div class="field input-field">
          <input type="text" placeholder="Phone Number" class="password" />
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
            <button onclick="addSignUpData()" class="field button-field">
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

<style></style>
