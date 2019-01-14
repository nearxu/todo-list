<template>
  <div>hello my is b,listener event a !!!</div>
</template>

<script>
import Bus from "./bus";
export default {
  data() {
    return {};
  },
  methods: {
    handleEmit() {
      Bus.$on("click", data => {
        console.log(data, "data");
      });
    }
  }
};
</script>
