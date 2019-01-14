<template>
  <div class="login">
    <form action>
      <label for>github token</label>
      <input type="text" v-model="token">
      <button @click="handleLogin">login</button>
    </form>
  </div>
</template>

<script>
import http from "../utils/request";
export default {
  name: "Login",
  data() {
    return {
      token: ""
    };
  },
  mounted() {
    // this.getData();
  },
  methods: {
    handleLogin() {
      const val = this.token.trim();
      if (val) {
        http
          .post("/accesstoken", {
            accesstoken: val
          })
          .then(response => {
            console.log(response.data);
          });
      } else {
        alert("token 不能为空！");
      }
    },
    getData() {
      http
        .get("/topics", {
          page: 1,
          tab: "share",
          limit: 20
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

