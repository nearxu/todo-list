import Vue from "vue";
import Router from "vue-router";
import Index from "@/pages/index";
import TestVuex from "@/pages/test-vuex";
import TodoList from "@/components/index";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/test-vuex",
      name: "TestVues",
      component: TestVuex
    },
    {
      path: "/todolist",
      name: "TodoList",
      component: TodoList
    }
  ]
});
