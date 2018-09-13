import React, { Component } from 'react';
import test from './redux/test'
import AddTodo from './container/add';
import List from './container/list';
import FilterLink from './container/footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <List />
        <FilterLink />
      </div>
    );
  }
}

export default App;
