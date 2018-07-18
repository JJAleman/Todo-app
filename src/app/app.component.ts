import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput: string = "";

  todos = [];

  checkOffTodo(todo) {
    todo.isChecked = (todo.isChecked) ? false:true;
  }

  createTodo() {
    let trimmedInput  = this.todoInput.trim();
    if(this.todoInput != ""){
      this.todos.push({
        isChecked: false,
        name: this.todoInput,
      });
    }
    console.log(this.todos);
    this.todoInput = "";
  }

  editTodo(todo) {
    let index = this.todos.indexOf(todo);
    console.log(index);
   
    let tempTodoDesc = this.todos[index].name;
    this.todos[index].name = prompt("Please edit your todo", this.todos[index].name);
    if (this.todos[index].name == null){
      this.todos[index].name = tempTodoDesc;
    }
    
  }

  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  deleteAllTodos() {
    this.todos = [];
  }
}
