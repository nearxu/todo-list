import Vue from "vue";
import Vuex from "vuex";

const state = {
  todos: []
};

const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    todo.text = text;
    todo.done = done;
  }
};

const actions = {
  addTodo({ commit }, text) {
    commit("addTodo", {
      text,
      done: false
    });
  },
  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },
  toggleTodo({ commit }, todo) {
    commit("editTodo", {
      todo,
      done: !todo.done
    });
  },
  editTodo({ commit }, { todo, value }) {
    commit("editTodo", { todo, text: value });
  },
  toggleAll({ state, commit }, done) {
    state.todos.forEach(todo => {
      commit("editTodo", { todo, done });
    });
  }
};

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;
