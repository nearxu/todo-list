<template>
  <div class="count">
    <button @click="increment">add</button>
    <button @click="decrement">decrement</button>
    <p>{{num}}</p>
  </div>
</template>

<script>
export default {
  props: ["num"],
  methods: {
    increment() {
      this.$emit("incre");
    },
    decrement() {
      this.$emit("decre");
    }
  }
};
</script>

<style>
</style>
