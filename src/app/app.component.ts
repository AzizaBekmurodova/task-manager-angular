import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newTask = '';
  currentFilter = 'all';

  tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false
    }
  ];

  get filteredTasks(): Task[] {
    if (this.currentFilter === 'active') {
      return this.tasks.filter(task => !task.completed);
    }

    if (this.currentFilter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }

    return this.tasks;
  }

  addTask(): void {
    const title = this.newTask.trim();

    if (!title) {
      return;
    }

    this.tasks.push({
      id: Date.now(),
      title,
      completed: false
    });

    this.newTask = '';
  }

  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  setFilter(filter: string): void {
    this.currentFilter = filter;
  }
}