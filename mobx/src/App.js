import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "mobx-react";
import TodoListView from "./components/todo";
import store from "./store";

console.log(store, "store");
class App extends Component {
  render() {
    return (
      <Provider todolist={store}>
        <TodoListView />
      </Provider>
    );
  }
}

export default App;
