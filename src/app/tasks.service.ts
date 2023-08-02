import { Injectable } from '@angular/core';
import { TaskInterface } from './interfaces';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: TaskInterface[] = [
    { title: 'Ripassare angular', completed: false },
    { title: 'Vedere Pipe', completed: false },
    { title: 'Controllare come funzionanavano i services', completed: false },
    { title: 'Deployare i commit', completed: false },
  ];

  private localStorageKey = 'tasks';

  constructor() {
    this.loadTasksFromLocalStorage();
  }

  // Metoto per caricare i task dal localstorage
  private loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem(this.localStorageKey);
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.emitTasksChanged();
    }
  }

  // Metodo per salvare i task
  private saveTasksToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
  }

  // Metodo per creare un nuovo task
  createTask(task: TaskInterface): void {
    this.tasks.push(task);
    this.saveTasksToLocalStorage(); // Salva i tasks in localStorage
    this.emitTasksChanged();
  }

  // Metodo per ottenere la lista delle task
  getTasks(): TaskInterface[] {
    return this.tasks;
  }

  tasksChanged = new Subject<void>();

  // Metodo per aggiornare una specifica task
  updateTask(index: number, updatedTask: TaskInterface): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index] = updatedTask;
      this.emitTasksChanged();
      this.saveTasksToLocalStorage(); // Salva i tasks in localStorage
    }
  }
  // Metodo per eliminare un task
  deleteTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
      this.emitTasksChanged();
      this.saveTasksToLocalStorage(); // Salva i tasks in localStorage
    }
  }

  // Notifica cambiamento
  private emitTasksChanged() {
    this.tasksChanged.next();
  }

  // Numero totale dei task
  totalTasks() {
    return this.tasks.length;
  }
}
