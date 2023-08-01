import { Component } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css'],
})
export class SingleTaskComponent {
  active: boolean = false;

  toggleActive() {
    this.active = !this.active;
  }
}