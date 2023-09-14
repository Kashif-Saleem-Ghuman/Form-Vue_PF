<template>
  <div :key="hello.id" v-for="hello in tasks">
    <ToDo :neww="hello" />
  </div>
</template>

<script>
import ToDo from "./ToDo.vue";
export default {
  name: "TasksToDo",
  props: {
    tasks: Array,
  },
  components: {
    ToDo,
  },
};
</script>
