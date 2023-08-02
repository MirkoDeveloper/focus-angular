import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  title = 'Today';
  tasknumber: number = this.tasks.totalTasks();

  private tasksSubscription: Subscription = new Subscription();

  constructor(private tasks: TasksService) {
    this.tasksSubscription = this.tasks.tasksChanged.subscribe(() => {
      this.tasknumber = this.tasks.totalTasks();
    });
  }

  ngOnDestroy() {
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }
  }
}
