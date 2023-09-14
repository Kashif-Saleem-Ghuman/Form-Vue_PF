<template>
  <LoginForm title="LOGIN" />
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
export default {
  name: "App",
  components: {
    LoginForm,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        reminder: false,
      },
      {
        id: 2,
        text: "Meeting at School",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        reminder: true,
      },
      {
        id: 4,
        text: "Clean Yard",
        reminder: true,
      },
    ];
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
