import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [CommonModule],
})
export class Todo {
  newTodo = signal('');
  todos = signal<{ id: string; todo: string }[]>([]);

  addTodo() {
    const value = this.newTodo().trim();
    if (value) {
      this.todos.update((todos) => [...todos, { id: uuidv4(), todo: value }]);
      this.newTodo.set('');
    }
  }

  deleteTodo(id: string) {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }
}
