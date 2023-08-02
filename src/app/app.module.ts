import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';

import { CapitalizePipe } from './capitalize.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { SingleTaskComponent } from './tasks/single-task/single-task.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    NavigationComponent,
    ContentComponent,
    TasksComponent,
    SingleTaskComponent,
    AddTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
