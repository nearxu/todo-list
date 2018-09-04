import React, { Component } from "react";

import { observer, inject } from "mobx-react";

@inject("todolist")
@observer
class TodoView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDeleteTodo(id) {
    this.props.todolist.delete(id);
  }
  render() {
    const { todo } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={todo.finished}
          onChange={() => {
            todo.finished = !todo.finished;
          }}
        />
        <span>{todo.title}</span>
        <button onClick={todo => this.handleDeleteTodo(todo.id)}>delete</button>
      </div>
    );
  }
}

//@inject为了使被装饰的组件以 props
// 的形式获取到 Provider 传递过来的数据。
@inject("todolist")
@observer
export default class TodoListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
      // all: props.todolist.finishTodo
    };
  }
  changeTitle(e) {
    let val = e.target.value.trim();
    this.setState({ title: val });
  }
  submit() {
    const { title } = this.state;
    this.props.todolist.addTodo(title);
    this.setState({ title: "" });
  }
  handleCheckAll() {
    let { checkFinishAll, todolist } = this.props;
    this.setState({ checkFinishAll: !checkFinishAll }, () => {
      todolist.todos.map(m => (!m.finished ? { ...m, finished: true } : m));
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onChange={this.changeTitle.bind(this)}
        />
        <button onClick={this.submit.bind(this)}>submit</button>
        <ul>
          {this.props.todolist.todos.map(todo => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.todolist.unfinishedTodo}
        {/* <div>
          <input
            type="checkbox"
            value={all === this.props.todolist.todos.length ? true : false}
            onChange={this.handleCheckAll.bind(this)}
          />
          <label>全选</label>
        </div> */}
      </div>
    );
  }
}
