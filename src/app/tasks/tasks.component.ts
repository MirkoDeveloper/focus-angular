import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TasksService) {
    this.tasks = this.taskService.getTasks();
  }
}
