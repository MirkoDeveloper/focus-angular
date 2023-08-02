import { Component, Input } from '@angular/core';

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

  toggleTask() {
    this.task.completed = !this.task.completed;
  }
}
