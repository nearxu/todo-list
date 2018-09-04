import { observable, computed, action } from "mobx";

class Todo {
  @observable
  title;
  @observable
  filished = false;
  id = Math.random();
  constructor(title) {
    this.title = title;
  }
}

class TodoList {
  @observable
  todos = [];
  @computed
  get unfinishedTodo() {
    return this.todos.filter(todo => !todo.filished).length;
  }
  @computed
  get finishTodo() {
    return this.todos.filter(todo => todo.filished).length;
  }
  @action
  addTodo = title => {
    if (!title) return;
    this.todos.push(new Todo(title));
  };
  @action
  delete = id => {
    const exsitIndex = this.todos.findIndex(m => m.id === id);
    this.todos.splice(exsitIndex, 1);
  };
  @action
  fixedTodo = (id, title) => {
    const exsitIndex = this.todos.findIndex(m => m.id === id);
    this.todos[exsitIndex].title = title;
  };
}

const store = new TodoList();

export default store;
