<template>
  <article class="test">
    <p>{{vue}}</p>
    <p>hello vue js</p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      vue: "vue"
    };
  }
};
</script>

<style>
.test > p {
  background-color: aqua;
}
</style>