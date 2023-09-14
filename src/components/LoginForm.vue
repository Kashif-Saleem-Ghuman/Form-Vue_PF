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
            <a href="./signUp.html"> Sign Up</a>
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background: #f9f9f9;
}
.container {
  width: 100%;

  min-height: 100vh;
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: #8b8b8b;
  gap: 2vw;
  padding: 5vw;
}

.form {
  max-width: 425px;
  width: 100%;
  height: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
}

form .field {
  position: relative;
}

.eye-icon {
  font-size: center;
  color: #8b8b8b;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 5px;
}

header {
  font-size: 5vw;
  font-weight: 600;
  color: black;
  text-align: center;
}

form {
  margin-top: 2vh;
}

form .field {
  height: 45px;
  width: 100%;
  margin-top: 3vh;
}

.field input {
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 8px;
}

.field,
.button-login {
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: black;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-field-sign-up {
  margin-top: 1vh;
  justify-self: end;
  align-self: center;
}

.button-field-sign-up a {
  text-decoration: none;
  color: blue;
}

.field input {
  border: 1px solid #8b8b8b;
  padding: 1vw;
  border-radius: 8px;
}

.btn-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2vh;
  width: 100%;
  gap: 0.5vw;
}

.button-field {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-link {
  margin-top: 2vh;
  text-align: center;
}

.message {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2vw;
  color: green;
  text-align: center;
  font-size: 2.5vw;
  font-weight: 600;
  width: 80%;
}

#camera {
  width: 100%;
  height: 50vh;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 2vh;
  margin-bottom: 1vh;
}
</style>
