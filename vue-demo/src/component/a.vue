<template>
  <div @click="handleEmit">hello my is a, click emit select event!</div>
</template>

<script>
import Bus from "./bus";
export default {
  data() {
    return {};
  },
  methods: {
    handleEmit() {
      Bus.$emit("click", "hello b");
    }
  }
};
</script>
