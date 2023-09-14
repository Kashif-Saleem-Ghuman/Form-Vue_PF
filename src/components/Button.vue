<template>
  <button @click="onClick()" :style="{ backgroundColor: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonAddTask",
  components: {},
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("Clicked");
    },
  },
};
</script>

<style>
.btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 1vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1vw;
  padding: 0.5em 1em;
  margin: 1vw;
  cursor: pointer;
  border-radius: 8px;
  transition: ease-in-out 0.5s;
}
</style>
