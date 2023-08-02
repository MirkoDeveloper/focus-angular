import { Component, Input } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css'],
})
export class SingleTaskComponent {
  @Input() task: any;

  active: boolean = false;

  constructor(private tasksService: TasksService) {}

  toggleTask() {
    this.task.completed = !this.task.completed;
  }

  onDeleteTask() {
    const index = this.tasksService.getTasks().indexOf(this.task);
    if (index !== -1) {
      this.tasksService.deleteTask(index);
    }
  }
}
