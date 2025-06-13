import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class Todo {
  newTodo = signal('');
  todos = signal<string[]>([]);

  addTodo() {
    const value = this.newTodo().trim();
    if (value) {
      this.todos.update((todos) => [...todos, value]);
    }
  }
}
