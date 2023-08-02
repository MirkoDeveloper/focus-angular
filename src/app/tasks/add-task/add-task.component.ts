import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';

import { TaskInterface } from 'src/app/interfaces';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  newTask: TaskInterface = { title: '', completed: false };

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    console.log(this.tasksService);
  }

  addTask(): void {
    if (this.newTask.title.trim() === '') {
      // condizionale per non aggiungere record vuoti task vuoti
      return;
    }

    // Aggiungi il nuovo task utilizzando il servizio
    this.tasksService.createTask(this.newTask);

    // Resettare il campo del nuovo task dopo l'aggiunta
    this.newTask = { title: '', completed: false };
  }
}
