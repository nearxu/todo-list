<template>
  <div class="app">
    <div class="computed">
      <input type="text" v-model="firstName">
      <input type="text" v-model="secondName">
      <p>all name {{allName}} count: {{count}}</p>
    </div>
    <v-header :title="allName" :back="handleBack"></v-header>
    <v-count :num="count" @incre="increment" @decre="decrement"></v-count>
    <v-ref ref="handleRef"></v-ref>
    <div class="ref">
      <button @click="toggleRef">handleRef</button>
    </div>

    <div class="a-b">
      <v-a></v-a>
      <v-b></v-b>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import Count from "./count";
import Ref from "./ref";
import Acom from "./a";
import Bcom from "./b";

export default {
  name: "App",
  data() {
    return {
      firstName: "",
      secondName: "",
      count: 0
    };
  },
  components: {
    "v-header": Header,
    "v-count": Count,
    "v-ref": Ref,
    "v-a": Acom,
    "v-b": Bcom
  },
  methods: {
    handleBack() {
      alert("back!");
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    toggleRef() {
      this.$refs.handleRef.sum();
    }
  },
  computed: {
    allName() {
      return this.firstName + this.secondName;
    }
  },
  watch: {
    allName() {
      return this.count++;
    }
  }
};
</script>

<style>
</style>